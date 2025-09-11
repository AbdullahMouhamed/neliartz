import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 flex justify-center items-center bg-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container relative z-10 mx-auto px-6 flex flex-col gap-10 justify-center items-center max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          className="relative flex items-center gap-3 text-[clamp(26px,5vw,42px)] font-extrabold text-center text-white"
          variants={itemVariants}
        >
          Connect with Me
          <i className="fa-solid fa-link text-rose-400" />
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-center text-[clamp(16px,2.5vw,20px)] text-gray-300 leading-relaxed px-4"
          variants={itemVariants}
        >
          Follow me on{" "}
          <span className="text-yellow-300 font-semibold">social media</span> for
          more <span className="text-rose-300">art</span>,{" "}
          <span className="text-rose-300">updates</span>, and{" "}
          <span className="text-rose-300">inspiration</span>!
        </motion.p>

        {/* Socials */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={containerVariants}
        >
          {/* Reddit */}
          <motion.a
            href="https://www.reddit.com/user/DDoma_Sama/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-48 py-3 px-6 rounded-xl 
                       bg-orange-500/90 hover:bg-orange-500 text-white text-[clamp(16px,2vw,18px)] font-semibold 
                       shadow-md shadow-orange-600/30 backdrop-blur-sm transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-reddit text-xl mr-2"></i> Reddit
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@neli_artz?_t=ZN-8zdz3tv4nIc&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-48 py-3 px-6 rounded-xl 
                       bg-black/90 hover:bg-gray-900 text-white text-[clamp(16px,2vw,18px)] font-semibold 
                       shadow-md shadow-gray-800/40 backdrop-blur-sm transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-tiktok text-xl mr-2"></i> TikTok
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/neli_artz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-48 py-3 px-6 rounded-xl 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 
                       hover:opacity-90 text-white text-[clamp(16px,2vw,18px)] font-semibold 
                       shadow-md shadow-pink-500/30 backdrop-blur-sm transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-instagram text-xl mr-2"></i> Instagram
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
