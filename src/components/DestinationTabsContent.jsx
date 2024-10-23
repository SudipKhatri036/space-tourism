import { AnimatePresence, motion } from "framer-motion";

function DestinationTabsContent({ destination = [] }) {
  return (
    <motion.div
      key={destination.name}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full sm:w-3/4 sm:mx-auto text-center lg:w-full lg:text-left"
    >
      <h2 className="my-10 text-5xl font-belleFair tracking-widest uppercase md:text-6xl">
        {destination.name}
      </h2>

      <p className="text-sm lg:text-base tracking-widest text-light-white font-normal leading-6">
        {destination.description}
      </p>

      <hr className="w-full  my-6 text-light-white" />

      <ul className="flex flex-col gap-6 sm:flex-row sm:justify-around sm:items-center lg:justify-start lg:gap-16">
        <li className="uppercase">
          <span className="tracking-widest text-light-white text-sm ">
            Avg. Distance
          </span>

          <p className="mt-2 tracking-wider text-2xl">{destination.distance}</p>
        </li>
        <li className="uppercase">
          <span className="tracking-widest text-light-white text-sm ">
            Est. Travel Time
          </span>

          <p className="mt-2 tracking-wider text-2xl">{destination.travel}</p>
        </li>
      </ul>
    </motion.div>
  );
}

export default DestinationTabsContent;
