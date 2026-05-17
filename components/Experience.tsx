import styles from "./Experience.module.css";

const EXPERIENCE = [
  {
    company: "ET Money (Times Internet)",
    role: "Software Engineer II — Frontend",
    period: "2022 – Present",
    location: "Gurugram",
    color: "#ff5722",
    highlights: [
      "Built chatbot platform using Redux — reduced support tickets by 50% and drove 40% of new premium conversions within 4 months.",
      "Owned and built RM Web Portal (user management platform) as sole frontend engineer — enabled faster mutual fund distribution, directly impacting revenue growth.",
      "Developed goal-based investment journeys — contributed to ₹1 Cr SIP milestone within 3 months (~12% of total SIP book).",
      "Optimised high-traffic fintech pages using SSR and Core Web Vitals — 26% increase in conversions and 6,000+ app installs.",
      "Led scalable micro-frontend architecture using Vite and Module Federation — enabled parallel development and faster releases.",
      "Built production-grade frontend systems with reusable component architecture and testing (RTL + Vitest) — improved release stability.",
      "Led frontend engineering practices and mentored 3 engineers — improved development velocity and reduced onboarding time.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "Vite", "Module Federation", "RTL", "Vitest", "SSR", "Core Web Vitals"],
    achievements: [
      { metric: "40%", label: "Premium Conversions" },
      { metric: "50%", label: "Support Reduction" },
      { metric: "26%", label: "Conversion Uplift" },
    ],
  },
  {
    company: "GlobalLogic",
    role: "Software Engineer I — Frontend",
    period: "2020 – 2022",
    location: "Noida",
    color: "#ff8a50",
    highlights: [
      "Led frontend setup for Quarkus backend migration — improved server response time and doubled application performance.",
      "Built centralised authentication library across multiple modules — ensured secure, consistent access control platform-wide.",
      "Improved performance via debounced search and lazy loading — reduced server calls by 4x and enhanced data loading speed.",
      "Enhanced shared component library (drag-drop, editable data tables) — enabled faster feature delivery and met critical client requirements.",
    ],
    tech: ["React.js", "Angular", "JavaScript", "Authentication", "Lazy Loading", "Component Library"],
    achievements: [
      { metric: "2×", label: "Server Performance" },
      { metric: "4×", label: "Server Calls Reduced" },
      { metric: "2×", label: "Star Performer" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`section section-alt ${styles.experience}`} aria-labelledby="exp-title">
      <div className="container">
        <header className="section-header reveal">
          <span className="tag">Work Experience</span>
          <h2 id="exp-title">
            Where I&apos;ve <span className="accent">Contributed</span>
          </h2>
          <p>5+ years across fintech and enterprise — building systems that scale, convert, and endure.</p>
        </header>

        <div className={styles.timeline}>
          {EXPERIENCE.map((job, i) => (
            <article
              key={job.company}
              className={`${styles.item} reveal`}
              style={{ transitionDelay: `${i * 0.15}s` }}
              aria-label={`${job.role} at ${job.company}`}
            >
              {/* Timeline decoration */}
              <div className={styles.timelineLeft}>
                <div className={styles.dot} style={{ background: job.color }} aria-hidden="true"/>
                {i < EXPERIENCE.length - 1 && <div className={styles.line} aria-hidden="true"/>}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{job.role}</h3>
                    <div className={styles.meta}>
                      <span className={styles.company} style={{ color: job.color }}>{job.company}</span>
                      <span className={styles.sep} aria-hidden="true">·</span>
                      <span className={styles.location}>{job.location}</span>
                    </div>
                  </div>
                  <time className={styles.period} dateTime={job.period}>{job.period}</time>
                </header>

                {/* Achievement metrics */}
                <div className={styles.metrics} aria-label="Key achievements">
                  {job.achievements.map((a) => (
                    <div className={styles.metric} key={a.label}>
                      <span className={styles.metricValue}>{a.metric}</span>
                      <span className={styles.metricLabel}>{a.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className={styles.bullets} role="list">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className={styles.bullet}>
                      <span className={styles.bulletIcon} aria-hidden="true">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className={styles.techStack} aria-label="Technologies used">
                  {job.tech.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
