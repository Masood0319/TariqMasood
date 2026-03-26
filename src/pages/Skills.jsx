import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { pageVariants } from "../animations/variants.js";

const skills = [
  {
    title: "Core Stack",
    skills: [
      { name: "React", level: 92, icon: "R" },
      { name: "Node.js", level: 88, icon: "N" },
      { name: "Express", level: 84, icon: "E" },
      { name: "MongoDB", level: 82, icon: "M" },
      { name: "JavaScript", level: 90, icon: "JS" },
      { name: "TypeScript", level: 78, icon: "TS" },
    ],
  },
  {
    title: "Frontend & Styling",
    skills: [
      { name: "Tailwind CSS", level: 90, icon: "TW" },
      { name: "HTML5", level: 92, icon: "H5" },
      { name: "CSS3", level: 88, icon: "C3" },
      { name: "Next.js", level: 76, icon: "NX" },
      { name: "Redux", level: 74, icon: "RX" },
      { name: "Figma", level: 70, icon: "FG" },
    ],
  },
  {
    title: "Tools & Infra",
    skills: [
      { name: "Git", level: 86, icon: "G" },
      { name: "GitHub", level: 84, icon: "GH" },
      { name: "Docker", level: 72, icon: "DK" },
      { name: "Postman", level: 80, icon: "PM" },
      { name: "VS Code", level: 92, icon: "VS" },
      { name: "Linux", level: 78, icon: "LX" },
    ],
  },
  {
    title: "AI & Beyond",
    skills: [
      { name: "Python", level: 74, icon: "PY" },
      { name: "Firebase", level: 70, icon: "FB" },
      { name: "Vercel", level: 78, icon: "VC" },
      { name: "AWS", level: 68, icon: "AW" },
      { name: "Nginx", level: 62, icon: "NG" },
      { name: "Jest", level: 65, icon: "JS" },
    ],
  },
];

const learning = [
  "System Design",
  "DevOps Pipelines",
  "Cloud Architecture",
  "LLM Orchestration",
];

const Skills = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10"
    >
      <section className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Skills"
            title="A toolkit built for scale"
            subtitle="Modern frontend craft, scalable backend systems, and AI-ready infrastructure."
          />
          <div className="card-grid md:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.1}>
                <SkillCard title={group.title} skills={group.skills} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing px-5 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Currently Learning"
            title="Focused on the next layer of scale"
            subtitle="Deepening systems knowledge for production-ready SaaS growth."
          />
          <div className="card-grid md:grid-cols-2 lg:grid-cols-4">
            {learning.map((item, index) => (
              <Reveal key={item} delay={index * 0.1}>
                <div className="glass glow-border rounded-2xl border border-white/10 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Skills;
