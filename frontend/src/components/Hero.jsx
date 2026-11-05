import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const animationTypes = [
  { rotate: [0, 1.5, 0], x: [0, 5, 0] },
  { rotate: [0, -1.5, 0], x: [0, -5, 0] },
  { rotate: [0, 0.8, -0.8, 0], y: [0, -8, 0] },
  { rotate: [0, 0.5, 0.5, 0], scale: [1, 1.01, 1] }
];

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAnim, setCurrentAnim] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnim(prev => (prev + 1) % animationTypes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 50,
      y: (e.clientY / window.innerHeight - 0.5) * 50
    });
  };

  function showForm() {
    window.open("/profile", "_blank");
  }

  const onHover = () => {
    setHover(!hover);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  function isPhone() {
    return window.innerWidth <= 768;
  }

  return (
    <>
      <div
        className="hero-bg min-h-screen flex items-center justify-center relative md:w-[90%] self-center mx-auto overflow-hidden text-white w-full"
        onMouseMove={handleMouseMove}
      >
        {/* Ambient glow blobs — cyan/blue */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="inset-0 opacity-10">
          <div className="inset-0 bg-grid-white/[0.05]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 mt-44 md:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-left flex items-center justify-center flex-col md:block">

              {/* Eyebrow badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 font-mono text-[11px] tracking-widest uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                IGDTUW · Web3 &amp; Blockchain Society
              </motion.div>

              <motion.h1
                className="font-sans text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1]"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Empowering{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                  Students
                </span>{" "}
                to shape a trustworthy{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  World
                </span>{" "}
                with Web3
              </motion.h1>

              <motion.p
                className="text-slate-400 text-sm md:text-base mb-10 max-w-lg font-light leading-relaxed text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We are AssetMerkle, the premier student-led Web3 and Blockchain community of IGDTUW. We design next-gen dApps, launch national hackathons, and shape the builders of tomorrow.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to={'login'}>
                  <button
                    className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 rounded-full font-display font-bold text-xs tracking-widest hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center cursor-pointer"
                  >
                    <VscAccount className="mr-2 text-base" />
                    LOGIN / SIGN UP
                  </button>
                </Link>
                <a href="https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H" target="_blank" rel="noopener noreferrer">
                  <button
                    className="px-7 py-3 bg-white/5 border border-white/10 text-slate-200 rounded-full font-display font-bold text-xs tracking-widest hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center cursor-pointer"
                  >
                    JOIN COMMUNITY
                  </button>
                </a>
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start space-x-3.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 shadow-md">
                  <FaInstagram size={16} />
                </a>
                <a href="https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 shadow-md">
                  <FaWhatsapp size={16} />
                </a>
                <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 shadow-md">
                  <FaXTwitter size={16} />
                </a>
                <a href="https://www.linkedin.com/company/assetmerkle-igdtuw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 shadow-md">
                  <FaLinkedin size={16} />
                </a>
              </motion.div>
            </div>

            <motion.img
              src="/hero.png"
              alt="hero_image"
              className={`w-full ${isPhone() ? 'h-[40vh]' : 'h-[65vh]'} object-contain drop-shadow-[0_0_60px_rgba(34,211,238,0.2)]`}
              initial={{ rotate: 0 }}
              animate={animationTypes[currentAnim]}
              transition={{
                rotate: { duration: 2.5, ease: "easeInOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                rotate: Math.random() > 0.5 ? 2 : -2,
                scale: 1.02,
                transition: { type: "spring", stiffness: 200 }
              }}
            />
          </div>

          {/* Nav cards — cyan/blue theme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto z-10 relative">
            {[
              { title: "AM Hacks 2.0", desc: "Our annual flagship Web3 hackathon with massive prizes and custom dev tracks.", link: "/vibeathon", color: "from-purple-500/20 to-indigo-500/5 hover:border-purple-500/40", glow: "bg-purple-500/10" },
              { title: "Web3 Learning Docs", desc: "Curated, beginner-to-expert guides for mastering Solidity, Rust, and dApps.", link: "/docs", color: "from-cyan-500/20 to-blue-500/5 hover:border-cyan-500/40", glow: "bg-cyan-500/10" },
              { title: "Meet The Builders", desc: "Meet the core team directing the society initiatives and supporting innovators.", link: "/team", color: "from-blue-500/20 to-sky-500/5 hover:border-blue-500/40", glow: "bg-blue-500/10" },
            ].map((card, i) => (
              <Link to={card.link} key={i} className="group relative block">
                <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-15 group-hover:opacity-30 transition-opacity duration-500 ${card.glow}`}></div>
                <div
                  onMouseMove={handleCardMouseMove}
                  className={`relative h-full bg-white/[0.01] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between spotlight-card ${card.color}`}
                >
                  <div>
                    <h3 className="font-sans text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="mt-6 text-[10px] font-display font-bold tracking-widest text-cyan-500 group-hover:translate-x-1.5 transition-transform duration-300">
                    EXPLORE &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
      </div>
    </>
  );
};

export default Hero;