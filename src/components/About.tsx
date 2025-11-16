import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Palette,
  Code,
  Server,
  Layers,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertise = [
    {
      icon: Palette,
      title: "UI/UX Designer",
      description:
        "Creating intuitive and aesthetically pleasing interfaces with a focus on usability and consistent visual design.",
      skills: [
        "Figma",
        "UI Design",
        "User Research",
        "Prototyping",
        "Layout Design",
      ],
    },
    {
      icon: Code,
      title: "Web Developer",
      description:
        "Building responsive and performant websites using modern frameworks and best practices.",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      icon: Server,
      title: "Full Stack Developer",
      description:
        "Building scalable and user-focused applications from backend logic to clean, responsive interfaces.",
      skills: [
        "React",
        "SQL Server",
        "ASP.NET",
        "Basic Authentication",
        "Deployment",
      ],
    },
  ];

  const skillCategories = [
    {
      title: "UX Skills",
      icon: Users,
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Information Architecture",
        "User Flows",
      ],
    },
    {
      title: "UI Skills",
      icon: Palette,
      skills: [
        "Visual Design",
        "Typography",
        "Color Theory",
        "Layout Design",
        "Design Systems",
        "Responsive Design",
      ],
    },
    {
      title: "Tools & Software",
      icon: Layers,
      skills: ["Figma", "Notion", "VS Code", "Git & GitHub", "FigJam"],
    },
    {
      title: "Development",
      icon: Code,
      skills: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "C, C++, Python, C#",
        "SQL / MySQL / SQL Server",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Odisha University of Technology and Research, Bhubaneswar",
      duration: "2024 - 2026",
      description:
        "Focused on software development, computer networks, data structures, algorithms, and modern web technologies, with practical exposure to full-stack development and project-based learning.",
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "Utkal University, Odisha",
      duration: "2021 - 2024",
      description:
        "Gained a strong foundation in programming, databases, algorithms, operating systems, and web development fundamentals, with hands-on academic projects and practical lab work.",
    },
  ];

  const internships = [
    {
      role: "Full Stack Development Intern",
      company: "EduBiz Networks",
      duration: "Mar 2025 - Present",
      description:
        "Designed and improved user interfaces, contributed to frontend development using React and Tailwind, and collaborated on feature implementation to enhance overall user experience.",
    },
    {
      role: "Web Development Intern",
      company: "VaultOfCodes",
      duration: "Feb 2025 - Mar 2025",
      description:
        "Built responsive web pages and improved UI/UX for ongoing web projects using HTML, CSS, JavaScript, and Bootstrap, ensuring better usability and performance.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6 text-white">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              I'm <span className="text-blue-400">Rutupurna Swain</span>, a
              passionate UI/UX Designer and Full Stack Developer specializing in
              creating user-centered digital experiences that blend beautiful
              design with functional code.
            </p>
            <p className="text-gray-400 mb-4">
              My expertise lies in transforming complex problems into{" "}
              <span className="text-blue-400">simple, elegant solutions </span>
              through thoughtful UX research, intuitive interface design, and
              robust development.
            </p>
            <p className="text-gray-400">
              With hands-on experience in{" "}
              <span className="text-blue-400">
                UI/UX design, product thinking, full-stack development, and
                cybersecurity,
              </span>
              I bring a blend of design clarity and technical depth. I enjoy
              researching user needs, crafting intuitive interfaces, and
              building them with precision using tools like{" "}
              <span className="text-blue-400">
                Figma, React, Next.js, TypeScript, and Tailwind
              </span>
              , approaching every project with curiosity, empathy, and attention
              to detail.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-white text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="mb-4 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="text-blue-500" size={24} />
                  </div>
                  <h3 className="mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-white text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-black/30 p-6 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-400" size={18} />
                    </div>
                    <h3 className="text-white text-sm">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-gray-400 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="mb-12 text-white text-center">Background</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-blue-500" size={20} />
                </div>
                <h3 className="text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="border-l-2 border-blue-500/30 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0" />
                    <div className="text-blue-400 text-sm mb-1">
                      {edu.duration}
                    </div>
                    <h4 className="text-white mb-1">{edu.degree}</h4>
                    <div className="text-gray-400 text-sm mb-2">
                      {edu.institution}
                    </div>
                    <p className="text-gray-500 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-blue-500" size={20} />
                </div>
                <h3 className="text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <motion.div
                    key={internship.role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="border-l-2 border-blue-500/30 pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0" />
                    <div className="text-blue-400 text-sm mb-1">
                      {internship.duration}
                    </div>
                    <h4 className="text-white mb-1">{internship.role}</h4>
                    <div className="text-gray-400 text-sm mb-2">
                      {internship.company}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {internship.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
