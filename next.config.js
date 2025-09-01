/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  
  // Use standalone output for better Vercel compatibility
  output: 'standalone',
  
  // Optimize for Vercel deployment
  swcMinify: true,
}

module.exports = nextConfig
