/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/residential-and-commercial-crane-rentals",
        destination: "/residential-and-commercial-crane-rentals-saskatoon",
        permanent: true,
      },
      {
        source: "/industrial-plant-maintenance",
        destination: "/industrial-plant-maintenance-saskatoon",
        permanent: true,
      },
      {
        source: "/equipment-transport",
        destination: "/heavy-equipment-transport-services-saskatoon",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
