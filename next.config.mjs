/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow Instagram embeds inside our pages
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "media-src 'self' blob: https: http:",
              "frame-src 'self' https://www.instagram.com https://instagram.com",
              "connect-src 'self' https: wss:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
