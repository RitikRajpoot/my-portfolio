import styles from "./Projects.module.css";

const PROJECTS = [
  {
    name: "RM Web Portal",
    subtitle: "React + TypeScript + Vite",
    desc: "Scalable user management platform for mutual fund distribution. Built as sole frontend engineer, enabling relationship managers to run goal-based financial planning for clients. Directly impacted revenue growth through faster fund distribution.",
    impact: "Sole FE owner • Revenue growth driver",
    tags: ["React", "TypeScript", "Vite", "REST API", "User Management"],
    icon: "🏦",
    accentColor: "#ff5722",
    metrics: [
      { value: "100%", label: "FE Ownership" },
      { value: "↑ MF", label: "Distribution" },
    ],
  },
  {
    name: "Chatbot Platform",
    subtitle: "Redux-powered conversational UI",
    desc: "Full-featured chatbot platform with Redux state management for ET Money's premium support ecosystem. Dramatically reduced inbound support load while becoming the primary driver of new premium subscription conversions.",
    impact: "50% support reduction • 40% conversions",
    tags: ["React", "Redux", "WebSockets", "Fintech", "Chatbot"],
    icon: "💬",
    accentColor: "#ff8a50",
    metrics: [
      { value: "50%", label: "Support Drop" },
      { value: "40%", label: "Conversions" },
    ],
  },
  {
    name: "Explore Platform",
    subtitle: "Next.js SSR — SEO-first fintech pages",
    desc: "Server-side rendered marketing and discovery pages for ET Money, optimised for Core Web Vitals and organic SEO. The platform drove measurable increase in organic user acquisition and direct app installs.",
    impact: "26% conversion uplift • 6,000+ installs",
    tags: ["Next.js", "SSR", "SEO", "Core Web Vitals", "Performance"],
    icon: "🔍",
    accentColor: "#ffab40",
    metrics: [
      { value: "26%", label: "Conversion Uplift" },
      { value: "6K+", label: "App Installs" },
    ],
  },
  {
    name: "Micro-frontend Platform",
    subtitle: "Vite + Module Federation",
    desc: "Scalable micro-frontend architecture enabling independent deployments across multiple product surfaces. Designed for large team scalability with clear ownership boundaries and shared design system integration.",
    impact: "Parallel dev • Faster releases",
    tags: ["Vite", "Module Federation", "Architecture", "Scalability", "Micro-frontends"],
    icon: "⚡",
    accentColor: "#ff5722",
    metrics: [
      { value: "∞", label: "Scalability" },
      { value: "↑ DX", label: "Developer XP" },
    ],
  },
  {
    name: "Investment Journey Builder",
    subtitle: "Goal-based SIP flows",
    desc: "Goal-based investment journey UI that guided users through personalised SIP investment planning. Contributed directly to ET Money's ₹1 Cr SIP milestone within just 3 months of launch.",
    impact: "₹1 Cr SIP milestone in 3 months",
    tags: ["React", "Investment UX", "Fintech", "Forms", "Animations"],
    icon: "📊",
    accentColor: "#ff8a50",
    metrics: [
      { value: "₹1Cr", label: "SIP Milestone" },
      { value: "12%", label: "of SIP Book" },
    ],
  },
  {
    name: "Auth Library",
    subtitle: "Centralised identity at GlobalLogic",
    desc: "Platform-wide authentication library unifying access control across multiple frontend modules. Ensured consistent, secure session management and reduced authentication logic duplication across teams.",
    impact: "Platform-wide security • Zero auth bugs",
    tags: ["JavaScript", "Security", "Auth", "Library Design", "Cross-team"],
    icon: "🔐",
    accentColor: "#ffab40",
    metrics: [
      { value: "N+", label: "Modules Secured" },
      { value: "0", label: "Auth Bugs" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="proj-title">
      <div className="container">
        <header className="section-header reveal">
          <span className="tag">Key Systems</span>
          <h2 id="proj-title">
            Products I&apos;ve <span className="accent">Shipped</span>
          </h2>
          <p>From chatbots to micro-frontends — systems built for scale, performance, and measurable business impact.</p>
        </header>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              aria-label={project.name}
            >
              {/* Card top bar */}
              <div className={styles.topBar} style={{ background: `linear-gradient(90deg, ${project.accentColor}22, transparent)`, borderBottom: `1px solid ${project.accentColor}22` }}>
                <div className={styles.iconWrap} style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}33` }}>
                  <span aria-hidden="true">{project.icon}</span>
                </div>
                <div className={styles.metrics}>
                  {project.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricVal} style={{ color: project.accentColor }}>{m.value}</span>
                      <span className={styles.metricLbl}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.subtitle} style={{ color: project.accentColor }}>{project.subtitle}</p>
                <p className={styles.desc}>{project.desc}</p>

                <div className={styles.impact}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={project.accentColor} aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {project.impact}
                </div>

                <div className={styles.tags} aria-label="Technologies">
                  {project.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className={styles.hoverGlow} style={{ background: `radial-gradient(circle at 50% 100%, ${project.accentColor}15, transparent 70%)` }} aria-hidden="true"/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
