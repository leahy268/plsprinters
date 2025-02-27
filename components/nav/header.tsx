"use client";

import React from "react";
import Link from "next/link";
import { useLayout } from "../layout/layout-context";
import { tinaField } from "tinacms/dist/react";
// import { Button } from "@/components/ui/button";
// import { Phone } from "lucide-react"; // Assuming you use Lucide Icons
import NavItems from "./nav-items";

export default function Header() {
  const { globalSettings, theme } = useLayout();
  const header = globalSettings.header;

  return (
    <header className="bg-red-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left-Aligned Logo */}
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
          <span data-tina-field={tinaField(header, "name")}>{header.name}</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <NavItems navs={header.nav} />
          </ul>
        </nav>

        {/* Call Now Button (Right-Aligned) */}
        {/* <Button className="bg-white hover:bg-gray-100 text-red-600 flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </Button> */}
      </div>
    </header>
  );
}