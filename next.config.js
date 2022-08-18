/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            unoptimized: true,
        },
    },
}

if (process.env.BASE_PATH) {
    nextConfig.basePath = process.env.BASE_PATH
} else {
    nextConfig.basePath = process.env.NODE_ENV === 'development' ? '' : '/app'
}

module.exports = nextConfig
