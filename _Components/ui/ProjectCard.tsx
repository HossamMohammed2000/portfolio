"use client";

import { Project } from "@/data/Projects";

import { motion } from "framer-motion";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 0 25px #a78bfa, 0 0 60px #8b5cf6",
      }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer flex flex-col h-full backdrop-blur-md hover:border-purple-400/40 transition-all duration-300"
      style={{ perspective: 1000 }}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>

      {/* Description */}
      <p className="text-white/70 text-sm mb-5 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Button */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
}
