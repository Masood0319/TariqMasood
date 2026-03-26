import { motion } from "framer-motion";

const ProfileCard = () => {
  const rows = [
    { label: "name", value: "Tariq Masood" },
    { label: "role", value: "Full-Stack Engineer" },
    { label: "stack", value: "MERN · REST · GraphQL" },
    { label: "focus", value: "SaaS + LLM Platforms" },
    { label: "location", value: "Mardan, KP, PK" },
    { label: "status", value: "Open to Remote Roles" },
    { label: "repos", value: "14 public projects" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass glow-border animate-glow rounded-2xl border border-white/10 p-6 font-mono text-sm text-cyan-100"
    >
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        terminal.output
      </div>
      <div className="space-y-2">
        {rows.map((row) => (
          <p key={row.label} className="flex flex-wrap gap-2">
            <span className="text-cyan-400">{row.label}:</span>
            <span className="text-slate-200">{row.value}</span>
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
