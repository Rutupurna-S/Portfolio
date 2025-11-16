import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter, FiGithub } from "react-icons/fi";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const socials = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.rutupurnaswain21dec@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rutupurna-swain",
    },
    { icon: FiGithub, label: "GitHub", href: "https://github.com/Rutupurna-S" },
    { icon: FiTwitter, label: "Twitter", href: "https://x.com/rutupurna21" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:rutupurnaswain21dec@gmail.com?subject=Message from ${
      formData.name
    }&body=${encodeURIComponent(
      formData.query + "\n\nReply to: " + formData.email
    )}`;
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", query: "" });
    setIsFormOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-zinc-900/50 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">Let's Work Together</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="w-12 h-12 bg-black/50 border border-gray-800 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon
                  className="text-gray-400 group-hover:text-blue-400 transition-colors"
                  size={20}
                />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500">
            © 2025 Rutupurna Swain. All rights reserved.
          </p>
        </motion.div>
      </div>

      {isFormOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-zinc-900 border-l border-gray-800 z-50 overflow-y-auto"
          >
            <div className="p-8">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <X size={24} />
              </button>

              <h3 className="text-white mb-2">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="query" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}
