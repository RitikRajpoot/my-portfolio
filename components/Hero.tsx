"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = [
      "Frontend Engineer",
      "React Architect",
      "Next.js Developer",
      "Fintech Builder",
      "Performance Engineer",
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const el = document.getElementById("typewriter");
    if (!el) return;

    const type = () => {
      const current = roles[roleIdx];
      if (deleting) {
        el.textContent = current.slice(0, charIdx--);
        if (charIdx < 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeout = setTimeout(type, 400);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx++);
        if (charIdx > current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      }
      timeout = setTimeout(type, deleting ? 50 : 80);
    };

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      {/* Animated SVG Background */}
      <div className={styles.svgBg} aria-hidden="true">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,87,34,0.06)" strokeWidth="1"/>
            </pattern>
            <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,87,34,0.15)"/>
              <stop offset="100%" stopColor="rgba(255,87,34,0)"/>
            </radialGradient>
            <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,138,80,0.1)"/>
              <stop offset="100%" stopColor="rgba(255,138,80,0)"/>
            </radialGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)"/>

          {/* Ambient glow blobs */}
          <ellipse cx="200" cy="200" rx="300" ry="300" fill="url(#glow1)" className={styles.blob1}/>
          <ellipse cx="1000" cy="600" rx="250" ry="250" fill="url(#glow2)" className={styles.blob2}/>

          {/* Floating circles */}
          <circle cx="100" cy="650" r="3" fill="rgba(255,87,34,0.5)" className={`${styles.dot} ${styles.dot1}`}/>
          <circle cx="300" cy="100" r="2" fill="rgba(255,87,34,0.4)" className={`${styles.dot} ${styles.dot2}`}/>
          <circle cx="900" cy="150" r="4" fill="rgba(255,138,80,0.3)" className={`${styles.dot} ${styles.dot3}`}/>
          <circle cx="1100" cy="400" r="2.5" fill="rgba(255,87,34,0.5)" className={`${styles.dot} ${styles.dot4}`}/>
          <circle cx="700" cy="700" r="3" fill="rgba(255,138,80,0.4)" className={`${styles.dot} ${styles.dot5}`}/>

          {/* Animated rings */}
          <circle cx="850" cy="200" r="80" fill="none" stroke="rgba(255,87,34,0.12)" strokeWidth="1" strokeDasharray="8 4" className={styles.ring1}/>
          <circle cx="850" cy="200" r="120" fill="none" stroke="rgba(255,87,34,0.07)" strokeWidth="1" strokeDasharray="4 8" className={styles.ring2}/>

          {/* Corner bracket decorations */}
          <g stroke="rgba(255,87,34,0.3)" strokeWidth="2" fill="none" opacity="0.6">
            <path d="M 50 50 L 50 80 L 80 80"/>
            <path d="M 1150 50 L 1150 80 L 1120 80"/>
            <path d="M 50 750 L 50 720 L 80 720"/>
            <path d="M 1150 750 L 1150 720 L 1120 720"/>
          </g>

          {/* Connecting lines */}
          <line x1="0" y1="400" x2="200" y2="400" stroke="rgba(255,87,34,0.1)" strokeWidth="1" strokeDasharray="4 6"/>
          <line x1="1000" y1="400" x2="1200" y2="400" stroke="rgba(255,87,34,0.1)" strokeWidth="1" strokeDasharray="4 6"/>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Badge */}
          <div className={`tag ${styles.badge}`} aria-label="Available for work">
            <span className={styles.statusDot} aria-hidden="true"/>
            Available for Opportunities
          </div>

          {/* Main heading */}
          <h1 className={styles.heading}>
            <span className={styles.name}>Ritik Kumar<br/>Singh</span>
          </h1>

          {/* Typewriter */}
          <p className={styles.role} aria-live="polite">
            <span id="typewriter" className={styles.typewriter}/>
            <span className={styles.cursor} ref={cursorRef} aria-hidden="true">|</span>
          </p>

          <p className={styles.bio}>
            Frontend Engineer with <strong>5+ years</strong> specialising in scalable React
            architectures and high-conversion fintech platforms. Drove{" "}
            <span className="accent">40% premium conversions</span> and{" "}
            <span className="accent">26% uplift</span> in product metrics at ET Money.
          </p>

          {/* Stats */}
          <div className={styles.stats} role="list">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "40%", label: "Premium Conversions" },
              { value: "50%", label: "Support Load Reduced" },
              { value: "26%", label: "Conversion Uplift" },
            ].map((stat) => (
              <div className={styles.stat} key={stat.label} role="listitem">
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.actions}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ritik-k-s"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="View LinkedIn Profile (opens in new tab)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Floating card */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.floatCard}>
            {/* Avatar ring */}
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing}/>
              <div className={styles.avatarRing2}/>
              <div className={styles.avatar}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="avGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff5722"/>
                      <stop offset="100%" stopColor="#ff8a50"/>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="38" r="22" fill="url(#avGrad)" opacity="0.9"/>
                  <ellipse cx="50" cy="80" rx="32" ry="20" fill="url(#avGrad)" opacity="0.7"/>
                </svg>
                <span className={styles.avatarInitials}>RKS</span>
              </div>
            </div>

            {/* Tech orbit */}
            <svg className={styles.orbit} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,87,34,0.15)" strokeWidth="1" strokeDasharray="4 6"/>
              <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(255,87,34,0.08)" strokeWidth="1"/>

              {/* Orbiting tech labels */}
              {[
                { label: "React", angle: 0 },
                { label: "Next.js", angle: 72 },
                { label: "TS", angle: 144 },
                { label: "Vite", angle: 216 },
                { label: "Redux", angle: 288 },
              ].map(({ label, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const x = 100 + 80 * Math.cos(rad);
                const y = 100 + 80 * Math.sin(rad);
                return (
                  <g key={label}>
                    <circle cx={x} cy={y} r="14" fill="rgba(255,87,34,0.15)" stroke="rgba(255,87,34,0.3)" strokeWidth="1"/>
                    <text x={x} y={y + 4} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="var(--font-display)" fontWeight="600">{label}</text>
                  </g>
                );
              })}
            </svg>

            {/* Floating badge: Star Performer */}
            <div className={styles.badge2}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--clr-accent)" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Star Performer
            </div>

            {/* Floating badge: ET Money */}
            <div className={styles.badge3}>
              <span className={styles.badge3Dot}/>
              ET Money — Active
            </div>
          </div>

          {/* Social links sidebar */}
          <div className={styles.socials}>
            <a href="https://linkedin.com/in/ritik-k-s" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:ritiksingh.malviyan@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="tel:+919548993630" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className={styles.scrollCue}
        aria-label="Scroll to about section"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className={styles.scrollDot}/>
        <span>Scroll</span>
      </a>
    </section>
  );
}
