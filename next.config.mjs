/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    instrumentationHook : true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },};

export default nextConfig;
