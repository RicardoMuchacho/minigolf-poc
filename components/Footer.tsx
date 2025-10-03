"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 border-t border-neon-pink/30 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-neon-pink text-glow-pink"
          >
            Puttfun Barcelona
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70"
          >
            {t("rights")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="#"
              className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-neon-blue hover:text-neon-pink transition-colors duration-300"
            >
              TikTok
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
