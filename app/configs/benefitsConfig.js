// benefitsConfig.js
import {
  IoAnalyticsSharp,
  IoSpeedometer,
  IoPhonePortrait,
  IoShieldCheckmark,
  IoBusiness,
  IoGlobeOutline,
  IoHappy,
} from "react-icons/io5";

const benefits = [
  {
    title: "SEO – Sichtbarkeit ist kein Zufall",
    description:
      "Mit gezielten On-Page-SEO-Maßnahmen verbessern wir Ihre Position in Suchmaschinen, damit Sie gefunden werden.",
    icon: <IoGlobeOutline />,
  },
  {
    title: "Datenanalyse & Tracking",
    description:
      "Umfassende Einblicke in das Verhalten Ihrer Nutzer, um kontinuierlich zu optimieren und Ihre Marketingstrategie anzupassen.",
    icon: <IoAnalyticsSharp />,
  },
  {
    title: "Responsives Design",
    description:
      "Ihre Website perfekt dargestellt auf jedem Gerät – denn die mobile Welt wartet nicht.",
    icon: <IoPhonePortrait />,
  },
  {
    title: "Schnelles & sicheres Hosting",
    description:
      "Mit unserem Hosting in Deutschland garantieren wir Schnelligkeit und Sicherheit für Ihre Online-Präsenz.",
    icon: <IoShieldCheckmark />,
  },
  //   {
  //     title: "Von Anfang bis Ende",
  //     description:
  //       "Wir begleiten Sie auf jeder Etappe – von der ersten Idee bis zur erfolgreichen Umsetzung und darüber hinaus.",
  //     icon: <IoBusiness />,
  //   },
  {
    title: "Geschwindigkeit zählt",
    description:
      "Wir optimieren Ihre Website für schnelle Ladezeiten, denn Geschwindigkeit ist im digitalen Zeitalter entscheidend.",
    icon: <IoSpeedometer />,
  },
  {
    title: "Full-Service-Betreuung",
    description:
      "Ob Erstellung, Pflege oder Beratung – wir bieten einen umfassenden Service, der keine Wünsche offenlässt.",
    icon: <IoHappy />,
  },
];

export default benefits;
