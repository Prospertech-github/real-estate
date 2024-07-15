/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/prosper99/**'
        }
      ]
    }
};

export default nextConfig;
