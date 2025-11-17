import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { FiGithub } from "react-icons/fi";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Centralized Electronic Health Record Management System (CEHRMS)",
      category: "Full Stack",
      description:
        "A centralized platform for managing patient records, appointments, and healthcare data with secure access, streamlined workflows, and improved usability.",
      tags: [
        "ASP.NET",
        "C#",
        "SQL Server",
        "HTML/CSS",
        "JavaScript",
        "Bootstrap",
      ],
      image: "/Images/CEHRMS.png",
      github: "https://github.com/Rutupurna-S/CEHRMS",
    },
    {
      title: "Landing Page - Neutral Collection",
      category: "Web Development",
      description:
        "A clean and responsive landing page focused on modern UI/UX, built using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "/Images/NeutralLandingPage1.png",
      github: "https://github.com/Rutupurna-S/Landing-Page-Neutral-Collection",
      live: "https://landing-page-neutral-collection.vercel.app/",
    },
    {
      title: "Registration Form - Responsive UI",
      category: "Web Development",
      description:
        "Created a responsive and user-friendly registration form with real-time validation and accessibility best practices.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "/Images/registrationForm.png",
      github: "https://github.com/Rutupurna-S/Registration-Form",
      live: "https://registration-form-nine-woad.vercel.app/",
    },
    {
      title: "Tic Tac Toe - Web Game",
      category: "Web Development",
      description:
        "MBuilt an interactive Tic-Tac-Toe game using React, featuring clean UI, smooth state management, and responsive design.",
      tags: ["React", "Tailwind", "JavaScript", "CSS", "Game Logic"],
      image: "/Images/TicTacToe.png",
      github: "https://github.com/Rutupurna-S/TicTacToe",
      live: "https://tic-tac-toe-lake-eight.vercel.app/",
    },
    {
      title: "Landing Page - Fashion Design",
      category: "Web Development",
      description:
        "Created a responsive landing page with modern layout and performance optimizations, using HTML, CSS and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/Images/ShoppingApp.png",
      github: "https://github.com/Rutupurna-S/Landing-Page",
      live: "https://fashion-landing-page-rutu.vercel.app/",
    },
    {
      title: "Recipe Card - Frontend Design",
      category: "Web Development",
      description:
        "Designed and developed a clean, responsive recipe card interface using HTML, CSS, and JavaScript with a focus on layout, styling, and usability.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/Images/RecipeCard.png",
      github: "https://github.com/Rutupurna-S/Recipe-Card",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of recent work showcasing my skills in design and
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/50 rounded-xl border border-gray-800 overflow-hidden group hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <div className="w-full h-full relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-blue-900/20 to-black">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-blue-400 text-sm mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-white">{project.title}</h3>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/95 p-6 pb-6 pt-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-blue-400 text-sm mb-2">
                  {project.category}
                </div>
                <h3 className="mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
