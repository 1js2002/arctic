/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    API_URL: "https://arctic-bq7k1z2fo-1js2002.vercel.app",
    DB_URI:
      "mongodb+srv://user:user@cluster0.7yi0evi.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "sdssadafaasdsda",

    CLOUD_NAME: "dwzg7rajv",
    CLOUDINARY_API_KEY: "455836425949932",
    CLOUDINARY_API_SECRET: "e8Gwp86I57c1wzOVFLxDc3psKoA",
    STRIPE_PUBLIC_KEY:
      "pk_test_51Nm8uoSJQJDT4weLIAEdJRhiQReDvOciRbciD2USltEfcQGhsryFFLLkH5WQe6Qs5ZyyppbW8xDkoux1H9cniXIM00ZgZ8N9Ub",
    STRIPE_PRIVATE_KEY:
      "sk_test_51Nm8uoSJQJDT4weL2rlVbEcy5sIlHrnqL6LR4Xz38GIACruWumUhEkgV7l6PljxSNL64iWNd4Q4OgxYFUpbkyHF500iu85cPuX",
    STRIPE_WEBHOOK_SECRET:
      "whsec_514bf578d97d750d680fbfef6b1d18e1df9b6b76acb1ea62eb6c08edc6d66dc6",
  },
};

module.exports = nextConfig;
