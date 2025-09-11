import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 flex justify-center items-center bg-transparent"
    >
      <div className="container relative z-10 mx-auto px-6 flex flex-col gap-10 justify-center items-center max-w-3xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex items-center gap-3 text-[clamp(26px,5vw,42px)] font-extrabold text-center text-white"
        >
          About Me
          <i className="fa-solid fa-palette text-yellow-400 fa-bounce" />
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[clamp(16px,2.5vw,20px)] text-white leading-relaxed px-4"
        >
          Hi, I’m <span className="text-rose-300 font-semibold">Neli</span>, a{" "}
          <span className="text-yellow-300">23-year-old self-taught artist</span>{" "}
          from Greece. I love creating portraits, anime, and game characters
          using <span className="text-rose-300">pencils</span>,{" "}
          <span className="text-rose-300">markers</span>, and{" "}
          <span className="text-rose-300">graphite</span>.
        </motion.p>

        {/* Highlight */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="block mt-4 text-rose-400 font-medium text-[clamp(16px,2.5vw,20px)] text-center"
        >
          Art is my passion — I’d love to create something special for you!
        </motion.span>
      </div>
    </section>
  );
}
