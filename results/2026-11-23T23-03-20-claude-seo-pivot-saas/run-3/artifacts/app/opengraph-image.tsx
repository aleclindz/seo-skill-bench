import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#1a1f3d',
          color: '#ffffff',
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        <div>Lumina</div>
        <div style={{ fontSize: 32, fontWeight: 400, color: '#aab4ff', marginTop: 16 }}>
          The AI meeting assistant for teams
        </div>
      </div>
    ),
    { ...size }
  );
}
