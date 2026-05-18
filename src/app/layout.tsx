import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ScrollProgress from '@/components/ScrollProgress'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  ),
  title: 'Niño Niel Iroc - Full Stack Developer | Philippines | Remote',
  description:
    'Full Stack Developer based in the Philippines with 4 years of experience building enterprise web applications for finance and healthcare clients. React, Vue.js, Laravel, Node.js, Spring Boot. Open to remote work.',
  openGraph: {
    title: 'Niño Niel Iroc - Full Stack Developer',
    description:
      'Full Stack Developer based in the Philippines. 4 years building enterprise web systems for finance and healthcare. Open to remote work.',
    type: 'website',
    url: '/',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Niño Niel Iroc - Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niño Niel Iroc - Full Stack Developer',
    description:
      'Full Stack Developer based in the Philippines. 4 years building enterprise web systems for finance and healthcare. Open to remote work.',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Niño Niel Iroc',
              jobTitle: 'Full Stack Developer',
              worksFor: { '@type': 'Organization', name: 'Syntactics Inc.' },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cagayan de Oro',
                addressCountry: 'PH',
              },
              sameAs: [
                'https://www.linkedin.com/in/ni%C3%B1o-niel-iroc-446823250/',
                'https://github.com/IrocNinoNiel',
              ],
              knowsAbout: [
                'React.js', 'Vue.js', 'Laravel', 'Node.js', 'Spring Boot',
                'TypeScript', 'MySQL', 'PostgreSQL', 'Docker',
              ],
            }),
          }}
        />
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
