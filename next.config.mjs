/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp'],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig