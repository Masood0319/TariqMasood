import { motion } from "framer-motion";

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass glow-border rounded-2xl border border-white/10 p-6"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-5 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-white/5 text-xs font-semibold text-cyan-200">
                  {skill.icon}
                </span>
                <span className="uppercase tracking-[0.2em] text-xs text-slate-300">
                  {skill.name}
                </span>
              </div>
              <span className="text-xs text-cyan-200">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-glow"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
