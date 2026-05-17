'use client';

import { useEffect, useRef } from 'react';
import { resume } from '@/lib/resume';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255,92,53,${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,92,53,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="about"
      aria-label="About Ritik Kumar Singh"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />

      {/* Gradient orbs */}
      <div
        className="orb"
        aria-hidden
        style={{
          width: 600,
          height: 600,
          background: 'var(--accent)',
          top: -200,
          right: -200,
          opacity: 0.08,
        }}
      />
      <div
        className="orb"
        aria-hidden
        style={{
          width: 400,
          height: 400,
          background: '#ff8c35',
          bottom: -100,
          left: -100,
          opacity: 0.06,
        }}
      />

      {/* Grid lines SVG */}
      <svg
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <div style={{ maxWidth: 820 }}>
          {/* Availability badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,92,53,0.1)',
              border: '1px solid rgba(255,92,53,0.25)',
              borderRadius: 100,
              padding: '6px 14px 6px 10px',
              marginBottom: 32,
              animation: 'fadeSlideDown 0.8s ease forwards',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Open to Opportunities
            </span>
          </div>

          {/* Main heading */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 20,
              animation: 'fadeSlideUp 0.9s ease 0.1s both',
            }}
          >
            <img
              width={50}
              height={50}
              style={{
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
              }}
              src='./profile-pic.jpg'
              alt="Ritik's Picture"
              title="Ritik's Picture"
            />
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 7vw, 88px)',
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {resume.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span style={{ color: 'var(--accent)' }}>{resume.name.split(' ').slice(2).join(' ')}</span>
            </h1>
          </div>

          {/* Role line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              margin: '24px 0 28px',
              animation: 'fadeSlideUp 0.9s ease 0.2s both',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
              }}
            >
              {resume.title}
            </span>
            <div style={{ height: 1, flex: 1, maxWidth: 120, background: 'var(--border-strong)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
              {resume.location}
            </span>
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: 18,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: 640,
              animation: 'fadeSlideUp 0.9s ease 0.3s both',
            }}
          >
            {resume.summary}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 40,
              flexWrap: 'wrap',
              animation: 'fadeSlideUp 0.9s ease 0.4s both',
            }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="LinkedIn profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 16,
              marginTop: 64,
              maxWidth: 640,
              animation: 'fadeSlideUp 0.9s ease 0.5s both',
            }}
          >
            {resume.highlights.map((h) => (
              <div
                key={h.label}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 32,
                    fontWeight: 800,
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {h.value}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: 'fadeSlideUp 1s ease 0.8s both',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollLine 2s ease infinite' }} />
      </div>

      <style>{`
        @keyframes fadeSlideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes scrollLine { 0% { opacity: 0; transform: scaleY(0); transform-origin: top; } 50% { opacity: 1; transform: scaleY(1); transform-origin: top; } 100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; } }
      `}</style>
    </section>
  );
}
