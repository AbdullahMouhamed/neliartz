import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery({ url, id }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-[999999] w-full h-screen"
            onClick={closeModal}
            aria-hidden={!modalOpen}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex justify-center items-center w-[90%] md:w-[70%] lg:w-[50%] max-w-[600px]"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-[24px] sm:text-[30px] bg-black bg-opacity-70 px-1 w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center rounded-full"
              >
                x
              </button>
              <img
                src={url}
                className="w-full rounded-md object-contain"
                alt="Gallery Item"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 + id * 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="card z-50"
      >
        <div
          onClick={openModal}
          className="card-head w-full max-w-[400px] h-[200px] sm:h-[300px] cursor-pointer"
        >
          <img
            src={url}
            alt="Gallery Thumbnail"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </motion.div>
    </>
  );
}
