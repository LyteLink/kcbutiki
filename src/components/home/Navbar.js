/* eslint-disable react/no-unescaped-entities */
"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import BackToTopButton from "./BackToTopButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isClubsDropdownOpen, setIsClubsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClubsDropdown = () => {
    setIsClubsDropdownOpen(!isClubsDropdownOpen);
  };

  const handleAcademicsDropdown = () => {
    setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-primary navbar fixed w-full top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 !text-base">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className={`block lg:hidden h-14 mt-16 w-auto rounded-lg shadow-lg bg-white p-2 ${
                isMenuOpen && "!mt-0"
              }`}
              src="/images/logo.jpg"
              alt="Logo"
            />
            <img
              className="hidden lg:block h-28 !mt-20 w-auto rounded shadow-lg bg-white p-2"
              src="/images/logo.jpg"
              alt="Logo"
            />
          </div>

          {/* Hamburger Menu */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-secondary focus:outline-none focus:bg-secondary focus:text-white"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                About Us
              </Link>
              <Link
                href="/administration"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                Administration
              </Link>
              <div className="relative inline-block link">
                <button className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase flex-align-center gap-x-2">
                  Academics
                  <FiChevronDown />
                </button>
                <div className="dropdown absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <div className="py-1">
                    <Link
                      href="/admissions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Admissions
                    </Link>
                    <Link
                      href="/subjects"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Subject Departments
                    </Link>
                    <Link
                      href="/a-level"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      A'Level
                    </Link>
                    <Link
                      href="/o-level"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      O'Level
                    </Link>
                    <Link
                      href="/uneb"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      UNEB
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/family"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                Butiki Familiy
              </Link>
              <div className="relative inline-block link">
                <button className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase flex-align-center gap-x-2">
                  Clubs & Societies
                  <FiChevronDown />
                </button>
                <div className="dropdown absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <div className="py-1">
                    <Link
                      href="/sports"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sports Activities
                    </Link>
                    <Link
                      href="/clubs/123"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Math Club
                    </Link>
                    <Link
                      href="/clubs/123"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Science Club
                    </Link>
                    <Link
                      href="/clubs/123"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Food & Nutrition Club
                    </Link>
                    <Link
                      href="/clubs/123"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Chemistry Club
                    </Link>
                    <Link
                      href="/clubs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All clubs
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/gallery"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                gallery
              </Link>
              <Link
                href="/contact"
                className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Hamburger Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-slate-100 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium w-fit"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-100 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium w-fit"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            href="/administration"
            className="text-slate-100 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium w-fit"
            onClick={closeMenu}
          >
            Administration
          </Link>
          <div className="relative">
            <button
              className="text-slate-100 hover:bg-secondary hover:text-white block px-3 py-2 mb-3 rounded-md text-base font-medium flex-align-center gap-x-2"
              onClick={handleAcademicsDropdown}
            >
              Academics
              <FiChevronDown />
            </button>
            <div
              className={`w-fit p-3 ml-6 bg-secondary rounded-lg hidden my-2 ${
                isAcademicsDropdownOpen && "!block"
              }`}
            >
              <Link
                href="/admissions"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Admissions
              </Link>
              <Link
                href="/subject"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Subject Departments
              </Link>
              <Link
                href="/a-level"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                A'Level
              </Link>
              <Link
                href="/o-level"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                O'Level
              </Link>
              <Link
                href="/uneb"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                UNEB
              </Link>
            </div>
          </div>
          <Link
            href="/family"
            className="text-slate-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
            onClick={closeMenu}
          >
            Butiki Familiy
          </Link>
          <div className="relative">
            <button
              className="text-slate-100 hover:bg-secondary hover:text-white block px-3 py-2 mt-3 rounded-md text-base font-medium flex-align-center gap-x-2"
              onClick={handleClubsDropdown}
            >
              Clubs & Societies
              <FiChevronDown />
            </button>
            <div
              className={`w-fit p-3 ml-6 bg-secondary rounded-lg hidden my-2 ${
                isClubsDropdownOpen && "!block"
              }`}
            >
              <Link
                href="/sports"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Sports Activities
              </Link>
              <Link
                href="/clubs/123"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Math Club
              </Link>
              <Link
                href="/clubs/123"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Science Club
              </Link>
              <Link
                href="/clubs/123"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Chemistry Club
              </Link>
              <Link
                href="/clubs/123"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                Food & Nutrition Club
              </Link>
              <Link
                href="/clubs"
                className="block px-4 py-2 text-sm hover:bg-[rgb(47,86,45)] w-fit text-slate-200"
                onClick={closeMenu}
              >
                All clubs
              </Link>
            </div>
          </div>
          <Link
            href="/gallery"
            className="text-slate-100 hover:bg-secondary block w-fit my-1 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
            onClick={closeMenu}
          >
            gallery
          </Link>
          <Link
            href="/contact"
            className="text-slate-100 hover:bg-secondary block w-fit my-1 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
            onClick={closeMenu}
          >
            contact
          </Link>
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </nav>
  );
};

export default Navbar;
