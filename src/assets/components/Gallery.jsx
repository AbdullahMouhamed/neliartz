import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Gallery({ url, id, price }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-[9999] w-full h-screen"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex justify-center items-center w-[90%] md:w-[70%] lg:w-[55%] max-w-[700px]"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-xl sm:text-2xl bg-black/70 w-9 sm:w-10 h-9 sm:h-10 flex justify-center items-center rounded-full hover:bg-red-600 transition"
              >
                ✕
              </button>

              {/* Image */}
              <motion.img
                src={url}
                alt="Gallery Item"
                className="w-full rounded-xl object-contain shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stylish Gallery Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * id, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={openModal}
        className="relative group cursor-pointer w-full max-w-[300px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-rose-500/40 transition"
      >
        {/* Image Section */}
        <div className="relative h-[220px] w-full overflow-hidden">
          <img
            src={url}
            alt={`Gallery Thumbnail ${id}`}
            className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition duration-500 ease-out"
          />

          {/* Floating Price Tag */}
          <span className="absolute top-3 right-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            ${price}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col items-start gap-2">
          <h3 className="font-semibold text-lg text-white">Artwork #{id}</h3>
          <p className="text-sm text-gray-300">
            Tap to view this piece in full detail.
          </p>
        </div>

        {/* Gradient border hover effect */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-rose-500/60 transition"></div>
      </motion.div>
    </>
  );
}
