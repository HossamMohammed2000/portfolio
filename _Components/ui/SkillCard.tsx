"use client";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
type Props = {
  name: string;
  icon: IconType;
};
export default function SkillCard({ name, icon: Icon }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 cursor-pointer"
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            "0 0 6px rgba(167,139,250,0.4)",
            "0 0 18px rgba(139,92,246,0.7)",
            "0 0 6px rgba(167,139,250,0.4)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.25,
          rotate: 6,
        }}
        className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-purple-400"
      >
        <Icon size={28} />
      </motion.div>

      <motion.span
        whileHover={{ letterSpacing: "0.05em" }}
        transition={{ duration: 0.3 }}
        className="text-white text-sm font-medium"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
