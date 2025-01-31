import About from "./about";

import graphicImage from "../assets/images/graphic.svg";
import bgImage from "../assets/images/world.png";
import interfaceicon from "../assets/icons/interface.svg";
import bulb from "../assets/icons/bulb.svg";
import share from "../assets/icons/share.svg";
import together from "../assets/icons/together.svg";
import construction from "../assets/icons/construction.svg";
import electrical from "../assets/icons/electrical.svg";
import financial from "../assets/icons/finance.svg";
const services = [
  { icon: interfaceicon, title: "Tech Services", description: "End-to-end software development, AI & data analytics, cloud computing, DevOps, and cybersecurity solutions." },
  { icon: construction, title: "Construction Services", description: "Smart and sustainable building solutions, including civil works, IoT-enabled infrastructure, and project management." },
  { icon: electrical, title: "Electrical Engineering", description: "Power distribution, renewable energy, industrial automation, and energy management for efficient and reliable operations." },
  { icon: financial, title: "Financial Services", description: "AI-driven financial planning, microfinance, blockchain security, and innovative investment solutions." },
];

const principles = [
  { icon: bulb, title: "Innovation", description: "Our tech hub fosters a culture of fearless innovation, where setbacks are stepping stones, and breakthroughs drive progress." },
  { icon: share, title: "Collaboration space", description: "We're a hub of dynamic collaboration, where diverse talents come together, valuing open communication and shared learning for collective intelligence." },
  { icon: together, title: "Integrity Nexus:", description: "Beyond tech, we revolve around an unwavering nexus of integrity, committed to building a technologically advanced future with moral consciousness." },
];

const AboutApp = () => {
  return <About services={services} principles={principles} graphic={graphicImage} bgImage={bgImage} />;
};

export default AboutApp;
