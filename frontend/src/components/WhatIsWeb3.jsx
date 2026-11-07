import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, Cpu, ArrowRight } from 'lucide-react';

const WhatIsWeb3 = () => {
  const pillars = [
    {
      icon: Globe,
      title: 'Decentralized',
      desc: 'No single point of control. Data and power distributed across a global network of nodes.',
    },
    {
      icon: Lock,
      title: 'Trustless',
      desc: 'Smart contracts enforce rules automatically — no middlemen, no gatekeepers.',
    },
    {
      icon: Cpu,
      title: 'Permissionless',
      desc: 'Anyone, anywhere can participate. Build, transact, and innovate without asking permission.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-display font-bold tracking-widest text-cyan-400 uppercase mb-4">
            The New Internet
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            What is <span className="font-serif italic font-normal text-cyan-400">Web3?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Web3 is the next evolution of the internet — open, decentralized, and owned by its users, 
            not corporations. Built on blockchain technology, it shifts power back to creators and communities.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Web1 → Web2 → Web3 visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { era: 'Web 1.0', years: '1990s–2000s', label: 'Read', desc: 'Static pages. Users consumed content. Creators were few.', muted: true },
              { era: 'Web 2.0', years: '2000s–2020s', label: 'Read & Write', desc: 'Social platforms, apps. Users created content — but platforms owned it.', muted: true },
              { era: 'Web 3.0', years: '2020s–', label: 'Read, Write & Own', desc: 'Decentralized apps. Users own their data, assets, and identity.', muted: false },
            ].map((w, i) => (
              <div key={i} className={`md:px-8 first:pl-0 last:pr-0 ${w.muted ? 'opacity-60' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-display font-bold tracking-widest uppercase ${w.muted ? 'text-slate-500' : 'text-cyan-400'}`}>
                    {w.era}
                  </span>
                  {!w.muted && (
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold tracking-wider">NOW</span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mb-3">{w.years}</p>
                <p className={`font-display font-bold text-lg mb-2 ${w.muted ? 'text-slate-400' : 'text-white'}`}>{w.label}</p>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsWeb3;