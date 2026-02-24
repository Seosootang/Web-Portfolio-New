'use client';

import React from "react";
import PillNav from "./PillNav/PillNav";
import type { PillNavItem } from "./PillNav/PillNav";

const navItems: PillNavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <PillNav
        items={navItems}
        baseColor="#000000"
        pillColor="#f97316"
        pillTextColor="#ffffff"
        hoveredPillTextColor="#f97316"
      />
    </header>
  );
};

export default Header;
