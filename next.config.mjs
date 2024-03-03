/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, {isServer}) => {
    // Add glsl loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
