import { Mail, MessageCircle, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} strokeWidth={2.5} />,
      url: "https://github.com/rwynns",
      color: "bg-neo-purple",
      hoverColor: "var(--color-neo-pink)",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} strokeWidth={2.5} />,
      url: "https://www.linkedin.com/in/erwin-saputro-1a2a7827a",
      color: "bg-neo-teal",
      hoverColor: "var(--color-neo-mint)",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} strokeWidth={2.5} />,
      url: "https://www.instagram.com/rwynns_",
      color: "bg-neo-yellow",
      hoverColor: "var(--color-neo-orange)",
    },
  ];

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
    <section id="contact" className="py-20 lg:py-32 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="neo-blob w-96 h-96 bg-neo-pink top-10 -right-40 opacity-30"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="neo-blob w-72 h-72 bg-neo-teal -bottom-20 -left-32 opacity-30"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="neo-badge bg-neo-mint mb-6 w-fit mx-auto">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <MessageCircle size={16} className="shrink-0" />
              <span className="uppercase text-xs tracking-wider font-bold">Get In Touch</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6">Let's Talk!</h2>
          <p className="text-xl lg:text-2xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Punya masalah teknis yang butuh solusi atau ide menarik untuk dieksekusi? Jangan ragu untuk menyapa, aku selalu antusias mengeksplorasi proyek baru.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start"
        >
          {/* Email Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="neo-card bg-neo-yellow flex flex-col"
          >
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-black text-white rounded-2xl w-fit">
                <Mail size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2">Shoot Me an Email</h3>
                <p className="text-black/80 mb-4 font-medium">Kalau mau jelasin detail project panjang lebar atau sekadar nanya-nanya dulu, langsung drop pesan ke email ini aja. Fast response, kok!</p>
                <a href="mailto:erwintra88@gmail.com" className="font-bold text-lg hover:underline break-all">
                  erwintra88@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div 
            variants={itemVariants}
            className="neo-card bg-neo-teal flex flex-col"
          >
            <h3 className="text-2xl font-black mb-2">Find Me Online</h3>
            <p className="text-black/80 mb-6 font-medium">Mau ngintip repo kodeku atau mau ngobrol lebih santai? Mari connect di sini. Feel free buat reach out kapan aja.</p>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`neo-btn ${social.color} px-6 py-3 flex items-center justify-center gap-3 w-full`} 
                  title={social.name}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    backgroundColor: social.hoverColor,
                    boxShadow: "6px 6px 0px #000"
                  }}
                  whileTap={{ scale: 0.95, x: 0, boxShadow: "0px 0px 0px #000" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {social.icon}
                  <span className="font-bold">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="neo-card bg-neo-light-yellow flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-4 h-4 bg-green-500 border-2 border-black rounded-full animate-pulse shrink-0"></div>
              <span className="font-bold text-lg uppercase tracking-wide leading-tight">Open For Work</span>
            </div>
            <p className="text-black/80 leading-relaxed font-medium">Saat ini aku lagi available buat ngambil project freelance baru. Kalau kamu butuh partner collab yang bisa diajak sat-set, mari kita obrolin!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
