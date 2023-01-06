import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";

export default function Navbar() {
   return (
      <div className="relative bg-gray-50">
         <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
               <div className="flex items-center justify-between py-6 ">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                     <Link to="/">
                        <h1 className="text-2xl font-bold">Travel App</h1>
                     </Link>
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                     <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                     </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                     <Link
                        to="/"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                     >
                        Home
                     </Link>
                     <Link
                        to="/images"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                     >
                        Images
                     </Link>
                     <Link
                        to="/destinations"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                     >
                        Destinations
                     </Link>
                  </Popover.Group>
               </div>
            </div>

            <Transition
               as={Fragment}
               enter="duration-200 ease-out"
               enterFrom="opacity-0 scale-95"
               enterTo="opacity-100 scale-100"
               leave="duration-100 ease-in"
               leaveFrom="opacity-100 scale-100"
               leaveTo="opacity-0 scale-95"
            >
               <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
               >
                  <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                     <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                           <div>
                              <Link to="/">
                                 <h1 className="text-xl font-semibold">
                                    Travel App
                                 </h1>
                              </Link>
                           </div>
                           <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                 <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                 />
                              </Popover.Button>
                           </div>
                        </div>
                     </div>
                     <div className="space-y-6 py-6 px-5">
                        <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                           <Link
                              to="/"
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                           >
                              Home
                           </Link>

                           <Link
                              to="/images"
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                           >
                              Images
                           </Link>
                           <Link
                              to="/destinations"
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                           >
                              Destinations
                           </Link>
                        </div>
                     </div>
                  </div>
               </Popover.Panel>
            </Transition>
         </Popover>
      </div>
   );
}
