"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#education",  label: "Education" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="Ritik Kumar Singh — Home">
          <span className={styles.logoMark}>RK</span>
          <span className={styles.logoText}>Ritik Singh</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href.slice(1) ? styles.active : ""}`}
                onClick={() => handleNav(link.href)}
                aria-current={active === link.href.slice(1) ? "page" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:ritiksingh.malviyan@gmail.com"
          className={`${styles.cta} btn btn-primary`}
          aria-label="Contact Ritik via email"
        >
          Let&apos;s Talk
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 0.05}s` }}>
              <button
                className={`${styles.mobileLink} ${active === link.href.slice(1) ? styles.active : ""}`}
                onClick={() => handleNav(link.href)}
              >
                <span className={styles.mobileLinkNum}>0{i + 1}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <a href="mailto:ritiksingh.malviyan@gmail.com" className={`btn btn-primary ${styles.mobileCta}`}>
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
