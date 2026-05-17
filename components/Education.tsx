import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`} aria-labelledby="edu-title">
      <div className="container">
        <header className="section-header reveal">
          <span className="tag">Education</span>
          <h2 id="edu-title">
            Academic <span className="accent">Foundation</span>
          </h2>
          <p>A strong engineering background forming the bedrock of 5+ years of professional growth.</p>
        </header>

        <div className={styles.content}>
          {/* Main Education Card */}
          <div className={`card ${styles.mainCard} reveal-left`}>
            {/* Decorative SVG */}
            <div className={styles.cardDeco} aria-hidden="true">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="eduGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,87,34,0.15)"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#eduGrad)"/>
                <circle cx="350" cy="50" r="80" fill="none" stroke="rgba(255,87,34,0.12)" strokeWidth="1" strokeDasharray="4 6"/>
                <circle cx="350" cy="50" r="50" fill="none" stroke="rgba(255,87,34,0.08)" strokeWidth="1"/>
                <path d="M 20 150 Q 200 100 380 150" stroke="rgba(255,87,34,0.1)" strokeWidth="1" fill="none"/>
              </svg>
            </div>

            <div className={styles.cardInner}>
              {/* Degree icon */}
              <div className={styles.degreeIcon} aria-hidden="true">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <rect width="60" height="60" rx="16" fill="rgba(255,87,34,0.12)" stroke="rgba(255,87,34,0.3)" strokeWidth="1"/>
                  <path d="M30 12 L48 22 L30 32 L12 22 Z" stroke="rgba(255,87,34,0.9)" strokeWidth="2" strokeLinejoin="round" fill="rgba(255,87,34,0.15)"/>
                  <path d="M18 26 L18 38 Q30 44 42 38 L42 26" stroke="rgba(255,87,34,0.9)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <line x1="48" y1="22" x2="48" y2="36" stroke="rgba(255,87,34,0.7)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="48" cy="38" r="3" fill="rgba(255,87,34,0.8)"/>
                </svg>
              </div>

              <div className={styles.degreeInfo}>
                <h3 className={styles.degree}>B.Tech — Electronics & Communication Engineering</h3>
                <p className={styles.institution}>Madan Mohan Malaviya University of Technology</p>
                <p className={styles.location}>Gorakhpur, Uttar Pradesh</p>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Period</span>
                  <time className={styles.metaValue} dateTime="2016/2020">2016 – 2020</time>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>CGPA</span>
                  <span className={styles.metaValue} aria-label="CGPA 7.88 out of 10">7.88 / 10</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Degree</span>
                  <span className={styles.metaValue}>Bachelor of Technology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className={styles.sideCards}>
            <div className={`card ${styles.sideCard} reveal-right`} style={{ transitionDelay: "0.1s" }}>
              <div className={styles.sideIcon} aria-hidden="true">📐</div>
              <h4 className={styles.sideTitle}>Engineering Mindset</h4>
              <p className={styles.sideDesc}>
                ECE background built strong analytical foundations — system thinking, signal processing, and hardware-software
                interfaces that now power my approach to scalable frontend architectures.
              </p>
            </div>

            <div className={`card ${styles.sideCard} reveal-right`} style={{ transitionDelay: "0.2s" }}>
              <div className={styles.sideIcon} aria-hidden="true">💡</div>
              <h4 className={styles.sideTitle}>Self-taught Depth</h4>
              <p className={styles.sideDesc}>
                Transitioned from ECE to frontend engineering through self-directed learning, building production-grade
                applications from day one at GlobalLogic and advancing to senior impact at ET Money.
              </p>
            </div>

            <div className={`card ${styles.sideCard} reveal-right`} style={{ transitionDelay: "0.3s" }}>
              <div className={styles.sideIcon} aria-hidden="true">📈</div>
              <h4 className={styles.sideTitle}>Continuous Growth</h4>
              <p className={styles.sideDesc}>
                Stayed at the frontier of the React ecosystem — from Class Components to Hooks, Webpack to Vite,
                monoliths to micro-frontends, always adopting best practices ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
