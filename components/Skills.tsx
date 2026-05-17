"use client";

import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    title: "Languages & Core",
    icon: "⌨️",
    skills: [
      { name: "JavaScript (ES2023+)", level: 97 },
      { name: "TypeScript", level: 94 },
      { name: "HTML5 & CSS3", level: 96 },
    ],
  },
  {
    title: "Frameworks & Architecture",
    icon: "🏗️",
    skills: [
      { name: "React.js", level: 98 },
      { name: "Next.js", level: 93 },
      { name: "Micro-frontends", level: 90 },
      { name: "Angular / Svelte", level: 75 },
    ],
  },
  {
    title: "State & Performance",
    icon: "⚡",
    skills: [
      { name: "Redux Toolkit", level: 95 },
      { name: "Context API + Hooks", level: 95 },
      { name: "Core Web Vitals", level: 92 },
      { name: "SSR / SSG", level: 90 },
    ],
  },
  {
    title: "Testing & Build",
    icon: "🧪",
    skills: [
      { name: "React Testing Library", level: 88 },
      { name: "Vitest / Jest", level: 85 },
      { name: "Vite / Webpack", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
  {
    title: "Styling & Design",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "SASS / LESS", level: 88 },
      { name: "Material UI", level: 85 },
      { name: "Figma (Design handoff)", level: 80 },
    ],
  },
  {
    title: "Tools & Practices",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "JIRA / Agile", level: 88 },
      { name: "SEO & Accessibility (a11y)", level: 85 },
      { name: "Module Federation", level: 88 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll<HTMLElement>(".skill-bar-fill");
    if (!bars) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const target = bar.dataset.level || "0";
              bar.style.width = `${target}%`;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={`section section-alt ${styles.skills}`} aria-labelledby="skills-title">
      <div className="container">
        <header className="section-header reveal">
          <span className="tag">Technical Skills</span>
          <h2 id="skills-title">
            My <span className="accent">Toolkit</span>
          </h2>
          <p>A curated stack refined over 5+ years of building production systems that scale.</p>
        </header>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className={`card ${styles.card} reveal`}
              style={{ transitionDelay: `${gi * 0.08}s` }}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon} aria-hidden="true">{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </div>
              <ul className={styles.skillList} role="list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill.name} className={styles.skill}>
                    <div className={styles.skillRow}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel} aria-label={`${skill.level}%`}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency`}>
                      <div className="skill-bar-fill" data-level={skill.level} style={{ transitionDelay: `${gi * 0.1 + 0.3}s` }}/>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recognition */}
        <div className={styles.recognition}>
          <div className="section-header reveal" style={{ marginBottom: "2rem" }}>
            <span className="tag">Recognition</span>
            <h2 style={{ marginTop: "0.75rem" }}>Awards & <span className="accent">Achievements</span></h2>
          </div>
          <div className={styles.awards}>
            {[
              { icon: "⭐", title: "Star Performer", company: "ET Money", desc: "High-impact product delivery and measurable business outcomes." },
              { icon: "⭐⭐", title: "2× Star Performer", company: "GlobalLogic", desc: "Consistent engineering excellence across back-to-back award cycles." },
              { icon: "🏅", title: "2× Spot Award", company: "GlobalLogic", desc: "Delivering critical features with immediate and measurable impact." },
            ].map((a, i) => (
              <div
                key={a.title}
                className={`card ${styles.award} reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                aria-label={`${a.title} at ${a.company}`}
              >
                <div className={styles.awardIcon} aria-hidden="true">{a.icon}</div>
                <div>
                  <h4 className={styles.awardTitle}>{a.title}</h4>
                  <p className={styles.awardCompany}>{a.company}</p>
                  <p className={styles.awardDesc}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
