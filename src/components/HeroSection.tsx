import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import erwinPhoto from "../assets/Erwin.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Decorative Blobs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="neo-blob w-64 h-64 bg-neo-pink top-20 -left-32 opacity-50"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="neo-blob w-96 h-96 bg-neo-teal -bottom-20 -right-40 opacity-50"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="neo-blob w-48 h-48 bg-neo-yellow top-1/2 right-20 opacity-50"
      />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 relative z-10"
          >
            <motion.div variants={itemVariants} className="neo-badge bg-neo-light-yellow w-fit">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Sparkles size={16} className="shrink-0" />
                <span className="uppercase text-xs tracking-wider font-bold">Available for work</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Hi, I'm{" "}
              <motion.span 
                className="inline-block px-4 py-2 bg-neo-yellow border-4 border-black rounded-2xl shadow-[4px_4px_0px_#000]"
                initial={{ rotate: 0 }}
                animate={{ rotate: 2 }}
                whileHover={{ rotate: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Erwin
              </motion.span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-black/80">
              Fullstack Developer & Problem Solver
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-black/70 leading-relaxed max-w-xl">
              Lebih dari sekadar menulis kode, saya merancang solusi. Sebagai developer yang berfokus pada <span className="font-black text-black">Laravel, React.js, dan Next.js</span>, saya membangun sistem yang tangguh di <i>backend</i>{" "}
              dan menyajikannya dengan UI/UX yang <i>stunning</i> di <i>frontend</i> untuk menaklukkan tantangan digital Anda.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                className="neo-btn bg-neo-pink text-black inline-flex items-center"
                whileHover={{ scale: 1.05, y: -4, boxShadow: "8px 8px 0px #000" }}
                whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px #000" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View My Work
                <ArrowRight className="inline-block ml-2" size={20} />
              </motion.a>
              <motion.a 
                href="#contact"
                className="neo-btn bg-white text-black inline-flex items-center"
                whileHover={{ scale: 1.05, y: -4, boxShadow: "8px 8px 0px #000" }}
                whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px #000" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decorative square */}
              <motion.div 
                className="absolute -inset-8 bg-neo-teal border-4 border-black rounded-3xl shadow-[8px_8px_0px_#000]"
                animate={{ rotate: -6 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />

              {/* Profile Image Container */}
              <motion.div 
                className="relative neo-img w-80 h-80 lg:w-96 lg:h-96 bg-neo-purple overflow-hidden flex items-end justify-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img src={erwinPhoto} alt="Erwin" className="relative z-10 w-[115%] lg:w-[125%] max-w-none object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] translate-y-2" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 z-20 neo-badge bg-neo-yellow px-6 py-3 text-base font-bold cursor-pointer"
                animate={{ rotate: 3, y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 0 }
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                Let's collaborate! 🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
