"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/10 to-black" />
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neon-green/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Story Section */}
            <div className="mb-16 p-8 rounded-lg border-2 border-neon-pink bg-black/50 backdrop-blur-sm shadow-neon-pink">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-pink text-glow-pink">
                {t("title")}
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {t("story")}
              </p>
            </div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-lg border-2 border-neon-blue bg-black/50 backdrop-blur-sm shadow-neon-blue"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-neon-blue text-glow-blue">
                {t("vision")}
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {t("visionText")}
              </p>

              {/* Visual Elements */}
              <div className="mt-8 flex justify-center gap-6">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-4 border-neon-green border-t-transparent"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-4 border-neon-purple border-t-transparent"
                />
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-4 border-neon-pink border-t-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
