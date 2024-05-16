/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'graphicsfamily.com',
            }
        ]
    }
};

export default nextConfig;
