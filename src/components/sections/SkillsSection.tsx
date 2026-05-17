'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import { resume } from '@/lib/resume';

const categoryIcons: Record<string, string> = {
  Languages: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'Frameworks & Architecture': 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'State & Performance': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'Testing & Build': 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18',
  'Styling & Tools': 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
};

const skillColors: Record<string, string> = {
  Languages: '#ff5c35',
  'Frameworks & Architecture': '#ff8c35',
  'State & Performance': '#ffb335',
  'Testing & Build': '#ff5c75',
  'Styling & Tools': '#c45cff',
};

export default function SkillsSection() {
  const categories = Object.entries(resume.skills);

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading" style={{ background: 'var(--bg-secondary)' }}>
      {/* Decorative SVG */}
      <svg
        aria-hidden
        style={{ position: 'absolute', right: 0, top: '10%', opacity: 0.04, pointerEvents: 'none' }}
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" strokeDasharray="8 8" />
        <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="1" strokeDasharray="4 12" />
        <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="1" />
      </svg>

      <div className="container" style={{ position: 'relative' }}>
        <AnimateIn>
          <span className="section-label">Expertise</span>
          <h2 className="section-title" id="skills-heading">
            My Technical <span>Skills</span>
          </h2>
          <p className="section-subtitle">
            5+ years of hands-on experience across the modern frontend stack, from architecture to pixel-perfect UIs.
          </p>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 20,
            marginTop: 56,
          }}
        >
          {categories.map(([category, skills], i) => {
            const color = skillColors[category] || 'var(--accent)';
            const iconPath = categoryIcons[category] || '';

            return (
              <AnimateIn key={category} delay={i * 80}>
                <div
                  className="card"
                  style={{ padding: '28px', height: '100%' }}
                >
                  {/* Category header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      aria-hidden
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={iconPath} />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 15,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {category}
                    </h3>
                  </div>

                  {/* Skills chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '5px 12px',
                          borderRadius: 100,
                          background: `${color}10`,
                          border: `1px solid ${color}25`,
                          fontFamily: 'var(--font-body)',
                          fontSize: 12,
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                        }}
                        className="skill-chip"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Featured skills highlight bar */}
        <AnimateIn delay={300} style={{ marginTop: 48 }}>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '32px 36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 32,
            }}
          >
            {[
              { label: 'React.js / Next.js', pct: 95 },
              { label: 'TypeScript', pct: 90 },
              { label: 'Performance / SSR', pct: 88 },
              { label: 'Micro-frontends', pct: 85 },
              { label: 'Testing (RTL/Vitest)', pct: 80 },
            ].map((item, i) => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>
                    {item.pct}%
                  </span>
                </div>
                <div style={{ height: 4, background: 'var(--border-strong)', borderRadius: 2, overflow: 'hidden' }}>
                  <SkillBar pct={item.pct} delay={i * 100} />
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      <style>{`
        .skill-chip:hover {
          background: var(--accent-dim) !important;
          border-color: var(--accent-border) !important;
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
}

function SkillBar({ pct, delay }: { pct: number; delay: number }) {
  const ref = (el: HTMLDivElement | null) => {
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.width = pct + '%';
        }, delay + 200);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  };

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        width: '0%',
        background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
        borderRadius: 2,
        transition: `width 1.2s cubic-bezier(0.16,1,0.3,1)`,
      }}
    />
  );
}
