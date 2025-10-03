"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeatureCard = ({
  title,
  description,
  index,
  color,
}: {
  title: string;
  description: string;
  index: number;
  color: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colors = {
    pink: "border-neon-pink shadow-neon-pink",
    blue: "border-neon-blue shadow-neon-blue",
    green: "border-neon-green shadow-neon-green",
    purple: "border-neon-purple shadow-neon-purple",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`p-6 rounded-lg border-2 bg-black/50 backdrop-blur-sm ${
        colors[color as keyof typeof colors]
      } hover:scale-105 transition-transform duration-300`}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="text-6xl mb-4"
      >
        {index === 0 && "⛳"}
        {index === 1 && "💡"}
        {index === 2 && "🎮"}
        {index === 3 && "🎉"}
      </motion.div>
      <h3 className={`text-2xl font-bold mb-3 text-${color} text-glow`}>
        {title}
      </h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default function Features() {
  const t = useTranslations("features");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    { key: "feature1", color: "pink" },
    { key: "feature2", color: "blue" },
    { key: "feature3", color: "green" },
    { key: "feature4", color: "purple" },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-neon-pink/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neon-blue text-glow-blue">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.key}
              title={t(`${feature.key}.title`)}
              description={t(`${feature.key}.description`)}
              index={index}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
