import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.satria-wisata.com',
        pathname: '/public/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api-porto-keena.vercel.app',
        pathname: '/**',
      }
    ],
  },
}

export default config

