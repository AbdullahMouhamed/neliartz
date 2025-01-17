import { motion } from "framer-motion";

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="w-full py-10">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: false, amount: 0.3 }} 
                className="container max-w-4xl mx-auto text-center"
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-bold mb-6 "
                    variants={itemVariants}
                >
                    Connect with Me
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl  mb-8"
                    variants={itemVariants}
                >
                    Follow me on social media for more art, updates, and inspiration!
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    variants={containerVariants}
                >

                    <motion.a
                        href="https://www.reddit.com/user/DDoma_Sama/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-48 py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium rounded-md shadow-md transition duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fa-brands fa-reddit text-2xl mr-3"></i> Reddit
                    </motion.a>


                    <motion.a
                        href="https://www.tiktok.com/@nelizoldyck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-48 py-3 px-6 bg-black hover:bg-gray-800 text-white text-lg font-medium rounded-md shadow-md transition duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fa-brands fa-tiktok text-2xl mr-3"></i> TikTok
                    </motion.a>


                    <motion.a
                        href="https://www.instagram.com/neli_artz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-48 py-3 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:opacity-90 text-white text-lg font-medium rounded-md shadow-md transition duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <i className="fa-brands fa-instagram text-2xl mr-3"></i> Instagram
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
