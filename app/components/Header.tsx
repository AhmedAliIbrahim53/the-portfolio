"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="md:container md:mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link href="/">{"<>"}AHMED ALI</Link>
          </div>
          <nav className={"hidden md:flex md:space-x-4"}>
            <ul className="flex space-x-4">
              <li>
                <Link href="/#about-me">About</Link>
              </li>
              <li>
                <Link href="/#skills">Skills</Link>
              </li>
              <li>
                <Link href="/#featured-projects">Featured Projects</Link>
              </li>
              <li>
                <Link href="/#contact-me">Contact Me</Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive Navigation Menu */}
        <nav className={`md:hidden mt-4 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
