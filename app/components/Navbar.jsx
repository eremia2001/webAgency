import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Event Listener hinzufügen
    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion, um den Event Listener zu entfernen
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-5 px-10 border-b-[1px] border-[#E8F3F5] ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm  z-50"
          : "relative"
      }`}
    >
      <div className="flex justify-start flex-1">
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
        <RxHamburgerMenu className="text-2xl text-white" />
      </div>
    </header>
  );
};

export default Navbar;
