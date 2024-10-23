import React, { useEffect, useState } from "react";
import CrewTabsContent from "../components/CrewTabsContent";
import TechnologyTabsContent from "../components/TechnologyTabsContent";
import { useAppData } from "../context/AppDataContext";
import { AnimatePresence, motion } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
};

function Technology() {
  const [activeTech, setActiveTech] = useState(0);
  const { data, isLoading, error } = useAppData();
  const photo = window.innerWidth > 1024 ? "portrait" : "landscape";

  return (
    <main>
      <section className="crew min-h-screen bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop bg-no-repeat bg-center bg-cover">
        <div className="lg:container min-h-screen m-auto pt-20 md:pt-36  pb-2  flex flex-col lg:justify-between">
          <h3 className="uppercase tracking-widest md:text-xl text-center lg:text-left">
            <span className="text-light-white mr-3">03</span> Space Lauch 101
          </h3>

          {error && (
            <p className="text-red-500 text-4xl text-center">{error}</p>
          )}

          {isLoading ? (
            <p className="text-white text-4xl text-center">Loading...</p>
          ) : (
            <div className="w-full m-auto lg:flex lg:justify-between lg:items-center  lg:flex-row-reverse">
              <div className="mt-4 w-full flex items-center justify-start lg:max-w-md lg:mt-0 ">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={data?.technology?.[activeTech].name}
                    src={data?.technology?.[activeTech].images?.[photo]}
                    alt={data?.technology?.[activeTech].name}
                    className="w-full object-cover"
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
              <TechnologyTabsContent
                activeTech={activeTech}
                setActiveTech={setActiveTech}
                tech={data?.technology}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Technology;
