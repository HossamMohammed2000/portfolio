"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-black overflow-hidden px-6">
      
      {/* الصورة */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
        >
          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-2xl"></div>

          {/* border */}
          <div className="absolute inset-0 rounded-full border border-purple-500/40 scale-110"></div>

          {/* image */}
          <div className="absolute inset-0 rounded-full border border-white/10">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/hero.png"
                alt="Frontend Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* النص */}
      <div className="w-full md:w-1/2 md:px-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hossam Mohammed
          </h1>

          <h2 className="text-xl md:text-2xl text-purple-400 mb-4">
            Frontend Developer – React & Next.js
          </h2>

          <p className="text-white/70 mb-8 max-w-md mx-auto md:mx-0">
            I build modern, responsive, and interactive web interfaces using
            React and Next.js.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {/* Contact */}
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30">
                Contact Me
              </button>
            </Link>

            {/* Download CV */}
            <Link
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition inline-block"
            >
              Download CV
            </Link>
          </div>

       
        </motion.div>
      </div>
    </section>
  );
}