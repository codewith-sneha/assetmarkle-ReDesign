import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Data for the partner cards remains the same
const partnerOptions = [
    {
        icon: "/collaborate.png",
        title: "Collaborate",
        description: "Unlock the power of collaboration and knowledge-sharing in blockchain and web3 technology with our vibrant community.",
        handler: () => console.log('Navigate to Collaborate'),
        link : '/collaborate'
    },
    {
        icon: "/sponsor.png",
        title: "Sponsor",
        description: "Boost your brand and empower innovation in blockchain and web3 technology as a valued community sponsor.",
        handler: () => console.log('Navigate to Sponsor'),
        link : '/sponsor'
    }
];

// Reusable Arrow component for the cards
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// --- Animation Variants ---
// This variant controls the overall container for the title and cards
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Reveals children one by one
        },
    },
};

// This variant controls the title and paragraph
const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// This variant controls the card itself (the container)
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.1, // Animate the card's content one by one
        },
    },
};

// This variant controls the items INSIDE the card (icon, title, etc.)
const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const Contact = () => {
    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div className="relative isolate min-h-[600px] w-full bg-black flex flex-col items-center justify-center py-20 px-4">
            <div className="absolute inset-0 bg-dot-white/[0.2]"></div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            
            {/* Main animated container */}
            <motion.div
                className="max-w-7xl mx-auto text-center z-10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h1
                    variants={titleVariants}
                    className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500"
                >
                    Partner With Us
                </motion.h1>
                <motion.p
                    variants={titleVariants}
                    className="text-gray-300 max-w-2xl mx-auto text-lg mb-16"
                >
                    Whether you're looking to collaborate or sponsor, your journey with our Web3 community starts here.
                </motion.p>
                
                <div className="flex items-center justify-center gap-8 lg:gap-12 w-full max-w-5xl flex-wrap">
                    {partnerOptions.map((card) => (
                      <motion.div
                            key={card.title}
                            variants={cardVariants} // Use the card container variants
                            onMouseMove={handleMouseMove}
                            onClick={card.handler}
                            className="group relative w-full max-w-sm h-80 p-8 rounded-xl bg-white/5 border border-white/20 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:!scale-105"
                            style={{ backgroundImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.15), transparent 40%)` }}
                        >
                      <Link to={`${card.link}`}>
                            <motion.div variants={cardItemVariants} className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-lg">
                                <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12" />
                            </motion.div>

                            <motion.h3 variants={cardItemVariants} className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">{card.title}</motion.h3>
                            <motion.p variants={cardItemVariants} className="text-gray-400 text-base flex-grow">{card.description}</motion.p>
                            
                            <motion.div variants={cardItemVariants} className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                                <ArrowIcon />
                            </motion.div>
                        </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;