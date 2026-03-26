import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Toast from "../components/Toast.jsx";
import useContactForm from "../hooks/useContactForm.js";
import { pageVariants } from "../animations/variants.js";

const contacts = [
  {
    title: "LinkedIn",
    value: "tariq-masood-00a075338",
    href: "https://www.linkedin.com/in/tariq-masood-00a075338/",
  },
  {
    title: "GitHub",
    value: "Masood0319",
    href: "https://github.com/Masood0319",
  },
  {
    title: "Email",
    value: "tariqmasooduet@gmail.com",
    href: "mailto:your@email.com",
  },
];

const Contact = () => {
  const { values, errors, status, setStatus, handleChange, handleSubmit } =
    useContactForm();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await handleSubmit();
    if (result.ok) {
      setToast({ type: "success", message: "Message sent successfully 🚀" });
    } else {
      setToast({
        type: "error",
        message: "Could not send message. Please try again.",
      });
    }
  };

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
            label="Contact"
            title="Let’s build something bold"
            subtitle="Reach out for collaborations, SaaS builds, and AI integration work."
          />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <form
                onSubmit={onSubmit}
                className="glass glow-border rounded-3xl border border-white/10 p-8"
              >
                <div className="grid gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      Name
                    </label>
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:shadow-glow"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-rose-300">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:shadow-glow"
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-rose-300">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={values.message}
                      onChange={handleChange}
                      className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/60 focus:shadow-glow"
                      placeholder="Tell me about your project"
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-rose-300">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    onClick={() => status === "error" && setStatus("idle")}
                    className="glow-button rounded-full bg-cyan-400/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-cyan-300 hover:shadow-glowStrong disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {status === "loading" && (
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-black/40 border-t-black" />
                      )}
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </Reveal>

            <div className="space-y-6">
              <div className="glass glow-border rounded-2xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Contact Cards
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Prefer a direct channel? Connect via your favorite platform.
                </p>
              </div>
              <div className="card-grid">
                {contacts.map((contact, index) => (
                  <Reveal key={contact.title} delay={index * 0.1}>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group glass glow-border flex h-full flex-col justify-between rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">
                          {contact.title}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold text-white">
                          {contact.value}
                        </h3>
                      </div>
                      <span className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400 transition group-hover:text-cyan-200">
                        Connect →
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && <Toast message={toast.message} type={toast.type} />}
      </AnimatePresence>
    </motion.main>
  );
};

export default Contact;
