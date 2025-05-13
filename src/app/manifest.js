export default function manifest() {
  return {
    name: 'Luxe Artifacts',
    short_name: 'LuxeNFT',
    description: 'Mint and showcase exclusive digital collectibles with Luxe Artifacts. A premium NFT experience powered by Web3.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#121212', // sleek dark theme for a premium feel
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icons/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icons/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/icons/android-chrome-512x512.png',
      },
    ],
  };
}
