import { useState } from "react";
import { ExternalLink, Github, Briefcase, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "../data/projects";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullScreenshot, setFullScreenshot] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 relative overflow-hidden bg-neo-off-white">
      {/* Decorative Elements */}
      <motion.div animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="neo-blob w-80 h-80 bg-neo-coral top-0 left-0 opacity-20" />
      <motion.div animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="neo-blob w-64 h-64 bg-neo-yellow bottom-0 right-0 opacity-20" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants} className="text-center mb-16 lg:mb-24">
          <div className="neo-badge bg-neo-pink mb-6 w-fit mx-auto">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <Briefcase size={16} className="shrink-0" />
              <span className="uppercase text-xs tracking-wider font-bold">Portfolio</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">Featured Projects</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">Here are some of my recent works that I'm proud of. Each project taught me something new and helped me grow as a developer.</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="neo-card bg-white group flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Placeholder */}
              <div className={`${project.color} h-48 rounded-2xl border-4 border-black mb-6 flex items-center justify-center font-black text-4xl text-black/20 overflow-hidden relative`}>
                {project.image !== "placeholder" ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <motion.div className="text-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                    <div className="text-6xl mb-2">📱</div>
                    <div className="text-sm font-bold">Project Preview</div>
                  </motion.div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4 flex-grow flex flex-col">
                <h3 className="text-2xl font-black group-hover:text-neo-pink transition-colors">{project.title}</h3>
                <p className="text-black/70 leading-relaxed flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="neo-badge bg-neo-light-yellow text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 mt-auto">
                  {project.link && project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px #000" }}
                      whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px #000" }}
                      className="flex-1 neo-btn bg-neo-yellow text-center text-sm py-3"
                    >
                      <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                        <ExternalLink size={16} className="shrink-0" />
                        <span>Live Demo</span>
                      </span>
                    </motion.a>
                  )}
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px #000", backgroundColor: "var(--color-neo-light-gray)" }}
                      whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px #000" }}
                      className="neo-btn bg-white text-sm py-3 px-5"
                      title="View Code"
                    >
                      <span className="flex items-center justify-center">
                        <Github size={20} />
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="neo-card bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-neo-pink border-4 border-black rounded-full hover:bg-neo-orange transition-colors shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <X size={24} strokeWidth={3} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="pr-12">
                  <h2 className="text-4xl lg:text-5xl font-black mb-4">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="neo-badge bg-neo-light-yellow text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg text-black/80 leading-relaxed">{selectedProject.longDescription || selectedProject.description}</p>
                </div>

                {/* Main Image */}
                <div className={`${selectedProject.color} w-full h-64 md:h-96 rounded-2xl border-4 border-black flex items-center justify-center overflow-hidden relative shadow-[8px_8px_0px_#000]`}>
                  {selectedProject.image !== "placeholder" ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-black/20 font-black">
                      <div className="text-8xl mb-4">📱</div>
                      <div className="text-2xl">Main Preview</div>
                    </div>
                  )}
                </div>

                {/* Screenshots */}
                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neo-pink border-2 border-black"></div>
                      Project Screenshots
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.screenshots.map((screenshot: string, idx: number) => (
                        <div 
                          key={idx} 
                          className={`bg-neo-light-gray h-48 rounded-xl border-4 border-black overflow-hidden flex items-center justify-center shadow-[4px_4px_0px_#000] relative ${screenshot !== "placeholder" ? "cursor-pointer group" : ""}`}
                          onClick={() => screenshot !== "placeholder" && setFullScreenshot(screenshot)}
                        >
                          {screenshot !== "placeholder" ? (
                            <>
                              <img src={screenshot} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-white border-2 border-black px-4 py-2 rounded-full font-bold shadow-[4px_4px_0px_#000] transform translate-y-4 group-hover:translate-y-0 transition-all">
                                  View Full
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="text-black/20 font-bold flex flex-col items-center">
                              <div className="text-4xl mb-2">📸</div>
                              <span>Screenshot {idx + 1}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-8 border-t-4 border-black mt-4">
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px #000" }}
                      whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px #000" }}
                      className="neo-btn bg-neo-yellow"
                    >
                      <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                        <ExternalLink size={20} className="shrink-0" />
                        <span>Visit Live Site</span>
                      </span>
                    </motion.a>
                  )}
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "6px 6px 0px #000", backgroundColor: "var(--color-neo-light-gray)" }}
                      whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px #000" }}
                      className="neo-btn bg-white"
                    >
                      <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                        <Github size={20} className="shrink-0" />
                        <span>View Source Code</span>
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screenshot Modal */}
      <AnimatePresence>
        {fullScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 lg:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setFullScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative max-w-6xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFullScreenshot(null)}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 p-2 bg-neo-pink border-4 border-black rounded-full hover:bg-neo-orange transition-colors shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <X size={24} strokeWidth={3} />
              </button>
              <img 
                src={fullScreenshot} 
                alt="Full Screenshot" 
                className="w-full h-auto max-h-[90vh] object-contain border-4 border-black shadow-[12px_12px_0px_#000] rounded-xl bg-white" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
