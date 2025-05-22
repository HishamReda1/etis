import { withIntlayer } from "next-intlayer/server";

let userConfig = undefined;

try {
  const module = await import('./v0-user-next.config.js'); // أو .mjs أو .ts حسب الموجود عندك
  userConfig = module.default;
} catch (e) {
  // ignore error
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(base, user) {
  if (!user) return;

  for (const key in user) {
    if (
      typeof base[key] === 'object' &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      base[key] = {
        ...base[key],
        ...user[key],
      };
    } else {
      base[key] = user[key];
    }
  }
}

export default withIntlayer(nextConfig);
