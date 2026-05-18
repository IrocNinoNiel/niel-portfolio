import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export async function GET(_req: NextRequest) {
  const photoPath = path.join(process.cwd(), 'public', 'profile.jpg')
  const photoData = fs.readFileSync(photoPath)
  const photoBase64 = `data:image/jpeg;base64,${photoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          fontFamily: 'sans-serif',
          padding: '60px 80px',
          gap: '60px',
        }}
      >
        {/* Profile photo */}
        <img
          src={photoBase64}
          width={220}
          height={220}
          style={{
            borderRadius: '50%',
            border: '4px solid #6366f1',
            flexShrink: 0,
            objectFit: 'cover',
          }}
        />

        {/* Text block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '18px',
              color: '#6366f1',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Portfolio
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.1,
            }}
          >
            Niño Niel Iroc
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              fontWeight: 400,
            }}
          >
            Full Stack Developer · Open to Remote
          </div>

          {/* Tech pills */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {['React', 'Laravel', 'Node.js', 'Spring Boot'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.4)',
                  color: '#a5b4fc',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
