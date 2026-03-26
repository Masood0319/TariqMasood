import { motion } from "framer-motion";
import AnimatedButton from "../components/AnimatedButton.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Typewriter from "../components/Typewriter.jsx";
import { pageVariants } from "../animations/variants.js";

const Home = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      <section id="hero" className="section-spacing px-5 pt-14 md:pt-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
              Mardan, KP, Pakistan
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Tariq Masood
            </h1>
            <div className="mt-4 text-lg md:text-xl">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Full-Stack Architect",
                  "AI Integration Engineer",
                  "SaaS Builder",
                ]}
              />
            </div>
            <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
              Building scalable, user-friendly web platforms with MERN stack.
              Passionate about AI-augmented backends and clean architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton to="/projects">View Projects</AnimatedButton>
              <AnimatedButton to="/contact" variant="outline">
                Contact Me
              </AnimatedButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:border-cyan-200 hover:text-white"
              >
                Explore Featured
              </a>
              <a
                href="#stats"
                className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
              >
                View Impact
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-cyan-500/20 blur-3xl" />
              <img
                src="/profile.png"
                alt="Tariq Masood"
                loading="lazy"
                className="relative h-52 w-52 rounded-full border border-cyan-300/60 object-cover shadow-glowStrong md:h-64 md:w-64 lg:h-72 lg:w-72 animate-float"
              />
              <div className="absolute -bottom-6 left-1/2 w-48 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-black/40 px-4 py-2 text-center text-xs uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-lg">
                Open for Remote
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Impact"
            title="Built for momentum"
            subtitle="Delivering production-grade systems with a modern, premium finish."
          />
          <div className="card-grid md:grid-cols-3">
            {[
              { value: "14+", label: "Projects Delivered" },
              { value: "MERN", label: "Stack Specialist" },
              { value: "AI", label: "Integration Focus" },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 0.1}>
                <div className="glass glow-border rounded-2xl border border-white/10 p-6 text-center">
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="what-i-do" className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="What I Do"
            title="Full-stack execution with product depth"
            subtitle="From architecture to deployment, I build premium SaaS experiences."
          />
          <div className="card-grid md:grid-cols-3">
            {[
              {
                title: "Full-Stack Development",
                text: "End-to-end product builds with clean APIs, modern UI, and optimized performance.",
              },
              {
                title: "SaaS Architecture",
                text: "Modular platforms with scalable tenancy, dashboards, and automation layers.",
              },
              {
                title: "AI Integration",
                text: "LLM features, intelligent workflows, and AI-augmented user journeys.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass glow-border rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Featured Projects"
            title="Premium builds in motion"
            subtitle="A glimpse at recent products engineered with modern stacks."
          />
          <div className="card-grid md:grid-cols-2">
            {[
              {
                title: "Startups Platform",
                description:
                  "A full-stack platform for startup discovery, collaboration, and real-time engagement.",
                tech: ["React", "Node.js", "MongoDB", "Express"],
              },
              {
                title: "UETM",
                description:
                  "University task & event management system with role-based scheduling.",
                tech: ["React", "Express", "MongoDB", "JavaScript"],
              },
            ].map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
                <div className="glass glow-border rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
