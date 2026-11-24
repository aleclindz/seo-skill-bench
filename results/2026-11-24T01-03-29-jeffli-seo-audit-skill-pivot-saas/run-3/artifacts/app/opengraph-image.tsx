import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lumina — The AI Meeting Assistant for Teams';

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
          background: '#0f172a',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Lumina</div>
        <div style={{ fontSize: 32, marginTop: 20, color: '#94a3b8' }}>
          The AI Meeting Assistant for Teams
        </div>
      </div>
    ),
    size
  );
}
