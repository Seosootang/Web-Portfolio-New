import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
