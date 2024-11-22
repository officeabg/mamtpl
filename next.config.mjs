/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
    output: "export",
    typescript: {
      ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    basePath: isProd ? "/bootstrap/app/mamix-ts/preview" : undefined,
    assetPrefix : isProd ? "/bootstrap/app/mamix-ts/preview" : undefined,
    images: {
      loader: "imgix",
      path: "/",
    },
};

export default nextConfig;
