import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
};

function TechnologyTabsContent({ activeTech, setActiveTech, tech }) {
  const { name, description } = tech?.[activeTech] || {};

  return (
    <div className="w-full sm:w-3/4 sm:mx-auto text-center lg:ml-0  lg:text-left lg:w-1/2  px-4 lg:flex lg:items-center lg:gap-8">
      <div className="tab-btn my-8  flex  justify-center lg:justify-start gap-4 items-center lg:gap-8 lg:flex-col">
        {tech?.map((item, indx) => {
          return (
            <button
              key={item.name}
              className={`px-4 py-2 lg:px-6 lg:py-6 border-[1px] border-white/40 flex justify-center items-center rounded-full lg:w-4 lg:h-4 hover:border-white transition-all duration-300  ${
                activeTech === indx ? "bg-white text-slate-900" : ""
              }`}
              onClick={() => {
                setActiveTech(indx);
              }}
            >
              {indx + 1}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={name}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-light-white font-normal tracking-widest uppercase text-xl opacity-80">
            The Terminology...
          </h3>
          <h2 className="my-4  text-2xl font-belleFair tracking-widest uppercase md:text-4xl">
            {name}
          </h2>
          <p className="text-xs sm:text-sm leading-5 lg:text-base tracking-widest text-light-white font-normal lg:leading-6">
            {description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TechnologyTabsContent;
