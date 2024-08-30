/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
