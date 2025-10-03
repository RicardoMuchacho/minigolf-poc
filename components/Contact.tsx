"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📍",
      label: "address",
      color: "neon-pink",
    },
    {
      icon: "🕐",
      label: "hours",
      color: "neon-blue",
    },
    {
      icon: "✉️",
      label: "email",
      color: "neon-green",
    },
    {
      icon: "📱",
      label: "phone",
      color: "neon-purple",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-pink-950/10 to-black" />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neon-green text-glow-green">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg border-2 border-${item.color} bg-black/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              style={{
                boxShadow: `0 0 20px var(--${item.color})`,
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-xl text-white/90">{t(item.label)}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-5 text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink border-2 border-neon-blue shadow-neon-blue hover:shadow-neon-pink transition-all duration-300 hover:scale-110 rounded-lg">
            {t("cta", { default: "Contáctanos" })}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
