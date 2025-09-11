import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.png";
import image9 from "../assets/images/9.png";

import { motion } from "framer-motion";
import Gallery from "../assets/components/Gallery";

export default function GalleryPage() {
  const pics = [
    { id: 1, url: image1, price: 29.99 },
    { id: 2, url: image2, price: 39.99 },
    { id: 3, url: image3, price: 19.99 },
    { id: 4, url: image4, price: 49.99 },
    { id: 5, url: image5, price: 24.99 },
    { id: 6, url: image6, price: 34.99 },
    { id: 7, url: image7, price: 59.99 },
    { id: 8, url: image8, price: 44.99 },
    { id: 9, url: image9, price: 54.99 },
  ];

  return (
    <section className="gallery">
      <div className="container px-4 sm:px-8 md:px-12 py-10 md:py-20 flex flex-col gap-8 md:gap-10 justify-center items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center flex justify-center items-center gap-4 cursor-default relative px-4"
        >
          Gallery
          <motion.i
            className="fa-solid fa-paintbrush text-[18px] sm:text-[20px] fa-bounce text-yellow-400"
            initial={{ rotate: -20, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
          />
         
        </motion.h1>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {pics.map((pic) => (
            <motion.div
              key={pic.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <Gallery url={pic.url} id={pic.id} price={pic.price} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
