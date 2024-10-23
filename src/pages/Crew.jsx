import React, { useState } from "react";
import { useAppData } from "../context/AppDataContext";
import CrewTabsContent from "../components/CrewTabsContent";
import { AnimatePresence, motion } from "framer-motion";

const scaleVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

function Crew() {
  const [activeCrew, setActiveCrew] = useState(0);
  const { data, isLoading, error } = useAppData();

  return (
    <main>
      <section className="crew min-h-screen bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop bg-no-repeat bg-center bg-cover">
        <div className="container min-h-screen m-auto pt-20 md:pt-36 px-4 pb-2  flex flex-col lg:justify-between">
          <h3 className="uppercase tracking-widest mb-8 md:text-xl text-center lg:text-left">
            <span className="text-light-white mr-3 ">02</span> Meet your Crew
          </h3>

          {error && (
            <p className="text-red-500 text-4xl text-center">{error}</p>
          )}

          {isLoading ? (
            <p className="text-white text-4xl text-center">Loading...</p>
          ) : (
            <div className="w-full m-auto lg:flex lg:justify-between lg:items-center">
              <CrewTabsContent
                activeCrew={activeCrew}
                setActiveCrew={setActiveCrew}
                crew={data?.crew}
                scaleVariants={scaleVariants}
              />
              <div className="max-w-52 m-auto flex items-center justify-start lg:max-w-80  drop-shadow-[0_25px_11px_rgba(255,255,255,0.55)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={data?.crew?.[activeCrew].name}
                    variants={scaleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    src={data?.crew?.[activeCrew].images.png}
                    alt={data?.crew?.[activeCrew].name}
                  />
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Crew;
