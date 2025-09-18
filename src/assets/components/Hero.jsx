import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Anime Characters", "Game Characters", "People"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // cycle every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative h-[90vh] flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col gap-10 sm:gap-16 justify-center items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-center font-bold text-[clamp(28px,5vw,56px)] leading-snug"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-rose-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">
            Neli&apos;s Arts
          </span>
        </motion.h1>

        {/* Rotating Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[clamp(18px,3vw,28px)] flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 text-gray-200"
        >
          <p className="whitespace-nowrap">I Can Draw</p>
          <div className="relative h-[32px] sm:h-[36px] overflow-hidden w-[300px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 w-full text-rose-400 whitespace-nowrap text-center"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
