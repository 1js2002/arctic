/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        MONGO_URI: ''
    }
}

module.exports = nextConfig
