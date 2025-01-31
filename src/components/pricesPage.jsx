
import { motion } from "framer-motion";
import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" }
];
const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$19", annually: "$199" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time"
    ],
    mostPopular: false
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$29", annually: "$299" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations"
    ],
    mostPopular: true
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "$59", annually: "$599" },
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools"
    ],
    mostPopular: false
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Prices() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  
  return (
    <div className="bg-gray-700 py-24 sm:py-32" id="Prices">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 
            className="font-semibold text-base/7 text-primary">
              Pricing
          </h2>
          <motion.p 
          initial={{opacity:0, scale: 1.4}}
          whileInView={{opacity:1, scale: 1}}
          transition={{type:"spring", duration: 1.5}}
          
          className="mt-2 font-semibold text-5xl text-balance text-white sm:text-6xl tracking-tight">
            Pricing that grows with you
          </motion.p>
        </div>
        <motion.p 
        initial={{opacity:0, x: 100}}
        whileInView={{opacity:1, x: 0}}
        transition={{duration: 1.4}}
        
        className="mx-auto mt-6 max-w-2xl font-medium text-center text-gray-400 text-lg text-pretty sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </motion.p>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        className="flex justify-center mt-16">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="gap-x-1 grid grid-cols-2 bg-primary p-1 rounded-full font-semibold text-black text-center text-xs/5"
            >
              {frequencies.map(option =>
                <Radio
                  key={option.value}
                  value={option}
                  className="data-[checked]:bg-secondary px-2.5 py-1 rounded-full cursor-pointer"
                >
                  {option.label}
                </Radio>
              )}
            </RadioGroup>
          </fieldset>
        </motion.div>
        <motion.div 
        initial={{opacity:0 , scale: 1.2}}
        whileInView={{opacity:1 , scale: 1}}
        transition={{duration:1}}
        className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 max-w-md lg:max-w-none isolate">
          {tiers.map(tier =>
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-primary ring-2 ring-primary"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex justify-between items-center gap-x-4">
                <h3 id={tier.id} className="font-semibold text-lg/8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular
                  ? <p className="bg-primary px-2.5 py-1 rounded-full font-semibold text-white text-xs/5">
                      Most popular
                    </p>
                  : null}
              </div>
              <p className="mt-4 text-gray-300 text-sm/6">
                {tier.description}
              </p>
              <p className="flex items-baseline gap-x-1 mt-6">
                <span className="font-semibold text-4xl text-white tracking-tight">
                  {tier.price[frequency.value]}
                </span>
                <span className="font-semibold text-gray-300 text-sm/6">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-secondary text-primary shadow-sm hover:bg-yellow-100 focus-visible:outline-primary"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="space-y-3 mt-8 xl:mt-10 text-gray-300 text-sm/6"
              >
                {tier.features.map(feature =>
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="flex-none w-5 h-6 text-white"
                    />
                    {feature}
                  </li>
                )}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
