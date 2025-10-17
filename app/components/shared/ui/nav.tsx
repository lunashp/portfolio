"use client";

import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config/config";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/about": { name: "About" },
};

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="lg:mb-8 mb-6 py-0 mt-4">
      <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-8 text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
        <div className="ml-[-0.60rem] flex gap-4 sm:gap-0">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                isActive(path)
                  ? "font-semibold text-gray-800 dark:text-gray-200"
                  : "font-normal text-gray-600 dark:text-gray-400",
                "sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              )}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
