/** @type {import('next').NextConfig} */
const nextConfig = { 
    output:'export',
    basePath:'/learning',
    distDir:'learning',
    eslint: {
    ignoreDuringBuilds: true,
},};

export default nextConfig;
