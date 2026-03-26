import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, onClick, tag }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="group glass glow-border flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 p-6 text-left transition hover:border-cyan-300/60"
    >
      <div>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cyan-300">
          <span>{tag}</span>
          <span className="text-slate-500">View</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-slate-300">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200 transition group-hover:border-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.button>
  );
};

export default ProjectCard;
