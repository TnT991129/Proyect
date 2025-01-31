import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Bars3Icon, BellIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/icon/logo.png'
import {  UserIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Products", href: "#Products", current: false },
  { name: "Prices", href: "#Prices", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return <Disclosure as="nav" className="top-0 z-50 fixed inset-x-0">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-8xl">
        <div className="relative flex justify-between items-end h-16">
          <div className="left-0 absolute inset-y-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="inline-flex relative justify-center items-center hover:bg-primary ml-2 p-2 rounded-md focus:ring-2 focus:ring-white focus:ring-inset text-primary hover:text-secondary focus:outline-none group">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block group-data-[open]:hidden size-6" />
              <XMarkIcon aria-hidden="true" className="group-data-[open]:block hidden size-6" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 justify-center sm:justify-between items-center sm:items-stretch">
            <div className="flex items-center shrink-0">
              <img alt="Your Company" src={logo} className="w-auto h-8" />
            </div>
            <div className="sm:block hidden sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map(item =>
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-secondary text-primary"
                        : "text-gray-900 hover:bg-secondary hover:text-primary",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                     {item.name}
                  </a>
                )}
                
                <a href="#" className="flex bg-secondary px-3 py-2 rounded-md font-medium text-primary text-sm">
                  <LockClosedIcon className="mx-1 w-5"/>
                  MarkComp
                </a>
              </div>
            </div>
          </div>
          <div className="right-0 sm:static absolute inset-y-0 sm:inset-auto flex items-center sm:ml-6 pr-2 sm:pr-0">
            <button type="button" className="relative bg-secondary p-1 rounded-full focus:ring-2 focus:ring-primary focus:ring-offset-2 text-primary hover:text-white focus:outline-none">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="border-primary text-red size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex border-primary rounded-full ring-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm text-white focus:outline-none">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <UserIcon className="rounded-full text-red-200 size-8" />
                </MenuButton>
              </div>
              <MenuItems transition className="right-0 z-10 absolute bg-secondary data-[closed]:opacity-0 shadow-xl mt-2 py-1 rounded-md ring-1 ring-black/5 w-48 data-[closed]:transform origin-top-right transition data-[enter]:duration-100 data-[leave]:duration-75 data-[closed]:scale-95 data-[enter]:ease-out data-[leave]:ease-in focus:outline-none">
                <MenuItem>
                  <Link to="/sigin" className="block data-[focus]:bg-primary mx-1 px-4 py-2 rounded-md font-bold text-primary text-sm data-[focus]:text-secondary data-[focus]:outline-none">
                    Sign in
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/login" className="block data-[focus]:bg-primary mx-1 px-4 py-2 rounded-md font-bold text-primary text-sm data-[focus]:text-secondary data-[focus]:outline-none">
                    Log in
                  </Link>
                </MenuItem>
                
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-1 bg-slate-700 mx-1 px-2 pt-2 pb-3 rounded-lg">
          {navigation.map(item =>
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-primary text-white"
                  : "text-white hover:bg-primary hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          )}
        </motion.div>
      </DisclosurePanel>
    </Disclosure>;
}
