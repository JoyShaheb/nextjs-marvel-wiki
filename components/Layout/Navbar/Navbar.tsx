"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { gradientTextStyles } from "@/components/Text/GradientText";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { themeSwitch } from "@/app/store";
import { ThemeTypesEnum } from "@/types/enum";
import NavLink from "./NavLink";

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.system.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeTypesEnum.DARK,
      theme === ThemeTypesEnum.DARK
    );
  }, [theme]);

  const handleChangeTheme = () =>
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT
      )
    );

  const [navbarMenu, setNavbarMenu] = useState(false);

  return (
    <nav className="bg-gray-800 mb-8">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <Bars3Icon
                className={`${navbarMenu ? "hidden" : "block"} h-6 w-6`}
                onClick={() => setNavbarMenu(!navbarMenu)}
              />
              <XMarkIcon
                onClick={() => setNavbarMenu(!navbarMenu)}
                className={`${navbarMenu ? "block" : "hidden"} h-6 w-6`}
              />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="block h-8 w-auto lg:hidden">
                Marvel Wiki
              </Link>
              <Link
                href="/"
                className={`hidden h-8 w-auto text-2xl lg:block ${gradientTextStyles} font-bold`}
              >
                Marvel Wiki
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                <NavLink isMobile={false} location="Characters" />
                <NavLink isMobile={false} location="Compare" />
                <NavLink isMobile={false} location="About" />
              </div>
            </div>
          </div>

          {ThemeTypesEnum.LIGHT === theme ? (
            <SunIcon
              type="button"
              className="h-6 w-6 cursor-pointer text-gray-400 rounded-full bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={handleChangeTheme}
            />
          ) : (
            <MoonIcon
              type="button"
              className="h-6 w-6 cursor-pointer text-gray-400 rounded-full bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={handleChangeTheme}
            />
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {navbarMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
            <NavLink isMobile={true} location="Characters" />
            <NavLink isMobile={true} location="Compare" />
            <NavLink isMobile={true} location="About" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
