// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@"         ] = path.resolve(__dirname, "app");
    config.resolve.alias["@components"] = path.resolve(__dirname, "app/components");
    config.resolve.alias["@types"    ] = path.resolve(__dirname, "app/types");
    return config;
  },
};

module.exports = nextConfig;
