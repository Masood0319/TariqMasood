import { AnimatePresence, motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass glow-border max-w-2xl rounded-3xl border border-white/10 p-8 text-left"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="mt-5 text-sm text-slate-300">{project.description}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Key Features
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Tech Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="glow-button rounded-full border border-cyan-300/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 transition hover:border-cyan-200 hover:text-white"
              >
                View GitHub
              </a>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 transition hover:border-cyan-300/60 hover:text-white"
              >
                Back to Projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
