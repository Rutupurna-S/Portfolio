import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Projects", "Contact"];

  const handleNavClick = (link: string) => {
    const element = document.getElementById(link.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Logo variant="horizontal" />
          </motion.div>

          <div className="hidden md:flex gap-8">
            {links.map((link, index) => (
              <motion.button
                key={link}
                onClick={() => handleNavClick(link)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link}
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
