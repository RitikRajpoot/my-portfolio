import { resume } from '@/lib/resume';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        padding: '40px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 13,
              color: '#fff',
            }}
            aria-hidden
          >
            RK
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--text-secondary)' }}>
            Ritik Kumar Singh
          </span>
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
          Built with Next.js, TypeScript & a passion for performance.
          <br />
          <span style={{ fontSize: 12 }}>© {new Date().getFullYear()} Ritik Kumar Singh. All rights reserved.</span>
        </p>

        <nav aria-label="Social links" style={{ display: 'flex', gap: 8 }}>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              transition: 'all 0.2s ease',
            }}
            className="social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </a>
          <a
            href={`mailto:${resume.email}`}
            aria-label="Email"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              transition: 'all 0.2s ease',
            }}
            className="social-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </nav>
      </div>

      <style>{`
        .social-btn:hover { background: var(--accent-dim) !important; border-color: var(--accent-border) !important; color: var(--accent) !important; }
      `}</style>
    </footer>
  );
}
