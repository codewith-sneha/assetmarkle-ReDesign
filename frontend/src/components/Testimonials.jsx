import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AssetMerkle gave me my first real exposure to blockchain development. The mentorship cohort was incredibly structured and the community is super supportive.",
    name: "Priya V.",
    role: "Technical Team Member",
  },
  {
    quote: "Being part of AssetMerkle opened doors I didn't even know existed in Web3. From attending workshops to co-organizing events, it's been a transformative journey.",
    name: "Mehar K.",
    role: "Media Lead",
  },
  {
    quote: "The AM Hacks hackathon was intense, fun, and deeply educational. The mentors pushed us to think beyond the textbook and build real-world solutions.",
    name: "Ananshi N.",
    role: "Events Lead",
  },
  {
    quote: "What sets AssetMerkle apart is how much ownership you get as a student. You're not just attending events — you're building them, running them, owning them.",
    name: "Sargam S.",
    role: "Research Lead",
  },
  {
    quote: "I went from knowing nothing about smart contracts to deploying my own dApp in a semester. The community learning environment here is unmatched.",
    name: "Anamika G.",
    role: "Technical Lead",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-display font-bold tracking-widest text-cyan-400 uppercase mb-4">
            Community Voices
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tight">
            Heard from our <span className="font-serif italic font-normal text-cyan-400">Members</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-14 min-h-[260px] flex flex-col justify-between overflow-hidden">
            {/* Quote icon bg */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote className="w-20 h-20 text-cyan-400" />
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                    <p className="text-cyan-400/70 text-xs font-light">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === current
                    ? 'w-6 h-2 bg-cyan-400'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;