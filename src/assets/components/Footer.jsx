import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative py-10 sm:py-12 text-gray-300 border-t border-white/10 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // Runs every time it enters
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        <motion.p
          className="text-[clamp(14px,2vw,18px)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-rose-300 font-semibold">Neli&apos;s Arts</span>.{" "}
          All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
