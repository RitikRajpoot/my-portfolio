export const resume = {
  name: 'Ritik Kumar Singh',
  title: 'Frontend Engineer',
  tagline: 'Building high-conversion fintech platforms with scalable React architectures.',
  email: 'ritiksingh.malviyan@gmail.com',
  phone: '+91 9548993630',
  location: 'Gurugram, India',
  linkedin: 'https://linkedin.com/in/ritik-k-s',
  github: 'https://github.com/ritik-k-s',
  summary:
    'Frontend Engineer specialising in scalable React architectures and high-conversion fintech platforms. 5+ years building high-traffic systems, driving measurable business impact through system design, performance optimisation, and product-led engineering.',
  highlights: [
    { value: '40%', label: 'New Premium Conversions' },
    { value: '50%', label: 'Support Load Reduction' },
    { value: '26%', label: 'Product Conversion Uplift' },
    { value: '5+', label: 'Years of Experience' },
  ],

  skills: {
    Languages: ['JavaScript (ES2023+)', 'TypeScript', 'HTML5', 'CSS3'],
    'Frameworks & Architecture': [
      'React.js',
      'Next.js',
      'Angular',
      'Svelte',
      'Micro-frontends',
      'Module Federation',
      'Scalable Frontend Systems',
      'LLD',
      'Reusable Component Systems',
      'Accessibility (a11y)',
    ],
    'State & Performance': [
      'Redux Toolkit',
      'Context API',
      'Custom Hooks',
      'Core Web Vitals',
      'SSR/SSG',
      'Lazy Loading',
      'Code Splitting',
      'SEO',
    ],
    'Testing & Build': [
      'React Testing Library',
      'Vitest',
      'Jest-DOM',
      'Vite',
      'Webpack',
      'CI/CD Pipelines',
    ],
    'Styling & Tools': ['Tailwind CSS', 'SASS/LESS', 'Material UI', 'Git', 'JIRA', 'Figma'],
  },

  experience: [
    {
      role: 'Software Engineer II — Frontend',
      company: 'ET Money (Times Internet)',
      location: 'Gurugram',
      period: '2022 – Present',
      current: true,
      achievements: [
        'Built chatbot platform using Redux — reduced support tickets by 50% and drove 40% of new premium conversions within 4 months.',
        'Owned and built RM Web Portal (user management platform) as sole frontend engineer — enabled faster mutual fund distribution, directly impacting revenue growth.',
        'Developed goal-based investment journeys — contributed to ₹1 Cr SIP milestone within 3 months (~12% of total SIP book).',
        'Optimised high-traffic fintech pages using SSR and Core Web Vitals — 26% increase in conversions and 6,000+ app installs.',
        'Led scalable micro-frontend architecture using Vite and Module Federation — enabled parallel development and faster releases across multiple product surfaces.',
        'Built production-grade frontend systems with reusable component architecture and testing (RTL + Vitest) — improved release stability and maintainability.',
        'Led frontend engineering practices and mentored 3 engineers — improved development velocity, code quality, and reduced onboarding time.',
      ],
    },
    {
      role: 'Software Engineer I — Frontend',
      company: 'GlobalLogic',
      location: 'Noida',
      period: '2020 – 2022',
      current: false,
      achievements: [
        'Led frontend setup for Quarkus backend migration — improved server response time and doubled application performance.',
        'Built centralised authentication library across multiple modules — ensured secure, consistent access control platform-wide.',
        'Improved performance via debounced search and lazy loading — reduced server calls by 4× and enhanced data loading speed.',
        'Enhanced shared component library (drag-drop, editable data tables) — enabled faster feature delivery and met critical client requirements.',
      ],
    },
  ],

  projects: [
    {
      name: 'RM Web Portal',
      stack: 'React + TypeScript + Vite',
      role: 'Sole Frontend Engineer',
      description:
        'Scalable user management platform for mutual fund distribution with goal-based financial planning. Built entirely by me as the sole frontend engineer.',
      impact: 'Directly impacted revenue through faster mutual fund distribution.',
      tags: ['React', 'TypeScript', 'Vite', 'Architecture'],
    },
    {
      name: 'Chatbot Platform',
      stack: 'Redux + React',
      role: 'Lead Engineer',
      description:
        'Conversational support platform that automated user journeys for premium plan discovery and onboarding.',
      impact: '50% support reduction, 40% premium conversion driver',
      tags: ['Redux', 'React', 'Fintech', 'Conversions'],
    },
    {
      name: 'Explore Platform',
      stack: 'Next.js SSR',
      role: 'Lead Engineer',
      description:
        'High-traffic investment discovery platform with server-side rendering, optimised Core Web Vitals and deep SEO tuning for app install campaigns.',
      impact: '26% conversion uplift, 6,000+ app installs',
      tags: ['Next.js', 'SSR', 'SEO', 'Performance'],
    },
    {
      name: 'Micro-frontend Platform',
      stack: 'Vite + Module Federation',
      role: 'Architect',
      description:
        'Enterprise-scale micro-frontend architecture allowing independent deployment of multiple product surfaces across the ET Money ecosystem.',
      impact: 'Parallel development velocity, faster releases',
      tags: ['Micro-frontends', 'Vite', 'Module Federation', 'Architecture'],
    },
  ],

  education: [
    {
      degree: 'B.Tech — Electronics & Communication Engineering',
      institution: 'Madan Mohan Malaviya University of Technology',
      location: 'Gorakhpur',
      period: '2016 – 2020',
      cgpa: '7.88 / 10',
    },
  ],

  achievements: [
    {
      title: 'Star Performer',
      org: 'ET Money',
      description: 'High-impact product delivery and business outcomes.',
    },
    {
      title: '2× Star Performer',
      org: 'GlobalLogic',
      description: 'Consistent engineering excellence across back-to-back cycles.',
    },
    {
      title: '2× Spot Award',
      org: 'GlobalLogic',
      description: 'Delivering critical features with measurable and immediate impact.',
    },
  ],
};
