// next.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario para __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'app/components');
    config.resolve.alias['@types'] = path.resolve(__dirname, 'app/types');
    return config;
  },
};

export default nextConfig;
