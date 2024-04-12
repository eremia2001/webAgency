import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const closeMenu = () => setIsMenuOpen(false);

    // Event Listener hinzufügen
    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion, um den Event Listener zu entfernen
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-5 px-10 border-b-[1px] border-[#E8F3F5] ${"fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm  z-50"}`}
    >
      <div className="flex justify-start flex-1">
        {currentPath == "/" ? (
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <Image
              src="/Logo2.svg" // Stelle sicher, dass der Pfad zu deinem Logo korrekt ist
              width={200}
              height={200}
              className="w-12 md:w-14"
              alt="Logo"
            />
          </ScrollLink>
        ) : (
          <Link href="/">
            {" "}
            <Image
              src="/Logo2.svg" // Stelle sicher, dass der Pfad zu deinem Logo korrekt ist
              width={200}
              height={200}
              className="w-12 md:w-14"
              alt="Logo"
            />
          </Link>
        )}
      </div>

      <ul className="hidden lg:flex flex-row text-white gap-10">
        {["Angebot", "Service", "Prozess", "FAQ"].map((item, index) => {
          return currentPath == "/" ? (
            <li key={index} className="cursor-pointer">
              <ScrollLink to={item.toLowerCase()} smooth={true} duration={800}>
                {item}
              </ScrollLink>
            </li>
          ) : (
            <li key={index} className="cursor-pointer">
              <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden justify-end flex-1 lg:flex">
        <Button title="zur Anfrage" />
      </div>

      <div className="lg:hidden">
        <RxHamburgerMenu
          className="text-2xl text-white cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />

        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={sidebarVariants}
          className="fixed inset-0 flex h-screen z-40"
        >
          <motion.div
            className="bg-[#202324] w-3/4 shadow-lg p-5"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
          >
            <AiOutlineClose
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
            <ul className="flex flex-col items-center text-white">
              {["Angebot", "Service", "Prozess", "FAQ"].map((item, index) => (
                <li
                  key={index}
                  className="py-2 cursor-pointer text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentPath == "/" ? (
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={800}
                    >
                      {item}
                    </ScrollLink>
                  ) : (
                    <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
                  )}
                </li>
              ))}{" "}
            </ul>
          </motion.div>
          <div
            className="w-1/4 bg-black opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
