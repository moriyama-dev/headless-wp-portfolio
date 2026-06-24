import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.wpgraphql.com",
      },
      // 将来自前のWordPressホストを追加する場合はここに追記
    ],
  },
};

export default nextConfig;
