import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { pageVariants } from "../animations/variants.js";

const projects = [
  {
    title: "Startups Platform",
    href: "https://github.com/Masood0319/Startups-platform",
    category: "MERN",
    description:
      "A full-stack platform for startup discovery and collaboration with real-time updates, authentication, and dashboards.",
    features: [
      "Real-time updates and activity feeds",
      "Role-based authentication and dashboards",
      "Startup discovery with filters and search",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Travest",
    href: "https://github.com/Masood0319/Travest",
    category: "Frontend",
    description:
      "A travel booking and exploration app with search, itinerary planning, and interactive UI.",
    features: [
      "Destination search and booking flows",
      "Interactive itinerary planning",
      "Responsive UI with smooth transitions",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
  },
  {
    title: "UETM",
    href: "https://github.com/Masood0319/uetm",
    category: "Backend",
    description:
      "University task & event management system with role-based access and scheduling.",
    features: [
      "Role-based access for students and admins",
      "Scheduling and event workflows",
      "Centralized task management dashboard",
    ],
    tech: ["JavaScript", "MongoDB", "Express", "React"],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "MERN", "Frontend", "Backend"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

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
            label="Projects"
            title="Selected product builds"
            subtitle="Premium, investor-grade applications engineered for performance."
          />
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  activeFilter === filter
                    ? "border-cyan-300/80 text-cyan-200"
                    : "border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="card-grid mt-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
                <ProjectCard
                  {...project}
                  tag={project.category}
                  onClick={() => setSelectedProject(project)}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 glass glow-border rounded-2xl border border-white/10 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              More projects coming soon
            </p>
            <p className="mt-3 text-slate-300">
              Currently refining SaaS and AI platform builds for the next launch.
            </p>
          </div>
        </div>
      </section>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.main>
  );
};

export default Projects;
