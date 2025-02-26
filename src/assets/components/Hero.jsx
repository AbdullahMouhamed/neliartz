import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <>
            <section className="hero ">
                <div className="container mx-auto px-4 h-[90vh] flex flex-col gap-8 sm:gap-16 justify-center items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-white text-[32px] sm:text-[50px] text-center z-50"
                    >
                        Welcome To <span className="text-red-600">Neli's Arts</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-5 text-[20px] sm:text-[30px] text-center sm:text-left"
                    >
                        <p>I Can Draw</p>
                        <div className="flex justify-center items-center text-red-600 overflow-hidden ">
                            <span className="block anime overflow-hidden whitespace-nowrap">Anime Characters</span>
                            <span className="block games overflow-hidden whitespace-nowrap">Game Characters</span>
                            <span className="block people overflow-hidden whitespace-nowrap">People</span>
                        </div>
                        <span className="hidden sm:block text-white h-9 bg-white w-[1px]"></span>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
