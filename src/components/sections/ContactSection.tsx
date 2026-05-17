'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import { resume } from '@/lib/resume';

const contactItems = [
  {
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    label: 'Email',
    value: resume.email,
    href: `mailto:${resume.email}`,
  },
  {
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    label: 'Phone',
    value: resume.phone,
    href: `tel:${resume.phone}`,
  },
  {
    icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ritik-k-s',
    href: resume.linkedin,
  },
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
    label: 'Location',
    value: resume.location,
    href: 'https://maps.google.com/?q=Gurugram,India',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
      style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated ring SVG */}
      <svg
        aria-hidden
        style={{
          position: 'absolute',
          right: -200,
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
        width="700"
        height="700"
        viewBox="0 0 700 700"
        fill="none"
      >
        <circle cx="350" cy="350" r="340" stroke="var(--accent)" strokeWidth="2">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 350 350"
            to="360 350 350"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="350" cy="350" r="240" stroke="white" strokeWidth="1" strokeDasharray="12 8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 350 350"
            to="0 350 350"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="contact-grid">
          {/* Left side */}
          <div>
            <AnimateIn>
              <span className="section-label">Let's Work Together</span>
              <h2
                className="section-title"
                id="contact-heading"
                style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
              >
                Have a project <span>in mind?</span>
              </h2>
              <p className="section-subtitle">
                I'm currently open to new opportunities — full-time roles, freelance projects, or technical consulting. Let's build something impactful.
              </p>

              <a
                href={`mailto:${resume.email}`}
                className="btn-primary"
                style={{ marginTop: 36, fontSize: 16, padding: '16px 36px' }}
                aria-label={`Send email to ${resume.email}`}
              >
                Send a Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </a>
            </AnimateIn>
          </div>

          {/* Right: contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactItems.map((item, i) => (
              <AnimateIn key={item.label} delay={i * 80} from="right">
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="card contact-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '20px 24px',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'var(--accent-dim)',
                      border: '1px solid var(--accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', marginTop: 2 }}>
                      {item.value}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto' }} aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover svg:last-child { stroke: var(--accent) !important; }
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
