import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-neo-cream overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-neo-off-white/95 backdrop-blur-sm border-b-4 border-black transition-all duration-300 ${scrolled ? 'py-0 shadow-[0_8px_0px_rgba(0,0,0,1)]' : 'py-2'}`}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="text-2xl font-black"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="inline-block px-4 py-2 bg-neo-yellow rounded-xl shadow-[3px_3px_0px_#000]" style={{ border: "3px solid #000" }}>
                RWYNNS
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.href} 
                  className="px-6 py-2 font-bold text-black rounded-xl border-2 border-transparent transition-colors duration-200"
                  whileHover={{ 
                    backgroundColor: "var(--color-neo-yellow)", 
                    borderColor: "#000",
                    scale: 1.05,
                    y: -2,
                    boxShadow: "3px 3px 0px #000"
                  }}
                  whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px #000" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-neo-yellow"
              style={{ border: "3px solid #000" }}
              whileHover={{ scale: 1.05, y: -2, boxShadow: "4px 4px 0px #000" }}
              whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px #000" }}
              animate={{ boxShadow: isMenuOpen ? "1px 1px 0px #000" : "3px 3px 0px #000", y: isMenuOpen ? 2 : 0 }}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden overflow-hidden border-t-4 border-black"
              >
                <div className="py-6 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={index} 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="block px-6 py-3 font-bold text-black rounded-xl border-2 border-transparent"
                      whileHover={{ 
                        backgroundColor: "var(--color-neo-yellow)", 
                        borderColor: "#000",
                        x: 10,
                        boxShadow: "3px 3px 0px #000"
                      }}
                      whileTap={{ scale: 0.98, x: 0 }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
