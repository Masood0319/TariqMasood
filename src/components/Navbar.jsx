import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedButton from "./AnimatedButton.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/40 shadow-neon" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-[0.2em] text-cyan-300"
        >
          TM
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] transition ${
                  isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <AnimatedButton to="/contact" variant="outline">
            Let&apos;s Talk
          </AnimatedButton>
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 rounded-full bg-cyan-300" />
            <span className="h-0.5 w-6 rounded-full bg-cyan-300" />
            <span className="h-0.5 w-6 rounded-full bg-cyan-300" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="glass mx-4 mb-4 rounded-2xl px-5 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm uppercase tracking-[0.2em] ${
                        isActive
                          ? "text-cyan-300"
                          : "text-slate-300 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <AnimatedButton to="/contact" variant="outline">
                  Let&apos;s Talk
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
