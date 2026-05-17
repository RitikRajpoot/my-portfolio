'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import { resume } from '@/lib/resume';

export default function EducationSection() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <AnimateIn>
          <span className="section-label">Background</span>
          <h2 className="section-title" id="education-heading">
            Education & <span>Recognition</span>
          </h2>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginTop: 56,
          }}
          className="edu-grid"
        >
          {/* Education */}
          <div>
            <AnimateIn>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 24,
                }}
              >
                Education
              </h3>
            </AnimateIn>

            {resume.education.map((edu, i) => (
              <AnimateIn key={edu.institution} delay={i * 80} from="left">
                <div
                  className="card"
                  style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}
                >
                  {/* Decorative */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      background: 'var(--accent)',
                      borderRadius: '4px 0 0 4px',
                    }}
                  />

                  <div style={{ paddingLeft: 16 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '4px 12px',
                        borderRadius: 100,
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--accent-border)',
                        fontFamily: 'var(--font-display)',
                        fontSize: 11,
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                        marginBottom: 12,
                      }}
                    >
                      CGPA: {edu.cgpa}
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 17,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {edu.degree}
                    </h4>

                    <div style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {edu.institution}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: 'var(--text-muted)',
                        marginTop: 4,
                        display: 'flex',
                        gap: 8,
                        alignItems: 'center',
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location} · {edu.period}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* Animated SVG diploma illustration */}
            <AnimateIn delay={200}>
              <div
                style={{
                  marginTop: 24,
                  padding: '24px',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Electronics engineering icon"
                >
                  <circle cx="32" cy="32" r="30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4">
                    <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="20s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="32" cy="32" r="20" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
                  <path d="M22 32 L28 26 L34 32 L40 26" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="22" cy="32" r="3" fill="var(--accent)" />
                  <circle cx="40" cy="26" r="3" fill="var(--accent-light)" />
                  <path d="M22 38 L40 38" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
                    ECE Background
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>
                    Strong foundation in circuits & systems brings a hardware-aware perspective to frontend engineering.
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Achievements */}
          <div>
            <AnimateIn>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: 24,
                }}
              >
                Achievements
              </h3>
            </AnimateIn>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {resume.achievements.map((a, i) => (
                <AnimateIn key={a.title} delay={i * 100} from="right">
                  <div
                    className="card"
                    style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--accent-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-hidden
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: 16,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {a.title}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 12,
                          fontWeight: 600,
                          color: 'var(--accent)',
                          marginTop: 2,
                          marginBottom: 6,
                        }}
                      >
                        @ {a.org}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {a.description}
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Floating stats */}
            <AnimateIn delay={300}>
              <div
                style={{
                  marginTop: 24,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                }}
              >
                {[
                  { n: '3', label: 'Engineers Mentored' },
                  { n: '60%+', label: 'Test Coverage Maintained' },
                  { n: '4×', label: 'Server Calls Reduced' },
                  { n: '12%', label: 'SIP Book Contributed' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="card"
                    style={{
                      padding: '20px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 28,
                        color: 'var(--accent)',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {stat.n}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
