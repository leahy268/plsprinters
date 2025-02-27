"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavActive from "./nav-active";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useLayout } from "../layout/layout-context";

const activeItemClasses = {
  blue: "border-b-4 border-white text-white font-bold dark:border-blue-400 shadow-blue-500/80",
  teal: "border-b-4 border-white text-white font-bold dark:border-teal-400 shadow-teal-500/80",
  green: "border-b-4 border-white text-white font-bold dark:border-green-400 shadow-green-500/80",
  red: "border-b-4 border-white text-white font-bold dark:border-red-400 shadow-red-500/80",
  pink: "border-b-4 border-white text-white font-bold dark:border-pink-400 shadow-pink-500/80",
  purple: "border-b-4 border-white text-white font-bold dark:border-purple-400 shadow-purple-500/80",
  orange: "border-b-4 border-white text-white font-bold dark:border-orange-400 shadow-orange-500/80",
  yellow: "border-b-4 border-white text-white font-bold dark:border-yellow-400 shadow-yellow-500/80",
};



const activeBackgroundClasses = {
  blue: "text-blue-500",
  teal: "text-teal-500",
  green: "text-green-500",
  red: "text-red-500",
  pink: "text-pink-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
};

export default function NavItems({ navs }: { navs: any }) {
  const currentPath = usePathname();
  const { theme } = useLayout();
  return (
    <ul className="flex gap-6 sm:gap-8 lg:gap-10 tracking-[.002em] -mx-4">
      {navs.map((item) => {
        return (
          <li
            key={item.href}
            className={
              currentPath === `/${item.href}`
                ? activeItemClasses[theme.color]
                : ""
            }
          >
            <Link
              data-tina-field={tinaField(item, "label")}
              href={`/${item.href}`}
              className={`
                relative select-none text-base inline-block tracking-wide transition-all 
                duration-200 ease-out py-2 px-2 transform 
                hover:scale-105 hover:text-white hover:border-b-4 hover:border-red-300
              `}
            >
              {item.label}
              {currentPath === `/${item.href}` && (
                <NavActive
                  backgroundColor={activeBackgroundClasses[theme.color]}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
