"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { navLinks } from "../data/navbarLinks";
import { MdOutlineLanguage } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import LoginBtn from "./ui/LoginBtn";

const Navbar = () => {
  // State to control the hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-y border-amber-500 relative">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            {/* Left side: Logo */}

            <Link href="/" className="text-white">
              <Image
                src="/images/offer-logo1.png"
                alt="go offer"
                width={90}
                height={80}
              />
            </Link>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={closeMenu} // Close the menu when overlay is clicked
                ></div>
              </>
            )}

            {/* Center: Links */}
            <div
              className={`bg-white xl:bg-transparent h-screen xl:h-auto z-100 shadow-sm xl:shadow-none w-72 xl:w-auto top-0 absolute xl:static py-10 px-7 xl:p-0 ${
                isMenuOpen ? "left-0" : "-left-[100%]"
              }`}
            >
              <div className={`flex flex-col xl:flex-row gap-y-6 xl:gap-0`}>
                {navLinks.map((link) => {
                  return (
                    <div key={link.name} className="relative px-3">
                      <Link href={link.href}>
                        <span
                          className={`overflow-hidden max-w-fit inline-block text-transparent`}
                        >
                          {link.name}
                        </span>

                        <span
                          className={`font-extralight absolute bottom-0 hover:font-semibold left-0 text-stroke transition-smooth transform hover:scale-[101%] ${
                            link.active && "!font-semibold"
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="xl:hidden flex justify-end p-2 z-10 absolute right-3 top-2 text-black text-2xl cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          </div>

          <div className="flex xl:block items-center gap-3">
            {/* Right side: Buttons (hidden on small screens) */}
            <div className="flex space-x-4">
              <button className="flex items-center gap-1 cursor-pointer main-transition text-sm px-2.5 py-1 border border-amber-500 text-amber-500 rounded hover:bg-amber-500 hover:text-white">
                <MdOutlineLanguage size={18} /> <span>AR</span>
              </button>

              <LoginBtn />
            </div>

            {/* Hamburger Menu (Visible on small screens) */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl"
              >
                <RxHamburgerMenu className="cursor-pointer text-amber-500" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu (toggle visibility based on isMenuOpen state) */}
    </nav>
  );
};

export default Navbar;
