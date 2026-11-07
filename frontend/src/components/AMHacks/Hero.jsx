import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "/amhacks1.jpeg";
import img2 from "/amhacks2.jpeg";
import img3 from "/amhacks3.jpeg";
import img4 from "/amhacks4.jpg";
import img5 from "/amhacks5.jpg";
import heroBg from "/amhacks.jpeg";

const AMHacks = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-06T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const galleryImages = [img1, img2, img3, heroBg, img4, img5];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen text-white font-sans overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <motion.div
              className="text-center max-w-6xl mx-auto"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {/* TITLE */}
              <motion.div variants={childVariants}>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 mt-12">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500">
                    AM VibeAthon
                  </span>
                </h1>

                {/* Decorative Line */}
                <div className="h-2 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8" />
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                variants={childVariants}
              >
                After 1,000+ registrations and 80+
                groundbreaking projects in our first
                edition, AM VibeAthon is back with its 2nd
                edition ready to raise the bar once again.
              </motion.p>

              {/* ACTION BUTTONS */}
              <motion.div
                className="flex flex-wrap justify-center items-center gap-4 mb-16"
                variants={childVariants}
              >
                {/* Register Now */}
                <Link to="/register">
                  <motion.span
                    className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.span>
                </Link>

                {/* Submit Project */}
                <Link to="/submit">
                  <motion.span
                    className="inline-flex items-center justify-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Project
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AMHacks;