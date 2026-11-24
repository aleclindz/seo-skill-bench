import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
          background: '#0f172a',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: '#6c8cff',
            marginBottom: 32,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 700 }}>Lumina</div>
        <div style={{ fontSize: 32, color: '#aab4d4', marginTop: 16 }}>
          The AI Meeting Assistant for Teams
        </div>
      </div>
    ),
    { ...size }
  );
}
