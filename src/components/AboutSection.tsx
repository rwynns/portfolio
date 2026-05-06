import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 size={32} strokeWidth={3} />,
      title: "Fullstack Development",
      description: "Membangun ekosistem website dari hulu ke hilir. Mengandalkan Laravel untuk arsitektur backend yang tangguh, serta React.js dan Next.js untuk interaksi frontend yang dinamis.",
      color: "bg-neo-yellow",
    },
    {
      icon: <Palette size={32} strokeWidth={3} />,
      title: "Stunning UI/UX",
      description: "Membangun sistem visual yang tidak hanya berfungsi dengan baik, tapi juga memanjakan mata. Memastikan setiap komponen memiliki estetika dan pengalaman pengguna yang seamless.",
      color: "bg-neo-pink",
    },
    {
      icon: <Rocket size={32} strokeWidth={3} />,
      title: "Digital Problem Solver",
      description: "Setiap baris kode yang saya tulis bertujuan untuk memecahkan masalah nyata. Menganalisis kebutuhan bisnis dan menerjemahkannya menjadi solusi digital yang tepat sasaran.",
      color: "bg-neo-teal",
    },
  ];

  const tools = ["Laravel", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Figma", "Git"];

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
    <section id="about" className="py-20 lg:py-32 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="neo-blob w-72 h-72 bg-neo-orange top-0 right-0 opacity-30"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="neo-blob w-56 h-56 bg-neo-mint bottom-20 left-10 opacity-30"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="neo-badge bg-neo-light-yellow mb-6">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <Zap size={16} className="shrink-0" />
              <span className="uppercase text-xs tracking-wider font-bold">About Me</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">What I Do Best</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Membangun produk digital bagi saya bukan sekadar tentang merangkai kode, tapi tentang menyelesaikan masalah. <i>Here's my core expertise that I bring to the table.</i>
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`neo-card ${skill.color}`}
            >
              <div className="mb-6 p-4 bg-black text-white rounded-2xl inline-block">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-black/80 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="neo-card bg-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Tools & Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span 
                key={index} 
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5, backgroundColor: "var(--color-neo-purple)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="neo-badge bg-neo-teal text-base px-6 py-3 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="neo-card bg-neo-light-yellow max-w-3xl mx-auto"
          >
            <p className="text-xl leading-relaxed">
              <span className="text-3xl font-black">"</span>
              Menurut saya, sistem yang bagus bukan sekadar tentang kode yang berjalan tanpa <i>error</i> atau desain yang cantik. <i>It's about solving real problems and creating impactful digital experiences.</i>
              <span className="text-3xl font-black">"</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-1 bg-black"></div>
              <p className="font-bold text-lg">Erwin</p>
              <div className="w-12 h-1 bg-black"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
