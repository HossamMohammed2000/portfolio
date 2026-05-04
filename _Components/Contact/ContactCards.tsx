"use client";
import { motion } from "framer-motion";

import { ContactItem } from "../../data/contact";

export default function ContactCards({
  contacts,
}: {
  contacts: ContactItem[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid md:grid-cols-3 gap-6"
    >
      {contacts.map((item, i) => (
        <motion.a
          key={i}
          href={item.link || "#"}
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-5 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition group"
        >
          <motion.div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-2xl">
            {item.icon}
          </motion.div>

          <div className="flex-1">
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="text-white font-medium">{item.value}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
