import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ritikkumarsingh.dev'),
  title: {
    default: 'Ritik Kumar Singh — Frontend Engineer',
    template: '%s | Ritik Kumar Singh',
  },
  description:
    'Frontend Engineer specialising in scalable React architectures and high-conversion fintech platforms. 5+ years building high-traffic systems with measurable business impact.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Micro-frontends',
    'Fintech',
    'ET Money',
    'Ritik Kumar Singh',
    'Web Performance',
    'Core Web Vitals',
  ],
  authors: [{ name: 'Ritik Kumar Singh', url: 'https://linkedin.com/in/ritik-k-s' }],
  creator: 'Ritik Kumar Singh',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ritikkumarsingh.dev',
    title: 'Ritik Kumar Singh — Frontend Engineer',
    description:
      'Frontend Engineer specialising in scalable React architectures and high-conversion fintech platforms.',
    siteName: 'Ritik Kumar Singh Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ritik Kumar Singh — Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritik Kumar Singh — Frontend Engineer',
    description:
      'Frontend Engineer specialising in scalable React architectures and high-conversion fintech platforms.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://ritikkumarsingh.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff5c35" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ritik Kumar Singh',
              url: 'https://ritikkumarsingh.dev',
              email: 'ritiksingh.malviyan@gmail.com',
              telephone: '+91 9548993630',
              jobTitle: 'Frontend Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'ET Money (Times Internet)',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Gurugram',
                addressCountry: 'IN',
              },
              sameAs: ['https://linkedin.com/in/ritik-k-s'],
              knowsAbout: [
                'React.js',
                'Next.js',
                'TypeScript',
                'Frontend Architecture',
                'Micro-frontends',
                'Web Performance',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
