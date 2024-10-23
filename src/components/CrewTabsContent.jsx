import { AnimatePresence, motion } from "framer-motion";

function CrewTabsContent({ activeCrew, setActiveCrew, crew, scaleVariants }) {
  const { name, role, bio } = crew?.[activeCrew] || {};

  return (
    <div className="w-full sm:w-3/4 sm:mx-auto text-center  lg:text-left lg:w-1/2 lg:ml-0 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={name}
          variants={scaleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <h3>{role}</h3>
          <h2 className="my-4  text-3xl font-belleFair tracking-widest uppercase md:text-4xl">
            {name}
          </h2>
          <p className="text-sm lg:text-base tracking-widest text-light-white font-normal leading-6">
            {bio}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="tab-btn my-8 lg:mt-14 flex  justify-center lg:justify-start gap-2 items-center">
        {crew?.map((item, indx) => {
          return (
            <button
              key={item.name}
              className={`w-3 h-3 rounded-full lg:w-4 lg:h-4 hover:bg-white hover:opacity-85 transition-all duration-300 ${
                activeCrew === indx ? "bg-white" : "bg-white opacity-30"
              }`}
              onClick={() => {
                setActiveCrew(indx);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default CrewTabsContent;
