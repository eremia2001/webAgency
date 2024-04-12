"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Kontakt = () => {
  return (
    <div className="bg-[#202324] min-h-screen flex flex-col text-white">
      <Navbar />
      <ToastContainer />

      <div className="flex flex-col mt-32 mx-auto max-w-[1080px] px-5 pb-24">
        <div className="flex flex-col justify-center items-center gap-5">
          <Title
            title="Bereit für den nächsten Schritt ?"
            subtitle="Ihre Reise zur digitalen Exzellenz beginnt hier ."
          />
          <p className="text-center md:w-[75%] text-sm sm:text-base ">
            Sie haben wichtige Entscheidungen zu treffen, und wir sind hier, um
            Ihnen zu helfen, jede davon sicher und informiert zu treffen. Nutzen
            Sie die Gelegenheit für eine kostenlose, unverbindliche Beratung, um
            herauszufinden, wie wir Ihren digitalen Fußabdruck optimieren
            können.
          </p>
        </div>

        <div className="gradient-border mt-32 flex flex-col items-center text-center p-10  md:px-32">
          <h1 className="font-bold text-2xl">
            Vereinbaren Sie jetzt Ihre kostenlose Beratung
          </h1>
          <p className="mt-5">
            Füllen Sie einfach das untenstehende Formular aus, und unser Team
            wird sich in Kürze mit Ihnen in Verbindung setzen, um einen Termin
            zu vereinbaren, der in Ihren Zeitplan passt
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
