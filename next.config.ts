import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.vrajamarii.ro',
        pathname: '/api/media/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-2a9adf81093f4af9a2207498e7872ee3.r2.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vm-blog-newsletter.vercel.app',
        pathname: '/api/media/**',
      },
    ],
  },
};

export default nextConfig;
