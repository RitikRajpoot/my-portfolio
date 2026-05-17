'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import { resume } from '@/lib/resume';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <svg
        aria-hidden
        style={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', opacity: 0.025, pointerEvents: 'none' }}
        width="500"
        height="600"
        viewBox="0 0 500 600"
        fill="none"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="280"
          fontFamily="Syne, sans-serif"
          fontWeight="800"
          fill="white"
        >
          EXP
        </text>
      </svg>

      <div className="container" style={{ position: 'relative' }}>
        <AnimateIn>
          <span className="section-label">Career</span>
          <h2 className="section-title" id="experience-heading">
            Work <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            Building impactful fintech products at scale with a focus on performance, architecture, and measurable business outcomes.
          </p>
        </AnimateIn>

        {/* Timeline */}
        <div style={{ marginTop: 64, position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: 28,
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              opacity: 0.3,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {resume.experience.map((exp, i) => (
              <AnimateIn key={exp.company} delay={i * 120} from="left">
                <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
                  {/* Timeline dot */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: exp.current ? 'var(--accent)' : 'var(--bg-card)',
                      border: exp.current ? 'none' : '2px solid var(--border-strong)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: exp.current ? '0 0 32px rgba(255,92,53,0.4)' : 'none',
                    }}
                    aria-hidden
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={exp.current ? '#fff' : 'var(--text-muted)'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    {exp.current && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -2,
                          right: -2,
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: '#4ade80',
                          border: '2px solid var(--bg-primary)',
                          animation: 'pulse 2s infinite',
                        }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="card" style={{ flex: 1, padding: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 800,
                            fontSize: 20,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {exp.role}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: 14,
                              color: 'var(--accent)',
                            }}
                          >
                            {exp.company}
                          </span>
                          <span style={{ color: 'var(--border-strong)' }}>·</span>
                          <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '6px 14px',
                          borderRadius: 100,
                          background: exp.current ? 'rgba(255,92,53,0.12)' : 'var(--bg-secondary)',
                          border: `1px solid ${exp.current ? 'rgba(255,92,53,0.3)' : 'var(--border)'}`,
                          fontFamily: 'var(--font-display)',
                          fontSize: 12,
                          fontWeight: 600,
                          color: exp.current ? 'var(--accent)' : 'var(--text-muted)',
                          letterSpacing: '0.02em',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                      }}
                    >
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <div
                            style={{
                              flexShrink: 0,
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: 'var(--accent)',
                              marginTop: 8,
                            }}
                            aria-hidden
                          />
                          <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74,222,128,0.4); } 50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(74,222,128,0); } }
      `}</style>
    </section>
  );
}
