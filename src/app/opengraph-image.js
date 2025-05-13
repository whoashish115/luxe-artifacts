import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0a0a0a',
            color: '#f5f5f5',
            padding: '60px',
            justifyContent: 'center',
            alignItems: 'flex-start',
            fontSize: 60,
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            backgroundImage: 'linear-gradient(to bottom right, #1a1a1a, #000)',
          }}
        >
          <div style={{ fontSize: 24, color: '#bbb', marginBottom: 20 }}>
            Luxe Artifacts
          </div>
          <div>Luxe Artifacts NFT Minter</div>
          <div style={{ fontSize: 28, fontWeight: 400, marginTop: 20 }}>
            Mint. Own. Showcase.
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
