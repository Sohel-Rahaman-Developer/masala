/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialLink from "./SocialLink";
import CartIcon from "./CartIcon";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false); // Close the submenu when the menu is closed
  };

  const handleSubMenuToggle = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the overlay
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  useEffect(() => {
    // Close the menu when the route changes
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    };
    // Attach an event listener to listen for route changes
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-[#fff] shadow-lg">
      <div className="max-w-[1800px] mx-auto">
        <nav className="relative px-2 py-1">
          <div className="container flex items-center justify-between mx-auto">
            <div className="relative overflow-hidden cursor-pointer group">
              <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
              <Link href="/">
                <img
                  src="/images/milmapure.png"
                  className="max-h-[40px] lg:max-h-[60px] p-1"
                  alt="Tailwindcss Navigation"
                />
                </Link>
              </span>
              <span className="absolute left-0 translate-y-[130%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
              <Link href="/">

                <img
                  src="/images/milmapure.png"
                  className="max-h-[40px] lg:max-h-[60px] p-1"
                  alt="Tailwindcss Navigation"
                />
                </Link>

              </span>
            </div>

            <ul className="hidden space-x-6 md:flex">
              <li>
                <Link href="/">
                  <div
                    className={`${
                      pathname === "/" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden cursor-pointer group">
                      <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
                        Home
                      </span>
                      <span className="absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
                        Home
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="relative flex group">
                <Link
                  href="/products"
                  className={`${
                    pathname.startsWith("/products")
                      ? "border-b-2 border-red-500"
                      : ""
                  }`}
                >
                  <div className="relative overflow-hidden cursor-pointer group">
                    <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
                      <span>
                        Products
                        <i className="pt-3 fa-solid fa-chevron-down fa-2xs ms-1" />
                      </span>
                    </span>
                    <span className="absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
                      <span>
                        Products
                        <i className="pt-3 fa-solid fa-chevron-down fa-2xs ms-1" />
                      </span>
                    </span>
                  </div>
                </Link>
                {/* Submenu starts */}
                <ul className="absolute p-3 transition duration-150 ease-in-out origin-top transform scale-0 bg-white shadow-lg w-52 top-6 group-hover:scale-100">
                  <li className="text-sm hover:bg-slate-200">
                    <Link href="/products/basic-ground-spices">
                      <div className="px-2 py-2">Basic Ground Spices</div>
                    </Link>
                  </li>
                  <li className="text-sm hover:bg-slate-200">
                    <Link href="/products/blended-spices">
                      <div className="px-2 py-2">Blended Spices</div>
                    </Link>
                  </li>
                  <li className="text-sm hover:bg-slate-200">
                    <Link href="/products/combopack">
                      <div className="px-2 py-2">Combo Pack</div>
                    </Link>
                  </li>
                </ul>
                {/* Submenu ends */}
              </li>

              <li>
                <Link href="/gallery">
                  <div
                    className={`${
                      pathname === "/gallery" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden cursor-pointer group">
                      <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
                        <span>Gallery</span>
                      </span>
                      <span className="absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
                        <span>Gallery</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div
                    className={`${
                      pathname === "/about" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden cursor-pointer group">
                      <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
                        <span>About Us</span>
                      </span>
                      <span className="absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
                        <span>About Us</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <div
                    className={`${
                      pathname === "/contact-us"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                  >
                    <div className="relative overflow-hidden cursor-pointer group">
                      <span className="inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[-120%]">
                        <span>Contact Us</span>
                      </span>
                      <span className="absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0] group-hover:rotate-0">
                        <span>Contact Us</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="flex justify-end px-2 grow md:grow-0">
              {/* <SocialLink /> */}
              <div className="mt-2 me-4 md:m-0">
              <CartIcon quantity={1} />
              </div>
            </div>

            {/* Mobile menu icon */}
            <button onClick={handleMenuToggle} className="md:hidden w-[20px]">
              <i
                className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}
              />
            </button>
          </div>
          {/* Mobile menu */}
          <div
            className={`fixed inset-0 transform transition-transform duration-700 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } bg-black bg-opacity-50 z-20`}
            onClick={handleCloseMenu}
          >
            <div
              className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-1000 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } z-30`}
              onClick={(e) => e.stopPropagation()} // Prevent click on menu from closing it
            >
              <div className="flex items-center justify-between p-4">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={handleCloseMenu}>
                  <i className="fa-solid fa-times" />
                </button>
              </div>
              <ul className="pt-4 m-0">
                <li className="pl-4 border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <Link
                    href="/"
                    className={`block pl-7 ${
                      pathname === "/" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="pl-4 border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <Link
                    href="/gallery"
                    className={`block pl-7 ${
                      pathname === "/gallery" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <div
                    className="flex items-center justify-between block pl-11"
                    onClick={handleSubMenuToggle}
                  >
                    Products{" "}
                    <i className="pt-0 pe-3 fa-solid fa-chevron-down fa-2xs" />
                  </div>
                  {/* Submenu starts */}
                  <ul
                    className={`bg-white text-gray-800 w-full ${
                      isSubMenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="text-sm font-normal leading-8 hover:bg-slate-200">
                      <Link
                        href="/products/basic-ground-spices"
                        className="block pl-16"
                      >
                        Basic Ground Spices
                      </Link>
                    </li>
                    <li className="text-sm font-normal leading-8 hover:bg-slate-200">
                      <Link
                        href="/products/blended-spices"
                        className="block pl-16"
                      >
                        Blended Spices
                      </Link>
                    </li>
                    <li className="text-sm font-normal leading-8 hover:bg-slate-200">
                      <Link
                        href="/products/whole-spices"
                        className="block pl-16"
                      >
                        Whole Spices
                      </Link>
                    </li>
                  </ul>
                  {/* Submenu ends */}
                </li>
                <li className="pl-4 border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <Link
                    href="/about"
                    className={`block pl-7 ${
                      pathname === "/about" ? "border-b-2 border-red-500" : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="pl-4 border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <Link
                    href="/contact-us"
                    className={`block pl-7 ${
                      pathname === "/contact-us"
                        ? "border-b-2 border-red-500"
                        : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
