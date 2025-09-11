import { motion } from "framer-motion";

export default function Hero() {
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
          <div className="relative h-[32px] sm:h-[36px] overflow-hidden">
            <span className="block animate-slide text-rose-400">Anime Characters</span>
            <span className="block animate-slide text-rose-400">Game Characters</span>
            <span className="block animate-slide text-rose-400">People</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
