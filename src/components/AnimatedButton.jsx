import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const baseStyles =
  "glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition";

const variants = {
  solid:
    "bg-cyan-400/90 text-black shadow-glow hover:bg-cyan-300 hover:shadow-glowStrong",
  outline:
    "border border-cyan-300/60 text-cyan-200 hover:border-cyan-200 hover:text-white",
};

const AnimatedButton = ({ to, href, children, variant = "solid" }) => {
  const className = `${baseStyles} ${variants[variant]}`;
  const content = (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
};

export default AnimatedButton;
