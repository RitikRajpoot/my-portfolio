import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: -100,
          left: 16,
          zIndex: 9999,
          background: 'var(--accent)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: 8,
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 14,
          transition: 'top 0.2s',
        }}
        className="skip-link"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Suspense>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />

      <style>{`
        .skip-link:focus { top: 16px !important; }
      `}</style>
    </>
  );
}
