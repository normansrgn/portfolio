import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Отключить ESLint при сборке
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;