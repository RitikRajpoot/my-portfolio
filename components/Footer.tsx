import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Logo & tagline */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>RK</span>
            <span className={styles.logoText}>Ritik Singh</span>
          </div>
          <p className={styles.tagline}>
            Frontend Engineer crafting<br/>high-impact digital products.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className={styles.navTitle}>Navigation</p>
          <ul className={styles.navList} role="list">
            {[
              { href: "#about",      label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects",   label: "Projects" },
              { href: "#skills",     label: "Skills" },
              { href: "#education",  label: "Education" },
              { href: "#contact",    label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className={styles.navTitle}>Contact</p>
          <ul className={styles.contactList} role="list">
            <li>
              <a href="tel:+919548993630" className={styles.navLink}>+91 9548993630</a>
            </li>
            <li>
              <a href="mailto:ritiksingh.malviyan@gmail.com" className={styles.navLink}>ritiksingh.malviyan@gmail.com</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/ritik-k-s" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                linkedin.com/in/ritik-k-s
              </a>
            </li>
            <li className={styles.navLink} style={{ cursor: "default", color: "var(--clr-muted)" }}>
              Gurugram, India
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className={styles.navTitle}>Connect</p>
          <div className={styles.socials}>
            <a
              href="https://linkedin.com/in/ritik-k-s"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="mailto:ritiksingh.malviyan@gmail.com"
              className={styles.social}
              aria-label="Send Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Ritik Kumar Singh. Built with Next.js & TypeScript.</p>
          <p className={styles.madeWith}>
            Crafted with{" "}
            <span aria-label="love">❤️</span>
            {" "}in India
          </p>
        </div>
      </div>
    </footer>
  );
}
