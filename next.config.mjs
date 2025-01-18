/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensure React's strict mode is enabled
  images: {
    domains: ['res.cloudinary.com', 'cdn.sanity.io'], // Add both Cloudinary and Sanity's domain here
  },
};

export default nextConfig;
