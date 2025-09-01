/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  
  // Fix for Vercel deployment build trace collection issue
  experimental: {
    // Disable build traces collection to prevent stack overflow
    buildTraces: false,
    // Disable other experimental features that might cause issues
    serverComponentsExternalPackages: [],
  },
  
  // Use standalone output for better Vercel compatibility
  output: 'standalone',
  
  // Optimize for Vercel deployment
  swcMinify: true,
  
  // Disable telemetry during build
  telemetry: false,
  
  // Optimize bundle size
  webpack: (config, { isServer }) => {
    // Optimize for production builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    return config
  },
}

module.exports = nextConfig
