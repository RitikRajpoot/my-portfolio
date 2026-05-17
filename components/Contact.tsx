import styles from "./Contact.module.css";

export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: "Email",
      value: "ritiksingh.malviyan@gmail.com",
      href: "mailto:ritiksingh.malviyan@gmail.com",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 9548993630",
      href: "tel:+919548993630",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/ritik-k-s",
      href: "https://linkedin.com/in/ritik-k-s",
      external: true,
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Location",
      value: "Gurugram, India",
      href: "https://maps.google.com/?q=Gurugram,India",
      external: true,
    },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      {/* Background decoration */}
      <div className={styles.bgDeco} aria-hidden="true">
        <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="contactGlow" cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="rgba(255,87,34,0.12)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#contactGlow)"/>
          <circle cx="600" cy="700" r="400" fill="none" stroke="rgba(255,87,34,0.07)" strokeWidth="1"/>
          <circle cx="600" cy="700" r="280" fill="none" stroke="rgba(255,87,34,0.05)" strokeWidth="1" strokeDasharray="6 4"/>
          <circle cx="600" cy="700" r="160" fill="none" stroke="rgba(255,87,34,0.08)" strokeWidth="1"/>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Heading */}
        <div className={`${styles.left} reveal-left`}>
          <span className="tag">Get In Touch</span>
          <h2 id="contact-title" className={styles.heading}>
            Let&apos;s build something <span className="accent">remarkable</span> together
          </h2>
          <p className={styles.desc}>
            I&apos;m open to full-time Frontend Engineer roles, senior IC or tech lead positions,
            and consulting engagements. If you&apos;re building high-impact products and need someone
            who cares deeply about both engineering quality and business outcomes — let&apos;s talk.
          </p>

          {/* Status */}
          <div className={styles.status}>
            <div className={styles.statusDot} aria-hidden="true"/>
            <span>Available for new opportunities</span>
          </div>

          {/* Contact items */}
          <div className={styles.contacts}>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={styles.contactItem}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                aria-label={`${c.label}: ${c.value}${c.external ? " (opens in new tab)" : ""}`}
              >
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <p className={styles.contactLabel}>{c.label}</p>
                  <p className={styles.contactValue}>{c.value}</p>
                </div>
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H7M12 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div className={`${styles.right} reveal-right`}>
          <div className={`card ${styles.ctaCard}`}>
            <div className={styles.ctaTop}>
              <div className={styles.ctaIcon} aria-hidden="true">
                <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <circle cx="40" cy="40" r="38" stroke="rgba(255,87,34,0.3)" strokeWidth="1"/>
                  <circle cx="40" cy="40" r="26" stroke="rgba(255,87,34,0.15)" strokeWidth="1" strokeDasharray="4 4"/>
                  <path d="M28 40h24M40 28v24" stroke="rgba(255,87,34,0.8)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="40" cy="40" r="5" fill="rgba(255,87,34,0.8)"/>
                </svg>
              </div>
              <h3 className={styles.ctaTitle}>Ready to connect?</h3>
              <p className={styles.ctaDesc}>
                Whether it&apos;s a full-time role, a project discussion, or just to say hi —
                I reply to every message.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a
                href="mailto:ritiksingh.malviyan@gmail.com"
                className={`btn btn-primary ${styles.ctaBtn}`}
                aria-label="Send email to Ritik Kumar Singh"
              >
                Send me an email
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ritik-k-s"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline ${styles.ctaBtn}`}
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            {/* Decorative number */}
            <div className={styles.ctaNumber} aria-hidden="true">5+</div>
            <div className={styles.ctaNumberLabel} aria-hidden="true">years of impact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
