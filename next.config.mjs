import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  // other Next.js config options here
});

export default nextConfig;
