import { useState } from "react";
import DestinationTabs from "../components/DestinationTabs";
import DestinationTabsContent from "../components/DestinationTabsContent";
import { useAppData } from "../context/AppDataContext";
import { AnimatePresence, motion } from "framer-motion";

const rotateVar = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

function Destination() {
  const [activeDestination, setActiveDestination] = useState(0);
  const { data, isLoading, error } = useAppData();

  return (
    <main>
      <section className="destination min-h-screen bg-destination-mobile sm:bg-destination-tablet md:bg-destination-desktop  bg-no-repeat bg-cover">
        <div className="container min-h-screen m-auto pt-24 md:pt-36 px-4 pb-2">
          <h3 className="uppercase tracking-widest mb-16 md:text-xl text-center lg:text-left">
            <span className="text-light-white mr-3">01</span> Pick Your
            Destination
          </h3>
          <div className="w-full m-auto lg:flex lg:justify-between">
            <div className="max-w-52 m-auto flex items-center justify-center md:max-w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={data?.destinations?.[activeDestination].name}
                  src={data?.destinations?.[activeDestination].images.png}
                  alt={data?.destinations?.[activeDestination].name}
                  variants={rotateVar}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
            {error && (
              <p className="text-red-500 text-4xl text-center">{error}</p>
            )}

            {isLoading ? (
              <p className="text-white text-4xl text-center">Loading...</p>
            ) : (
              <div className="w-full lg:w-1/2 overflow-x-hidden">
                <DestinationTabs
                  activeDestination={activeDestination}
                  setActiveDestination={setActiveDestination}
                  destinations={data?.destinations}
                />
                <DestinationTabsContent
                  destination={data?.destinations?.[activeDestination]}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
