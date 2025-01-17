
import Design from '../assets/components/Design';
import Navbar from './../assets/components/Navbar';
import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"
import image5 from "../assets/images/5.jpg"
import image6 from "../assets/images/6.jpg"
import image7 from "../assets/images/7.jpg"
import image8 from "../assets/images/8.png"
import image9 from "../assets/images/9.png"


import { motion } from 'framer-motion';
import Gallery from '../assets/components/Gallery';
export default function GalleryPage() {
    const pics = [
        { id: 1, url: image1 },
        { id: 2, url: image2 },
        { id: 3, url: image3 },
        { id: 4, url: image4 },
        { id: 5, url: image5 },
        { id: 6, url: image6 },
        { id: 7, url: image7 },
        { id: 8, url: image8 },
        { id: 9, url: image9 },

    ];

    return (
        <>

            <section
                
                className="gallery "
            >
                <div className="container px-4 sm:px-8 md:px-12 py-10 md:py-20 flex flex-col gap-8 md:gap-10 justify-center items-center">
                    <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8 } }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="header text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center flex justify-center items-center gap-4 cursor-default relative px-4">
                        Gallery
                        <i className="fa-solid fa-paintbrush fa-shake text-[18px] sm:text-[20px]"></i>
                        <div className="layer absolute transition-all duration-300 rounded-xl"></div>
                    </motion.h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pics.map((pic) => (
                            <Gallery url={pic.url} key={pic.id} id={pic.id} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
