'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  from?: 'bottom' | 'left' | 'right' | 'scale';
}

export default function AnimateIn({
  children,
  delay = 0,
  className = '',
  style,
  from = 'bottom',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translate(0,0) scale(1)';
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform =
    from === 'bottom'
      ? 'translateY(48px)'
      : from === 'left'
      ? 'translateX(-48px)'
      : from === 'right'
      ? 'translateX(48px)'
      : 'scale(0.92)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
