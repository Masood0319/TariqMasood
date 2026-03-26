import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { pageVariants } from "../animations/variants.js";

const About = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      <section className="section-spacing px-5 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              label="About"
              title="Full-Stack Engineer with a product mindset"
              subtitle="Building clean, scalable SaaS platforms with a futuristic edge."
            />
            <div className="space-y-8 text-slate-300">
              <Reveal>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    My Journey
                  </p>
                  <p className="mt-3">
                    I&apos;m a Full-Stack Engineer based in KP, Pakistan,
                    specializing in production-ready web applications with the
                    MERN stack. I started by obsessing over clean UI and quickly
                    moved into backend systems, building full products end to end.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    What I’m Currently Learning
                  </p>
                  <p className="mt-3">
                    I&apos;m leveling up in System Design, DevOps pipelines, and
                    Cloud Architecture to build resilient, scalable SaaS systems
                    that grow without performance bottlenecks.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    My Vision
                  </p>
                  <p className="mt-3">
                    I want to create products that feel premium, intelligent, and
                    effortless for users—systems where AI enhances clarity and
                    backend architecture enables rapid scaling.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <ProfileCard />
          </Reveal>
        </div>
      </section>

      <section className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Timeline"
            title="Momentum through milestones"
            subtitle="A focused journey toward building SaaS systems and AI-ready backends."
          />
          <div className="relative mt-12">
            <div className="absolute left-3 top-0 h-full w-px bg-cyan-400/30 md:left-6" />
            <div className="space-y-10">
              {[
                {
                  title: "Started Web Dev",
                  text: "Began crafting responsive interfaces and learning core web fundamentals.",
                },
                {
                  title: "Built MERN Projects",
                  text: "Delivered production-ready MERN apps with authentication and dashboards.",
                },
                {
                  title: "Working on SaaS Platform",
                  text: "Designing scalable SaaS architecture with AI-ready workflows.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="relative flex gap-6">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/60 bg-black/40 text-cyan-200">
                      <span className="text-[10px]">{index + 1}</span>
                    </div>
                    <div className="glass glow-border rounded-2xl border border-white/10 p-6">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
