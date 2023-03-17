/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/cnrad',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/notcnrad',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/cnrad',
        permanent: true,
      }
    ]
  },
}
