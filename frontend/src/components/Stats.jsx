import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Members', icon: '👥' },
  { number: '20+', label: 'Events Hosted', icon: '🎯' },
  { number: '5+', label: 'Industry Partners', icon: '🤝' },
  { number: '3+', label: 'Years Active', icon: '🚀' },
];

const Stats = () => {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 group spotlight-card"
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                {stat.number}
              </span>
              <span className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;