"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center md:text-left">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          About Me
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-white/70 mb-4 text-lg leading-relaxed"
        >
          I’m a Frontend Developer focused on building modern, responsive, and
          interactive web applications using React and Next.js.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-white/70 mb-6 text-lg leading-relaxed"
        >
          I enjoy transforming ideas into clean and user-friendly interfaces,
          with strong attention to performance, accessibility, and user
          experience.
        </motion.p>

        {/* Highlight */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-3 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm"
        >
          🚀 Currently learning more about advanced React & performance
          optimization
        </motion.div>
      </motion.div>
    </section>
  );
}
