// server.js
const next = require("next");
const express = require("express");
const server = express();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

app.prepare().then(async () => {
  server.get("/_next/data/:buildId/v2/custom/:path*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    // => incoming url: /_next/data/:buildId/v2/custom/:path
    parsedUrl.pathname = parsedUrl.pathname.replace(
      "v2",
      req.headers["x-product"]
    );
    // => outgoing url: /_next/data/:buildId/:product/custom/:path
    handle(req, res, parsedUrl);
  });
  // Let Next.js handle rest of the routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
