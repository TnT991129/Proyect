import { motion } from "framer-motion";
export default function LogoClouds() {
  return <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <h2 className="font-semibold text-center text-lg/8 text-primary">
          Trusted by the world’s most innovative teams
        </h2>
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="items-center gap-x-8 gap-y-10 sm:gap-x-10 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 mt-10 max-w-lg sm:max-w-xl lg:max-w-none">
          <img alt="Transistor" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
          <img alt="Reform" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
          <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" width={158} height={48} className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain" />
          <img alt="SavvyCal" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" width={158} height={48} className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain" />
          <img alt="Statamic" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg" width={158} height={48} className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain" />
        </motion.div>
      </div>
    </div>;
}
