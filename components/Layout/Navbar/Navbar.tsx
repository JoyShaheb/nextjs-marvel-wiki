"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { gradientTextStyles } from "../../Text/GradientText";
import { MoonIcon } from "@heroicons/react/24/outline";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className={`self-center text-2xl font-semibold whitespace-nowrap ${gradientTextStyles}`}
        >
          Flowbite
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && <Bars3Icon className="w-20" strokeWidth={2} />}
          {isOpen && <XMarkIcon className="w-20" strokeWidth={2} />}
          <span className="sr-only">Open main menu</span>
        </button>
        <div
          className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink href="/" text="Home" isCurrent={true} />
            <NavLink href="/" text="About" isCurrent={false} />
            <NavLink href="/" text="Services" isCurrent={false} />
            <NavLink href="/" text="Pricing" isCurrent={false} />
            <NavLink href="/" text="Contact" isCurrent={false} />
            <MoonIcon className="h-6 text-white" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
