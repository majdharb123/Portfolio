import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Download,
  Menu,
  X,
  Terminal,
  FolderGit2,
  ExternalLink,
} from "lucide-react";
import Moto from "./assets/Moto.webp";
import Weather from "./assets/weather.webp";
import HomeCaptain from "./assets/HomeCaptain.jpeg";
import VoiceTranslation from "./assets/VoiceTranslation.png";

/* ---------- Custom GitHub icon (lucide-react dropped brand/logo icons) ---------- */
function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

/* ---------- Custom LinkedIn icon (lucide-react dropped brand/logo icons) ---------- */
function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/* ---------- Embedded assets (do not remove data: prefix) ---------- */
const PROFILE_IMG = "/profile.jpeg";
const CV_PDF = "/Majd_Harb_Junior_Software_Engineer_CV.pdf";
/* ---------- Static content pulled from CV ---------- */
const NAV_LINKS = [
  { id: "hero", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    key: "frontend",
    label: "front_end",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    key: "backend",
    label: "back_end",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Laravel",
      "PHP",
      "WebSocket",
    ],
  },
  {
    key: "mobile",
    label: "mobile_and_iot",
    items: ["Flutter", "ESP32", "Arduino IDE"],
  },
  {
    key: "databases",
    label: "databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    key: "tools",
    label: "tools_and_deployment",
    items: ["Git", "GitHub", "Vite", "Render", "Vercel"],
  },
  {
    key: "fundamentals",
    label: "fundamentals",
    items: [
      "C",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
  },
];

const PROJECT_TEMPLATE = [
  {
    name: "SAWA – P2P Transportation Platform",
    tagline:
      "A cross-platform transportation platform connecting passengers with service providers through seat booking, subscriptions, live GPS tracking, real-time chat, notifications, and an administrative dashboard.",
    stack: [
      "Flutter",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
    ],
    image: HomeCaptain,
    links: [
      {
        label: "Mobile App",
        url: "https://github.com/majdharb123/Sawa-App",
        type: "github",
      },
      {
        label: "Admin Dashboard",
        url: "https://github.com/majdharb123/Sawa-admin",
        type: "github",
      },
    ],
  },
  {
    name: "Moto Store – Full-Stack Motorcycle Catalog App",
    tagline:
      "A full-stack motorcycle catalog application with user authentication, product browsing, role-based admin authorization, image uploads, and secure product-management APIs.",
    stack: ["Flutter", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
    image: Moto,
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/majdharb123/Motorcycles",
        type: "github",
      },
    ],
  },
  {
    name: "Interactive React Weather Application",
    tagline:
      "A responsive three-page weather application providing current conditions, hourly and five-day forecasts, interactive charts, city search, and dynamic weather backgrounds.",
    stack: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
      "OpenWeatherMap",
    ],
    image: Weather,
    links: [
      {
        label: "Live Demo",
        url: "https://weather-app-lxrj.onrender.com/",
        type: "demo",
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/majdharb123/Weather-App",
        type: "github",
      },
    ],
  },
  {
    name: "Smart Dual-Input Voice Translation System",
    tagline:
      "An end-to-end voice translation system that receives audio from a Flutter application or an ESP32 device, recognizes Arabic speech, translates it into English, and displays results in real time.",
    stack: ["Flutter", "Node.js", "WebSocket", "ESP32", "MySQL"],
    image: VoiceTranslation,
    links: [],
  },
];

const CONTACT_LINKS = [
  {
    key: "github",
    label: "GitHub",
    value: "github.com/majdharb123",
    href: "https://github.com/majdharb123",
    icon: GithubIcon,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/majd-harb-cs",
    href: "https://www.linkedin.com/in/majd-harb-cs/",
    icon: LinkedinIcon,
  },
  {
    key: "email",
    label: "Email",
    value: "majdharb37@gmail.com",
    href: "mailto:majdharb37@gmail.com",
    icon: Mail,
  },
];

/* ---------- Small reusable bits ---------- */

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "" }) {
  const [ref, visible] = useRevealOnScroll();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- Typing effect for hero code panel ---------- */
const CODE_LINES = [
  "const developer = {",
  '  name: "Majd Harb",',
  '  role: "Junior Software Engineer",',
  '  focus: ["Full-Stack", "Mobile"],',
  '  stack: ["React", "Node.js", "Flutter"],',
  '  databases: ["MySQL", "PostgreSQL"],',
  '  status: "open_to_work",',
  "};",
];

function TypingCode() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const done = lineIdx >= CODE_LINES.length;

  useEffect(() => {
    if (done) return;
    const currentLine = CODE_LINES[lineIdx];
    if (charIdx < currentLine.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, done]);

  return (
    <div className="font-mono text-sm sm:text-[15px] leading-relaxed">
      {CODE_LINES.slice(0, lineIdx).map((line, i) => (
        <CodeLine key={i} text={line} />
      ))}
      {lineIdx < CODE_LINES.length && (
        <CodeLine text={CODE_LINES[lineIdx].slice(0, charIdx)} cursor={!done} />
      )}
      {done && (
        <span className="inline-block w-2 h-4 bg-teal-300 align-middle animate-pulse ml-1" />
      )}
    </div>
  );
}

function CodeLine({ text, cursor }) {
  // very light manual "syntax highlight"
  const parts = text
    .split(/("(?:[^"\\]|\\.)*"|\[|\]|\{|\}|:|,)/g)
    .filter(Boolean);
  return (
    <div className="whitespace-pre">
      {parts.map((p, i) => {
        if (p.startsWith('"'))
          return (
            <span key={i} className="text-amber-300">
              {p}
            </span>
          );
        if (p === "{" || p === "}" || p === "[" || p === "]")
          return (
            <span key={i} className="text-violet-300">
              {p}
            </span>
          );
        if (p === ":" || p === ",")
          return (
            <span key={i} className="text-slate-500">
              {p}
            </span>
          );
        return (
          <span key={i} className="text-slate-200">
            {p}
          </span>
        );
      })}
      {cursor && (
        <span className="inline-block w-2 h-4 bg-teal-300 align-middle animate-pulse ml-0.5" />
      )}
    </div>
  );
}

/* ---------- Main component ---------- */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-300 selection:text-slate-950">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        .font-sans { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ---------- NAVBAR ---------- */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display font-700 text-lg sm:text-xl tracking-tight text-slate-100 hover:text-teal-300 transition-colors"
          >
            Majd Harb
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-mono text-sm text-slate-400 hover:text-teal-300 px-3 py-2 rounded-md hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-5 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-mono text-sm text-slate-300 hover:text-teal-300 text-left py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section
        id="hero"
        className="relative overflow-hidden pt-16 sm:pt-24 pb-20 px-5 sm:px-8 scroll-mt-16"
      >
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-500 opacity-10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-40 -left-24 w-80 h-80 rounded-full bg-violet-500 opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative">
          <Reveal>
            <h1 className="font-display font-700 text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-slate-50 mb-6">
              Junior Software Engineer
              <br />
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                Full-Stack &amp; Mobile Developer
              </span>
            </h1>
          </Reveal>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10 mt-10">
            <Reveal className="shrink-0">
              <div className="rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40 flex flex-col items-center gap-4 py-6 px-6">
                <img
                  src={PROFILE_IMG}
                  alt="Majd Harb"
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain"
                />
              </div>
            </Reveal>

            <Reveal className="flex-1 text-center sm:text-left">
              <h2 className="font-display font-700 text-2xl text-slate-50 mb-1">
                Majd Harb
              </h2>
              <p className="font-mono text-sm text-teal-300 mb-4">
                Full-Stack & Mobile Developer · Tripoli, Lebanon
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I'm a Computer Science graduate from Lebanese International
                University and a junior software engineer focused on building
                secure, responsive web and mobile applications. I develop
                front-end interfaces with React.js, back-end services and REST
                APIs with Node.js and Express.js, and cross-platform mobile
                applications with Flutter, supported by MySQL and PostgreSQL.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-5">
                <a
                  href={CV_PDF}
                  download="Majd_Harb_CV.pdf"
                  className="inline-flex items-center gap-2 font-mono text-sm bg-teal-300 text-slate-950 font-medium px-5 py-3 rounded-lg hover:bg-teal-200 transition-colors"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 font-mono text-sm border border-slate-700 text-slate-300 px-5 py-3 rounded-lg hover:border-teal-300 hover:text-teal-300 transition-colors"
                >
                  Get in touch
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 overflow-x-auto">
              <div className="flex items-center gap-1.5 pb-3 mb-4 border-b border-slate-800">
                <Terminal size={14} className="text-slate-500" />
                <span className="font-mono text-xs text-slate-500">
                  about_me.js
                </span>
              </div>
              <TypingCode />
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "Responsive front-end interfaces that feel fast and intentional",
                "Back-end logic, REST APIs, and database-driven features",
                "Cross-platform mobile apps with Flutter",
                "Secure coding practices grounded in OWASP fundamentals",
              ].map((offer, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
                >
                  <span className="font-mono text-teal-300 text-xs mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-300">{offer}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section
        id="experience"
        className="px-5 sm:px-8 py-20 border-t border-slate-800 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-slate-50 mb-10">
              Experience
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 hover:border-teal-400/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display font-700 text-xl text-slate-50">
                    Full-Stack Development Intern
                  </h3>

                  <p className="font-mono text-sm text-teal-300 mt-1">
                    DecodeLabs
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="font-mono text-sm text-slate-300">
                    Sep 2026 – Present
                  </p>

                  <p className="font-mono text-xs text-slate-500 mt-1">
                    Remote / Virtual
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">
                Developing practical software projects through structured
                front-end and back-end development phases while following
                project requirements, testing functionality, meeting assigned
                milestones, and maintaining work in public GitHub repositories.
              </p>

              <ul className="space-y-3 text-sm text-slate-400 mb-6">
                <li className="flex gap-3">
                  <span className="text-teal-300">▹</span>
                  Built and deployed a responsive Task Manager using HTML5,
                  CSS3, and JavaScript.
                </li>

                <li className="flex gap-3">
                  <span className="text-teal-300">▹</span>
                  Implemented DOM manipulation, input validation, task
                  completion and deletion, and browser persistence using
                  localStorage.
                </li>

                <li className="flex gap-3">
                  <span className="text-teal-300">▹</span>
                  Participating in mentor-led sessions and completing assigned
                  project milestones on schedule.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Responsive Web Design",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-violet-200 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section
        id="skills"
        className="px-5 sm:px-8 py-20 border-t border-slate-800 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-slate-50 mb-10">
              Skills &amp; tools
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_GROUPS.map((group) => (
              <Reveal key={group.key}>
                <div className="h-full rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-teal-400/40 transition-colors">
                  <div className="font-mono text-xs mb-3">
                    <span className="text-violet-300">"{group.label}"</span>
                    <span className="text-slate-500">: [</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 pl-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-teal-200 border border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="font-mono text-xs text-slate-500">]</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section
        id="projects"
        className="px-5 sm:px-8 py-20 border-t border-slate-800 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-slate-50 mb-3">
              Projects
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {PROJECT_TEMPLATE.map((p) => (
              <Reveal key={p.name}>
                <div className="h-full flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-violet-400/40 transition-colors">
                  <div className="h-56 sm:h-60 bg-slate-950/60 flex items-center justify-center border-b border-slate-800 overflow-hidden p-3">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.name} project preview`}
                        loading="lazy"
                        className="max-w-full max-h-full w-auto h-auto object-contain rounded-md"
                      />
                    ) : (
                      <FolderGit2 className="text-slate-600" size={32} />
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 font-mono text-sm text-slate-200">
                      <span className="text-teal-300">/</span>
                      {p.name}
                    </div>
                    <p className="text-sm text-slate-400 flex-1">{p.tagline}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-violet-200 border border-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.links.length > 0 && (
                      <div className="pt-2 border-t border-slate-800 mt-1 flex flex-col gap-2">
                        {p.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs text-slate-300 border border-slate-700 rounded-lg px-3 py-2.5 hover:border-teal-300 hover:text-teal-300 transition-colors"
                          >
                            {link.type === "github" ? (
                              <GithubIcon size={14} />
                            ) : (
                              <ExternalLink size={14} />
                            )}

                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        id="contact"
        className="px-5 sm:px-8 py-20 border-t border-slate-800 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-slate-50 mb-3">
              Let's build something
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl">
              Open to junior software engineering roles and full-stack projects.
              Reach out through any of the channels below.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4">
            {CONTACT_LINKS.map((c) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.key}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 h-full rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-teal-300/50 hover:bg-slate-900 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-teal-300 group-hover:bg-teal-300 group-hover:text-slate-950 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-slate-500 mb-1">
                        {c.label}
                      </div>
                      <div className="text-sm text-slate-200 break-all">
                        {c.value}
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="px-5 sm:px-8 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} Majd Harb — built with React &amp;
            Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  );
}
