'use client';

import AnimateIn from '@/components/ui/AnimateIn';
import { resume } from '@/lib/resume';

const projectIcons = [
  // Portal
  'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  // Chatbot
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  // Explore/Search
  'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  // Micro-frontend
  'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
];

const projectColors = ['#ff5c35', '#ff8c35', '#ffb335', '#c45cff'];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
      style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background decoration */}
      <div
        className="orb"
        aria-hidden
        style={{ width: 500, height: 500, background: 'var(--accent)', bottom: -150, right: -150, opacity: 0.07 }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <AnimateIn>
          <span className="section-label">Work</span>
          <h2 className="section-title" id="projects-heading">
            Key <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Production systems I've built and shipped — each driving measurable business impact at scale.
          </p>
        </AnimateIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
            marginTop: 56,
          }}
        >
          {resume.projects.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            return (
              <AnimateIn key={project.name} delay={i * 100} from="scale">
                <article
                  className="card"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Corner accent */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 100,
                      height: 100,
                      background: `radial-gradient(circle at top right, ${color}15, transparent 70%)`,
                    }}
                  />

                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
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
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={projectIcons[i % projectIcons.length]} />
                      </svg>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 11,
                        fontWeight: 600,
                        color,
                        padding: '4px 10px',
                        borderRadius: 100,
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.role}
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: 22,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        marginBottom: 4,
                      }}
                    >
                      {project.name}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 14,
                      }}
                    >
                      {project.stack}
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Impact highlight */}
                  <div
                    style={{
                      background: `${color}0d`,
                      border: `1px solid ${color}20`,
                      borderRadius: 10,
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                    <span style={{ fontSize: 13, color, fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                      {project.impact}
                    </span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '4px 10px',
                          borderRadius: 100,
                          background: 'var(--border)',
                          fontSize: 11,
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
