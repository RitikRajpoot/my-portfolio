import styles from "./About.module.css";

export default function About() {
  const highlights = [
    { icon: "🚀", title: "Performance First", desc: "Obsessed with Core Web Vitals, SSR/SSG optimisation, and delivering sub-second experiences." },
    { icon: "⚙️", title: "System Thinker",   desc: "Architected micro-frontend platforms with Module Federation, enabling parallel team delivery." },
    { icon: "📈", title: "Business Impact",   desc: "Every line of code measured — 40% conversions, 26% uplift, 50% support reduction." },
    { icon: "🎯", title: "Product Mindset",   desc: "Bridging engineering and product: goal-based journeys, chatbots, investment flows." },
  ];

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <div className="reveal-left">
              <span className="tag">About Me</span>
              <h2 id="about-title" className={styles.heading}>
                Engineering that <span className="accent">drives</span> real business outcomes
              </h2>
              <p className={styles.para}>
                I&apos;m a Frontend Engineer with over 5 years of experience building production-grade,
                high-traffic applications in the fintech space. Currently at ET Money (Times Internet),
                I own and architect critical user-facing platforms that directly influence revenue and
                user engagement.
              </p>
              <p className={styles.para}>
                My approach marries deep technical craftsmanship — scalable component architectures,
                rigorous testing, and performance engineering — with a sharp focus on business metrics.
                I don&apos;t ship features; I ship outcomes.
              </p>
              <div className={styles.info}>
                {[
                  { label: "Location", value: "Gurugram, India" },
                  { label: "Email",    value: "ritiksingh.malviyan@gmail.com", href: "mailto:ritiksingh.malviyan@gmail.com" },
                  { label: "Phone",    value: "+91 9548993630", href: "tel:+919548993630" },
                  { label: "LinkedIn", value: "linkedin.com/in/ritik-k-s", href: "https://linkedin.com/in/ritik-k-s" },
                ].map((item) => (
                  <div className={styles.infoRow} key={item.label}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.infoValue} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.cards}>
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`card ${styles.card} reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.cardIcon} aria-hidden="true">{h.icon}</div>
                  <h3 className={styles.cardTitle}>{h.title}</h3>
                  <p className={styles.cardDesc}>{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Decorative SVG */}
            <div className={styles.deco} aria-hidden="true">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="decoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,87,34,0.3)"/>
                    <stop offset="100%" stopColor="rgba(255,138,80,0.05)"/>
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="260" height="260" rx="20" fill="none" stroke="rgba(255,87,34,0.12)" strokeWidth="1"/>
                <rect x="50" y="50" width="200" height="200" rx="15" fill="none" stroke="rgba(255,87,34,0.08)" strokeWidth="1" strokeDasharray="6 4"/>
                <circle cx="150" cy="150" r="60" fill="url(#decoGrad)" opacity="0.4"/>
                <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(255,87,34,0.1)" strokeWidth="1" strokeDasharray="3 6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
