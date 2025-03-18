import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  
  // For development
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:  "placehold.co"
      },
      {
        protocol: "https",
        hostname:  "randomuser.me"
      }
    ]
  }
};

export default nextConfig;
