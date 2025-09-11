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
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-800 flex flex-col items-center text-lg md:text-xl space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
            What I Can Draw
          </h1>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-green-500 mr-3"></i> Human portraits
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-green-500 mr-3"></i> Game characters
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-check text-green-500 mr-3"></i> Anime characters
          </li>
          <li className="flex items-center gap-2">
            <i className="fa-solid fa-check text-green-500 mr-3"></i> Customized Art requests
            <span className="italic">(DM so we can discuss!)</span>
          </li>
        </motion.ul>

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
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Furry
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-ban text-red-500 mr-3"></i> Illegal items (e.g., drugs, guns, etc.)
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
