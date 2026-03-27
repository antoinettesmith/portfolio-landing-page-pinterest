import { useRef } from 'react';
import {
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  FileText,
  Download,
  Sparkles,
  MessageSquare,
  Users,
  BarChart3,
  Image as ImageIcon,
} from 'lucide-react';

/** Product screenshots live in /public/pincircles/ */
const PIN_CIRCLES_SCREENSHOTS = [
  {
    src: '/pincircles/circles-browse.png',
    alt: 'PinCircles — explore circles with search, filters, and community cards',
    layout: 'hero',
  },
  {
    src: '/pincircles/feed-discover.png',
    alt: 'PinCircles — feed with visual posts, sort lens, and discussion metadata',
    layout: 'tile',
  },
  {
    src: '/pincircles/circle-community.png',
    alt: 'PinCircles — circle view with hero, pinned prompt, and discussion',
    layout: 'tile',
  },
];

const PIN_CIRCLES_HERO = PIN_CIRCLES_SCREENSHOTS.find((s) => s.layout === 'hero');
const PIN_CIRCLES_TILES = PIN_CIRCLES_SCREENSHOTS.filter(
  (s) => s.layout === 'tile',
);

/** Served from /public — update the file there when your resume changes */
const RESUME_PDF = '/Antoinette Smith Resume.pdf';

const App = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Customer Portal Redesign',
      badge: 'Built at Raptive',
      description:
        'React-based onboarding flow with multi-phase progress tracking and dynamic step rendering. ',
      tags: ['React', 'JavaScript', 'Onboarding UI', 'Raptive', 'Vercel'],
      cta: 'View Project',
      url: 'https://onboarding-portal.antoinettebsmith.com/',
      color: 'bg-blue-50',
      accent: 'text-blue-600',
    },
    {
      title: 'CalcWize',
      badge: 'Personal Project',
      description:
        'Full-stack personal finance app with interactive debt and savings calculators. Deployed via Vercel.',
      tags: ['React', 'Tailwind CSS', 'Vercel'],
      cta: 'View Project',
      url: 'https://calcwize.com',
      color: 'bg-emerald-50',
      accent: 'text-emerald-600',
    },
    {
      title: 'Scheduling Tool',
      badge: 'Built at Raptive',
      description:
        'JavaScript tool built to automate scheduling logic for Sales and Success teams, eliminating manual calculation errors during client onboarding.',
      tags: ['JavaScript', 'Automation', 'Node.js', 'Harness'],
      cta: 'View Project',
      url: 'https://install-date-calc.antoinettebsmith.com/',
      color: 'bg-orange-50',
      accent: 'text-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#111111] selection:bg-red-100">
      {/* Hero Section - Centered without side image/card */}
      <section className="relative bg-[var(--color-bg-dark)] px-6 pt-20 pb-24 text-white">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-6 max-w-[26rem] rounded-full border border-red-500/40 bg-red-500/[0.12] px-5 py-3 font-sans text-sm font-semibold leading-snug tracking-wide text-red-100 sm:max-w-2xl sm:px-6 sm:py-3.5 sm:text-base sm:leading-normal md:text-lg">
            Pinterest Software Engineer Apprenticeship Applicant
          </p>
          <h1 className="hero-title mb-8">
            Antoinette <br /> B. Smith
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed font-light text-gray-400">
            Merging 6+ years of operational excellence in B2B SaaS with engineering
            to build products that users actually love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-700"
            >
              View My Work{' '}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <a
              href={RESUME_PDF}
              download="Antoinette Smith Resume.pdf"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-bold text-white transition-all hover:bg-white/10"
            >
              <FileText size={18} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 mx-auto -mt-16 mb-12 max-w-4xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Client Revenue', value: '$85M+' },
            { label: 'Efficiency Gain', value: '35%+' },
            { label: 'Product Adoption', value: '85%' },
            { label: 'Product Strategy Mindset', value: 'AI Driven' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex h-full flex-col items-center justify-center gap-1 rounded-3xl border border-gray-50 bg-white p-6 text-center shadow-xl shadow-gray-200/50"
            >
              <div className="text-3xl font-bold text-red-600 md:text-4xl">
                {stat.value}
              </div>
              <div className="label-caps text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto mb-8 max-w-4xl px-6">
        <div className="mb-8 text-center md:text-left">
          <span className="label-caps-lg mb-4 block text-red-600">About Me</span>
          <h2 className="mb-5 text-5xl leading-tight text-gray-900 md:text-7xl">
            Customer experience meets <br className="hidden md:block" />
            engineering.
          </h2>
          <div className="mx-auto h-1 w-20 bg-red-600 md:mx-0"></div>
        </div>

        <div className="max-w-3xl space-y-5 text-xl leading-relaxed text-gray-600">
          <p>
            I'm a Customer Experience & Product Strategist with a focus on
            driving B2B SaaS growth and efficiency. I understand products from both sides, applying
            6+ years of operational excellence and customer strategy to modern web
            architecture to ensure products are not just built, but adopted and
            loved by real users.
          </p>
          <p>
            My background includes managing migrations for high-value clients
            generating{' '}
            <span className="font-semibold text-gray-900">
              over $1M annually
            </span>
            , launching AI-powered knowledge tools that cut resolution time by 35%,
            and engaging with stakeholders like Google to influence platform policy.
          </p>
          <p>
            Now, I'm pivoting to the engineering side, bringing that same empathy
            and system-thinking to the code. I focus on building high-performance,
            accessible interfaces using modern web technologies like
            <span className="font-semibold text-gray-900">
              {' '}
              React, TypeScript, and Tailwind CSS
            </span>
            .
          </p>

          <div className="flex justify-center gap-6 border-t border-gray-100 pt-5 md:justify-start">
            <a
              href="https://github.com/antoinettesmith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-red-600"
            >
              <Github size={18} /> Github
            </a>
            <a
              href="https://linkedin.com/in/antoinette-smith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-red-600"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* PinCircles Showcase */}
      <section className="overflow-hidden border-y border-gray-100 bg-white px-6 py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-5 py-2 text-sm font-bold tracking-wider text-red-600 uppercase">
                <Sparkles size={16} /> Product Showcase
              </div>
              <h2 className="mb-4 text-6xl md:text-7xl">PinCircles</h2>
              <p className="mb-5 text-lg font-medium text-red-600 italic md:text-xl">
                "Pinned. Now let's chat about it."
              </p>

              <p className="mb-5 text-xl leading-relaxed text-gray-600">
                A design-led exploration into what happens when visual inspiration
                meets community-led conversation. PinCircles bridges the gap between
                passive curation and active discourse.
              </p>

              <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {[
                  {
                    icon: <ImageIcon size={20} />,
                    title: 'Visual Pinning',
                    desc: 'Pinterest surfaces beautiful things; users want the intersection.',
                  },
                  {
                    icon: <MessageSquare size={20} />,
                    title: 'Create Discussions',
                    desc: 'Every pin becomes a thread. The pin states the topic, the community states the take.',
                  },
                  {
                    icon: <Users size={20} />,
                    title: 'Circle Communities',
                    desc: 'Curation built around discourse is more durable than passive scrolling.',
                  },
                  {
                    icon: <BarChart3 size={20} />,
                    title: 'Taste Graph',
                    desc: 'Deep alignment with the mission of visual discovery through shared insights.',
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="mb-2 text-red-600">{feature.icon}</div>
                    <h4 className="text-base font-bold tracking-wider uppercase">
                      {feature.title}
                    </h4>
                    <p className="text-base leading-relaxed text-gray-500">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://pincircles.antoinettebsmith.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-all hover:gap-4"
              >
                Visit PinCircles <ExternalLink size={16} />
              </a>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 grid gap-4 sm:gap-5">
                {PIN_CIRCLES_HERO ? (
                  <div className="overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-[#FDF8F3] shadow-xl shadow-gray-300/40 ring-1 ring-black/5">
                    <img
                      src={PIN_CIRCLES_HERO.src}
                      className="h-auto w-full object-cover object-top"
                      alt={PIN_CIRCLES_HERO.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  {PIN_CIRCLES_TILES.map((shot, i) => (
                    <div
                      key={shot.src}
                      className={`overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white shadow-lg shadow-gray-200/50 ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-0.5 sm:hover:rotate-0 ${i === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'}`}
                    >
                      <img
                        src={shot.src}
                        className="h-auto w-full object-cover object-top"
                        alt={shot.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <span className="label-caps-lg mb-6 block text-center text-red-600">
          Work Experience
        </span>
        <div className="space-y-4">
          {[
            {
              role: 'Customer Onboarding Operations Manager',
              company: 'Raptive',
              date: 'Aug 2020 – Present',
              points: [
                'Directed end-to-end technical onboarding for $1M+ ARR accounts, ensuring seamless integration and accelerated tool adoption.',
                'Prototyped and launched high-impact product solutions and internal tools using AI-driven development workflows, increasing platform adoption by 35%+',
                "Designed company's first KYC/KYB process to establish platform integrity.",
              ],
            },
            {
              role: 'Business Consultant',
              company: 'Ites International',
              date: 'Nov 2019 – Jun 2020',
              points: [
                'Drove 40% increase in acquisition via targeted paid social campaigns.',
                'Launched 5+ eCommerce websites using Shopify, Wix, and Editor X, increasing overall client sales and aligning site functionality with brand and business goals.',
              ],
            },
            {
              role: 'Financial Analyst',
              company: 'Daggerwing Group (Omnicom)',
              date: 'Jan 2018 – Nov 2019',
              points: [
                'Managed fiscal operations for 30+ global projects (up to $1.6M).',
                'Automated reporting workflows and enhanced data accuracy through dynamic Excel dashboards and templates for real-time reporting.',
              ],
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="group flex flex-col items-start justify-between gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-100 hover:shadow-md md:flex-row md:gap-6"
            >
              <div className="md:w-1/3">
                <h3 className="mb-1 text-2xl font-bold transition-colors group-hover:text-red-600">
                  {exp.role}
                </h3>
                <p className="font-medium text-gray-500">{exp.company}</p>
                <p className="mt-1 text-sm text-gray-400">{exp.date}</p>
              </div>
              <ul className="list-inside list-disc space-y-2 text-gray-500 md:w-2/3">
                {exp.points.map((p, j) => (
                  <li key={j} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="mx-auto max-w-screen-2xl px-6 py-10 md:px-8 md:py-12">
        <h2 className="mb-8 text-5xl md:text-6xl">Projects</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex min-h-[26rem] flex-1 flex-col rounded-[2.5rem] border border-transparent p-9 text-left transition-all hover:border-gray-200 hover:shadow-xl sm:min-h-[28rem] md:min-h-[30rem] md:p-12 ${project.color}`}
              >
                <div className="mb-5 flex items-start justify-between md:mb-6">
                  <span
                    className={`rounded-full bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase md:text-xs ${project.accent}`}
                  >
                    {project.badge}
                  </span>
                </div>
                <h3 className="mb-5 text-3xl font-bold leading-tight md:mb-6 md:text-[2rem]">
                  {project.title}
                </h3>
                <p className="mb-7 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg md:leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-7 flex flex-wrap gap-2.5 md:mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase md:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-gray-900 transition-all group-hover:gap-4 md:text-base">
                  {project.cta}{' '}
                  <ArrowRight size={20} className="shrink-0 text-red-600" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="rounded-t-[3rem] bg-[#111111] px-6 py-10 text-white md:rounded-t-[5rem] md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-5 text-center md:flex-row md:items-end md:text-left">
            <h2 className="text-6xl md:text-7xl">Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {[
              {
                label: 'Frontend & UI',
                color: 'text-red-400',
                skills: [
                  'React',
                  'JavaScript',
                  'TypeScript',
                  'HTML & CSS',
                  'Tailwind CSS',
                  'WordPress',
                  'Shopify',
                  'Vercel',
                  'Netlify',
                  'Adobe Illustrator',
                ],
              },
              {
                label: 'Data & Analytics',
                color: 'text-blue-400',
                skills: [
                  'SQL (MySQL)',
                  'Google Analytics',
                  'Looker',
                  'Excel (Pivot Tables)',
                  'Google Sheets',
                  'KPI Dashboards',
                ],
              },
              {
                label: 'Product & Ops',
                color: 'text-emerald-400',
                skills: [
                  'Salesforce',
                  'Zendesk',
                  'JIRA',
                  'Confluence',
                  'Postman',
                  'ChatGPT/AI Tools',
                  'CSAT Systems',
                ],
              },
              {
                label: 'Core Strengths',
                color: 'text-orange-400',
                skills: [
                  'Codex',
                  'Cursor',
                  'Customer Lifecycle',
                  'B2B SaaS Onboarding',
                  'Cross-functional Collab',
                  'Process Automation',
                  'Product Thinking',
                  'Technical Docs',
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="min-h-[22rem] rounded-[2rem] border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10 md:min-h-[24rem] md:p-10"
              >
                <h3
                  className={`${col.color} mb-5 text-xs font-bold tracking-[0.2em] uppercase md:text-sm`}
                >
                  {col.label}
                </h3>
                <ul className="space-y-4">
                  {col.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-base font-medium text-gray-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-600" />{' '}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#111111] px-6 py-10 text-center text-white md:py-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="serif-italic mb-6 text-5xl italic md:text-6xl">
            Let's connect
          </h2>
          <p className="mb-4 text-gray-500">
            I'm based in Philadelphia, PA and open to remote positions,
            opportunities based in Philadelphia, PA or New York, NY.
          </p>

          <div className="mb-8 flex flex-col gap-4">
            <a
              href="mailto:antoinettebrismith@gmail.com"
              className="text-xl font-medium transition-colors hover:text-red-600"
            >
              antoinettebrismith@gmail.com
            </a>
            <div className="flex justify-center gap-8">
              <a
                href="https://linkedin.com/in/antoinette-smith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/antoinettesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
              >
                <Github size={20} /> Github
              </a>
            </div>
          </div>

          <a
            href={RESUME_PDF}
            download="Antoinette Smith Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-10 py-4 font-bold text-white transition-all hover:bg-red-700"
          >
            <Download size={20} /> Download Resume
          </a>

          <div className="mt-12 border-t border-white/5 pt-7 text-[10px] tracking-widest text-gray-700 uppercase">
            © 2026 Antoinette B. Smith • Built with React & Tailwind
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
