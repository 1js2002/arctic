/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb+srv://user:user@cluster0.7yi0evi.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "sdssadafaasdsda",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
