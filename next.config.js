/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
output: "export",
images: {
  domains:["cdn.sanity.io"],
  unoptimized: true,
},
};

module.exports = nextConfig;
