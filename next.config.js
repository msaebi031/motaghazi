const nextTranslate = require("next-translate");

module.exports = {
  swcMinify: true,
  ...nextTranslate(),
  experimental: {
    scrollRestoration: true,
  },
  // assetPrefix: BASE_PREFIX_FOR_APP,
  // async rewrites() {
  //   return [
  //     {
  //       source: `${BASE_PREFIX_FOR_APP}/_next/:path*`,
  //       destination: "_next/:path*",
  //     },
  //   ];
  // },
};
