import { motion } from "framer-motion";

const toastStyles = {
  success: "border-emerald-400/60 text-emerald-200",
  error: "border-rose-400/60 text-rose-200",
};

const Toast = ({ message, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className={`glass glow-border fixed bottom-6 right-6 z-50 rounded-2xl border px-5 py-4 text-sm shadow-lg ${toastStyles[type]}`}
    >
      {message}
    </motion.div>
  );
};

export default Toast;
