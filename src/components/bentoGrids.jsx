import { motion} from 'framer-motion'

export default function BentoGrids() {
   return <div className="bg-white py-24 sm:py-32" id="Products">
       <div className="mx-auto px-6 lg:px-8 min-w-4xl lg:max-w-7xl">
         <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="font-semibold text-base/7 text-primary">
           Powerful APIs for Your Marketing Arsenal
         </motion.h2>
         <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="mt-2 max-w-3xl font-semibold text-4xl text-pretty text-secondary sm:text-5xl tracking-tight">
           Unlock the full potential of digital marketing with our suite of specialized tools
         </motion.p>
         <div className="gap-4 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 mt-10 sm:mt-16">
           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.3 }} className="relative lg:col-span-3">
             <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
             <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] h-full overflow-hidden">
               <img alt="" src="https://tailwindui.com/plus/img/component-images/bento-01-performance.png" className="object-left h-80 object-cover" />
               <div className="p-10 pt-4">
                 <h3 className="font-semibold text-primary text-sm/4">
                   Data
                 </h3>
                 <p className="mt-2 font-medium text-gray-700 text-lg tracking-tight">
                   Social Media Insights
                 </p>
                 <p className="mt-2 max-w-lg text-gray-700 text-sm/6">
                   Harness real-time data from major social platforms to
                   drive engagement and growth
                 </p>
               </div>
             </div>
             <div className="absolute inset-px shadow rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] ring-1 ring-black/5 hover:ring-primary animate-scaleCard duration-150 ease-in-out" />
           </motion.div>
           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="relative lg:col-span-3">
             <div className="absolute inset-px bg-white rounded-lg lg:rounded-tr-[2rem]" />
             <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] h-full overflow-hidden">
               <img alt="" src="https://tailwindui.com/plus/img/component-images/bento-01-releases.png" className="lg:object-right object-left h-80 object-cover" />
               <div className="p-10 pt-4">
                 <h3 className="font-semibold text-primary text-sm/4">
                   Releases
                 </h3>
                 <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                   Email Campaign Optimizer
                 </p>
                 <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                   Boost open rates and conversions with AI-powered email
                   marketing tools
                 </p>
               </div>
             </div>
             <div className="absolute inset-px shadow rounded-lg lg:rounded-tr-[2rem] ring-1 ring-black/5 hover:ring-primary" />
           </motion.div>
           <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="relative lg:col-span-2">
             <div className="absolute inset-px bg-white rounded-lg lg:rounded-bl-[2rem]" />
             <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] h-full overflow-hidden">
               <img alt="" src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png" className="object-left h-80 object-cover" />
               <div className="p-10 pt-4">
                 <h3 className="font-semibold text-primary text-sm/4">
                   Speed
                 </h3>
                 <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                   SEO Performance Tracke
                 </p>
                 <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                   Monitor and improve your search engine rankings with
                   advanced analytics
                 </p>
               </div>
             </div>
             <div className="absolute inset-px shadow rounded-lg lg:rounded-bl-[2rem] ring-1 ring-black/5 hover:ring-primary" />
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="relative lg:col-span-2">
             <div className="absolute inset-px bg-white rounded-lg" />
             <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] h-full overflow-hidden">
               <img alt="" src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png" className="h-80 object-cover" />
               <div className="p-10 pt-4">
                 <h3 className="font-semibold text-primary text-sm/4">
                   Integrations
                 </h3>
                 <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                   Ad Campaign Manager
                 </p>
                 <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                   Streamline your advertising efforts across multiple
                   platforms with one powerful API
                 </p>
               </div>
             </div>
             <div className="absolute inset-px shadow rounded-lg ring-1 ring-black/5 hover:ring-primary" />
           </motion.div>
           <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} className="relative lg:col-span-2">
             <div className="absolute inset-px bg-white rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
             <div className="relative flex flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] h-full overflow-hidden">
               <img alt="" src="https://tailwindui.com/plus/img/component-images/bento-01-network.png" className="h-80 object-cover" />
               <div className="p-10 pt-4">
                 <h3 className="font-semibold text-primary text-sm/4">
                   Network
                 </h3>
                 <p className="mt-2 font-medium text-gray-950 text-lg tracking-tight">
                   Customer Behavior Analyzer
                 </p>
                 <p className="mt-2 max-w-lg text-gray-600 text-sm/6">
                   Gain deep insights into customer journeys and preferences
                   for targeted marketing
                 </p>
               </div>
             </div>
             <div className="absolute inset-px shadow rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem] ring-1 ring-black/5 hover:ring-primary" />
           </motion.div>
         </div>
       </div>
     </div>; 
}
