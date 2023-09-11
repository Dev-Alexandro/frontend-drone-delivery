/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {

        NEXT_API_USERNAME: process.env.NEXT_API_USERNAME,
        NEXT_API_PASSWORD: process.env.NEXT_API_PASSWORD

    },
}

module.exports = nextConfig
