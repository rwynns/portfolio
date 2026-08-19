import { Briefcase, Calendar, MapPin, Building2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="experience" className="py-20 lg:py-32 px-6 relative overflow-hidden bg-neo-cream">
      {/* Decorative Blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="neo-blob w-72 h-72 bg-neo-purple top-10 left-[-40px] opacity-25"
      />
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="neo-blob w-64 h-64 bg-neo-yellow bottom-10 right-[-30px] opacity-25"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="neo-badge bg-neo-teal mb-6 inline-block">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <Briefcase size={16} className="shrink-0" />
              <span className="uppercase text-xs tracking-wider font-bold">Career Path</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">Work Experience</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Perjalanan karir dan pengalaman profesional saya dalam membangun berbagai aplikasi web dan solusi perangkat lunak.
          </p>
        </motion.div>

        {/* Timeline List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative group pl-12 md:pl-16"
              >
                {/* Vertical line connecting to next item */}
                {!isLast && (
                  <div className="absolute left-[18px] md:left-[22px] top-[44px] md:top-[48px] bottom-[-5.75rem] md:bottom-[-6rem] w-[4px] bg-black z-0" />
                )}

                {/* Timeline Marker Node */}
                <div
                  className={`absolute left-0 top-6 w-10 h-10 md:w-12 md:h-12 rounded-2xl border-4 border-black ${exp.accentColor} flex items-center justify-center text-black shadow-[4px_4px_0px_#000] z-10 transition-transform group-hover:scale-110`}
                >
                  <Building2 size={20} strokeWidth={2.5} />
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="neo-card bg-white relative overflow-hidden"
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-2">
                        <h3 className="text-2xl lg:text-3xl font-black leading-tight">{exp.role}</h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border-2 border-black bg-neo-lime px-2.5 py-1 text-[0.65rem] font-black uppercase leading-none tracking-[0.08em] shadow-[2px_2px_0px_#000]">
                            <Sparkles size={11} strokeWidth={3} /> Present
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-bold text-black/90">{exp.company}</span>
                        <span className="text-black/40">•</span>
                        <span className="neo-badge bg-neo-light-yellow text-xs font-bold">{exp.type}</span>
                      </div>
                    </div>

                    <div className={`w-28 h-20 md:w-36 md:h-24 shrink-0 rounded-2xl border-3 border-black ${exp.logoBackground} p-2 shadow-[3px_3px_0px_#000] flex items-center justify-center`}>
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-semibold text-black/70 mb-6 pb-4 border-b-2 border-black/10">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-black shrink-0" />
                      <span>
                        {exp.period} <span className="text-black/50">({exp.duration})</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-black shrink-0" />
                      <span>
                        {exp.location} • <span className="font-bold text-black/90">{exp.workMode}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-black/80 leading-relaxed mb-6 font-medium text-base md:text-lg">{exp.description}</p>

                  {/* Skills Tags */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-black/60">Skills & Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skillIdx}
                          whileHover={{ scale: 1.08, rotate: skillIdx % 2 === 0 ? 3 : -3 }}
                          className="neo-badge bg-neo-off-white text-xs font-bold text-black hover:bg-neo-yellow transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
