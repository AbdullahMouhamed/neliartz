import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className=" text-white py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }} // Trigger every time the footer enters the viewport
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto text-center">
                <motion.p
                    className="text-sm md:text-lg "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }} // Repeat animation for the text
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    &copy; {new Date().getFullYear()} Masquerades Room. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    );
}
