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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: '#f8fafc',
          fontSize: 96,
          fontWeight: 700,
        }}
      >
        InboxZap
        <div style={{ fontSize: 32, fontWeight: 400, marginTop: 24, color: '#94a3b8' }}>
          Clean your inbox in minutes
        </div>
      </div>
    ),
    { ...size },
  );
}
