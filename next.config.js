const withPreact = require("next-plugin-preact");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["images.saatchiart.com"] },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPreact(nextConfig);
