// server.js
const next = require("next");
const express = require("express");
const server = express();
server.use(express.json()); // for json
server.use(express.urlencoded({ extended: true })); // for form data

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

app.prepare().then(async () => {
  server.get("/s/*", (req, res) => {
    res.json({ result: true });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
