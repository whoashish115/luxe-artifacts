import Layout from "../components/layout";
import "../styles/globals.css";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ThemeProvider } from "next-themes";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A1A1A',  // dark luxe black
};

export const metadata = {
  title: {
    template: '%s | Luxe Artifacts - NFT Minting Platform',
    default: 'Luxe Artifacts',
  },
  description:
    'Luxe Artifacts is a premium NFT minting platform offering exclusive, high-value digital collectibles on the blockchain. Mint, trade, and showcase unique digital art with ease.',
  keywords: [
    'NFT',
    'NFT minting',
    'digital collectibles',
    'blockchain',
    'crypto art',
    'Ethereum',
    'Solana',
    'NFT marketplace',
    'Luxe Artifacts',
    'web3',
    'decentralized',
  ],
  authors: [{ name: 'Luxe Artifacts Team' }],
  creator: 'Luxe Artifacts',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxe-artifacts.vercel.app',
    title: 'Luxe Artifacts',
    description:
      'Mint and collect exclusive NFTs on Luxe Artifacts — the premier platform for digital luxury collectibles on blockchain.',
    images: [
      {
        url: 'https://luxe-artifacts.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luxe Artifacts NFT Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Artifacts',
    description:
      'Exclusive NFT minting platform for high-end digital collectibles and art.',
    images: ['https://luxe-artifacts.vercel.app/og-image.png'],
    creator: '@LuxeArtifacts',
  },
  metadataBase: new URL('https://luxe-artifacts.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
