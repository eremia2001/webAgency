// KontaktForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "../hooks/useToast";
import InputField from "../components/InputField";
import TerminPicker from "../components/TerminPicker";
import { IoCheckmarkSharp } from "react-icons/io5";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    termin: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const { name, email, message, number, termin } = formFields;
  const [submitStatus, setSubmitStatus] = useState(null);
  const { showToast } = useToast();
  const serviceId = process.env.SERVICEID || "service_lehow4p";
  const templateID = process.env.TEMPLATEID || "template_9okqqrf";
  const userID = process.env.USERID || "1YLlzwIiVK5K-aoaF";

  const validateForm = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name ist erforderlich.";
    if (!email) tempErrors.email = "E-Mail ist erforderlich.";
    else if (!/\S+@\S+\.\S+/.test(email))
      tempErrors.email = "Ungültige E-Mail-Adresse.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      // Erlaube nur numerische Eingaben und '/', aber ignoriere alles andere
      const sanitizedValue = value.replace(/[^0-9/]/g, "");
      setFormFields({
        ...formFields,
        [name]: sanitizedValue,
      });
    } else {
      setFormFields({
        ...formFields,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }
    if (!isAgreed) {
      setSubmitStatus("error");
      showToast(
        "Bitte stimmen Sie den Datenschutzbestimmungen zu, um fortzufahren.",
        "error"
      );

      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateID,
        { name, email, message, number, termin },
        userID
      );
      console.log("SUCCESS!", response);
      showToast("Email wurde erfolgreich gesendet", "success");
      setFormFields({
        name: "",
        email: "",
        message: "",
        number: "",
        termin: "",
      });
      setIsAgreed(false);
    } catch (error) {
      console.error("FAILED...", error);
      showToast("Es gab ein Fehler beim Versenden der Email", "error");
    }
  };

  return (
    <div className="p-4 w-full h-full flex flex-col justify-center  max-w-[1080px] text-white">
      <form onSubmit={handleSubmit} className="flex flex-col   gap-5 ">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full mx-auto">
          <InputField
            valueName={formFields.name}
            onChange={handleInputChange}
            errorName={errors.name}
            type="name"
            name="name"
            label="Name"
            placeholder="Max Mustermann"
          />
          <InputField
            valueName={formFields.email}
            onChange={handleInputChange}
            errorName={errors.email}
            type="email"
            name="email"
            label="Email"
            placeholder="maxmustermann@mail.com"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10  mx-auto w-full ">
          <InputField
            valueName={formFields.number}
            onChange={handleInputChange}
            errorName={errors.number}
            type="tel"
            name="number"
            label="Telefonnumer ( optional ) "
            placeholder="0123/456 7890"
          />

          <TerminPicker
            label="Bevorzugte Rückrufzeit "
            onChange={handleInputChange}
            value={formFields.termin}
            name="termin"
          />
        </div>

        <div className="flex flex-col justify-center gap-2  ">
          <p className="font-light text-left">Nachricht</p>

          <textarea
            className="py-2 px-4 rounded-xl bg-[#373737] placeholder-[#777777]   w-full outline-none shadow-lg duration-200"
            placeholder="Ihre Nachricht"
            rows="4"
            value={message}
            name="message"
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs text-left">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-3 mb-5">
          <div
            className="w-5 relative h-5 cursor-pointer bg-[#373737] rounded-sm placeholder-[#777777]   outline-none shadow-lg  duration-200"
            onClick={() => setIsAgreed(!isAgreed)}
          >
            <button
              id="agreement"
              type="button"
              checked={isAgreed}
              className="w-5 h-5 "
            ></button>
            {isAgreed ? (
              <IoCheckmarkSharp
                width={20}
                className="text-xl absolute bottom-0.5 text-primary "
              />
            ) : (
              ""
            )}
          </div>

          <label
            htmlFor="agreement"
            className="text-sm text-left ml-2 text-white"
          >
            Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur
            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die
            Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage
            gelöscht.
          </label>
        </div>
        <button
          type="submit"
          className="bg-secondary hover:scale-105  duration-200 text-white font-bold py-2 px-4 rounded-2xl shadow-lg"
        >
          Senden
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
