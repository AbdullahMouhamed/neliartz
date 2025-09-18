import { motion } from "framer-motion";

export default function Content() {
  const listVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full text-white py-10 px-6">
      <div className="container max-w-4xl mx-auto text-center space-y-12">
        {/* What I Can Draw */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-900/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-800 text-base md:text-lg"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-green-400 drop-shadow-md">
            ✨ What I Can Draw ✨
          </h1>
          <div className="mb-6 p-5 rounded-2xl bg-gray-900/70 border border-yellow-500/40 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center justify-center gap-2">

              Discounts
            </h2>
            <ul className="space-y-3 text-gray-200">
              <li>
                <span className="font-semibold text-white">2 × A4</span>{" "}
                <span className="text-green-400">10% off</span>{" "}
                <span className="text-sm text-gray-400">(3+ → 15% off)</span>
              </li>
              <li>
                <span className="font-semibold text-white">2 × A3</span>{" "}
                <span className="text-green-400">15% off</span>{" "}
                <span className="text-sm text-gray-400">(3+ → 20% off)</span>
              </li>
              <li>
                <span className="font-semibold text-white">2 × A2</span>{" "}
                <span className="text-green-400">25% off</span>
              </li>
            </ul>
          </div>

          <ul className="space-y-8">
            {/* Human Portraits */}
            <li className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="flex items-center text-pink-400 font-semibold text-xl">
                <i className="fa-solid fa-check mr-2"></i> Human Portraits
              </div>
              <div className="mt-3 space-y-1 text-gray-300 font-light">
                <p>A4 — <span className="text-white">70€</span> (no background) | <span className="text-white">90€</span> (with background)</p>
                <p>A3 — <span className="text-white">85€</span> (no background) | <span className="text-white">100€</span> (with background)</p>
                <p>A4 — <span className="text-white">60€</span> (Graphite, no background) | <span className="text-white">70€</span> (Graphite, with background)</p>
                <p>A3 — <span className="text-white">80€</span> (Graphite, no background) | <span className="text-white">90€</span> (Graphite, with background)</p>
              </div>
            </li>

            {/* Game Characters */}
            <li className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="flex items-center text-pink-400 font-semibold text-xl">
                <i className="fa-solid fa-check mr-2"></i> Game Characters
              </div>
              <div className="mt-3 space-y-1 text-gray-300 font-light">
                <p>A4 — <span className="text-white">90€</span></p>
                <p>A3 — <span className="text-white">110€</span></p>
                <p>A2 — <span className="text-white">270€</span> (min) | <span className="text-white">320€</span> (max)</p>
              </div>
            </li>

            {/* Anime Characters */}
            <li className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="flex items-center text-pink-400 font-semibold text-xl">
                <i className="fa-solid fa-check mr-2"></i> Anime Characters
              </div>
              <div className="mt-3 space-y-1 text-gray-300 font-light">
                <p>A4 — <span className="text-white">60€</span> (INK) | <span className="text-white">80€</span> (Color)</p>
                <p>A3 — <span className="text-white">75€</span> (INK) | <span className="text-white">100€</span> (Color)</p>
              </div>
            </li>

            {/* Custom Requests */}
            <li className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="flex items-center text-pink-400 font-semibold text-xl">
                <i className="fa-solid fa-check mr-2"></i> Customized Art Requests
              </div>
              <p className="mt-3 italic text-gray-400">(DM me and let’s create something unique!)</p>
            </li>
          </ul>
        </motion.div>



        {/* What I Can't Draw */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center text-lg md:text-xl space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            What I Can't Draw
          </h1>
          <li className="flex items-center">
            <i className="fa-solid fa-xmark text-red-500 mr-3"></i> Animals
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-xmark text-red-500 mr-3"></i> Landscapes/Sceneries
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-xmark text-red-500 mr-3"></i> Robots
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-xmark text-red-500 mr-3"></i> Cars/Motorbikes
          </li>
        </motion.ul>

        {/* What I Won't Accept */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center text-lg md:text-xl space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            What I Won't Accept to Draw
          </h1>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Incest
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Pedophilia
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> NSFW/Nudity/Porn
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Real Life Gore
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Abuse
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Illegal items (e.g., drugs, guns, etc.)
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
