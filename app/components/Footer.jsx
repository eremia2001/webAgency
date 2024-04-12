import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-black   ">
      <div className="flex flex-col gap-5  lg:flex-row  items-center  justify-evenly px-5 py-16  overflow-hidden text-white max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center  lg:items-start mx-auto">
          <div className="w-32 mx-auto">
            <Image
              src="./Logo2.svg"
              width={100}
              height={100}
              className="w-full"
              alt="Picture of the author"
            />
          </div>
          <div className="hidden ">
            <h1 className="text-xl font-semibold mt-5 lg:mt-10 ">
              Noch nicht überzeugt ?{" "}
            </h1>
            <a href="/">
              <button className="bg-primary rounded-md px-10 py-2 mt-2 ">
                Jetzt beraten lassen
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 mx-auto text-center">
          <h1 className="text-xl mt-6  font-semibold  ">Nützliche Links</h1>
          <ul className="flex flex-col gap-2">
            {["Angebot", "Service", "Prozess", "FAQ", "Kontakt"].map(
              (item, index) => {
                return currentPath == "/" ? (
                  <li key={index} className="cursor-pointer">
                    {item == "Kontakt" ? (
                      <Link href="/Kontakt"> {item}</Link>
                    ) : (
                      <ScrollLink
                        to={item.toLowerCase()}
                        smooth={true}
                        duration={800}
                      >
                        {item}
                      </ScrollLink>
                    )}
                  </li>
                ) : (
                  <li key={index} className="cursor-pointer">
                    <Link
                      href={`/#${
                        item == "Kontakt" ? "contact" : item.toLowerCase()
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-5 mx-auto text-center">
          <ul className="flex flex-col gap-2">
            <h1 className="text-xl mt-6  font-semibold  ">Rechtliches</h1>

            <li className="cursor-pointer">
              <Link href="/Impressum">Impressum</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/Datenschutz">Datenschutzrichtlinie</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-10 mx-auto text-center mt-10">
          {/* <Image
          src="/website.svg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="lg:translate-y-10 hidden lg:block"
        /> */}
          <div className="flex flex-col gap-5 items-center md:items-start">
            <h1 className="font-semibold text-xl xl:text-2xl">
              Wir sind für sie da
            </h1>
            <div className="flex flex-col h-full justify-evenly gap-5 ">
              <p className="font-semibold">
                Email : <span className="font-light">moouv@web.de</span>
              </p>
              <p className="font-semibold">
                Telefon : <span className="font-light">0176/2893 1829</span>
              </p>
              {/* <div className="flex flex-row items-center gap-2 mx-auto">
                <FaLinkedin className="text-3xl" width={2000} />

                <p>moouv</p>
              </div>
              <div className="flex flex-row items-center gap-2 mx-auto translate-x-2 ">
                <FaInstagram className="text-white text-3xl" width={200} />
                <p>@moouv</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/website.svg"
        width={200}
        height={200}
        alt="Picture of the author"
        className="translate-y-10  mx-auto lg:hidden "
      /> */}
    </div>
  );
};

export default Footer;
