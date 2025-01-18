import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8 } }}
                viewport={{ once: false, amount: 0.5 }}
                className="about h-auto sm:h-[40vh] flex justify-center items-center bg-transparent"
            >
                <div
                    id="about"
                    className="container mx-auto px-4 flex flex-col gap-12 sm:gap-28 justify-center items-center"
                >
                    <h1 className="header text-[30px] sm:text-[40px] flex justify-center items-center gap-4 cursor-default relative px-4 text-white">
                        About Me
                        <i className="fa-solid fa-palette fa-shake text-[20px] sm:text-[22px]"></i>
                        <div className="layer absolute transition-all duration-300 rounded-xl"></div>
                    </h1>

                    <p className="text-center text-[18px] sm:text-[25px] text-gray-300 leading-relaxed px-4">
                        Hi everyone! My name is Neli, and I'm a 23-year-old woman from Greece. I've been drawing since I was
                        a child. I am a self-taught artist, and I like to use colored pencils, markers, and graphite for my
                        work. I have drawn a lot of portraits, anime drawings, and game character drawings. I decided to
                        expand my work and share it with the world to express my passion. I'm looking forward to receive
                        your order!
                    </p>
                </div>
            </motion.section>
        </>
    );
}
