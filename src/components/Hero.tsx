import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";

export function Hero() {
  const roles = useMemo(
    () => ["UI/UX Designer", "Web Developer", "Full Stack Developer"],
    []
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentRole) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText !== "") {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-500">Rutupurna Swain</span>
          </motion.h1>

          <div className="mb-8 h-16 flex items-center">
            <motion.p
              className="text-blue-400 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>

          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting beautiful, functional, and user-centered digital
            experiences from concept to deployment.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 border border-gray-600 hover:border-blue-500 text-white rounded-lg transition-colors"
            >
              Contact Me
            </button>
            <a
              href="https://bit.ly/Rutupurna_resume"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors inline-block"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 w-full h-full pt-20 rounded-2xl overflow-hidden border-2 border-blue-500/30">
              <ImageWithFallback
                src="/Images/ProfileImage.jpg"
                alt="Profile"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-gray-600 hover:border-blue-500 flex items-center justify-center transition-colors cursor-pointer bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-gray-400" size={20} />
      </motion.button>
    </section>
  );
}
