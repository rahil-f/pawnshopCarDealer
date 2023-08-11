/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'media.discordapp.net',
                port: '',
                pathname: '/attachments/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/attachments/**',
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig