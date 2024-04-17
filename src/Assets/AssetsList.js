// Projects
import ecommlogo from "../Assets/Project-Images/Ecommerce campaign-amico.svg";
import drivingSchoolLogo from "../Assets/Project-Images/driving school-bro.svg";
import portfolioLogo from "../Assets/Project-Images/Personal site-amico.svg";
import snapiaLogo from "../Assets/Project-Images/Building hashtag-amico.svg";
import weatherAppLogo from "../Assets/Project-Images/Weather-amico.svg";
import imdbLogo from "../Assets/Project-Images/Home cinema-amico.svg";
import loader from "../Assets/loader.svg";
import InvoiceGenerator from "../Assets/Project-Images/invoice.png";

// Animations
import aboutAnimation from "./Animations/AboutAnimation.json";
import contactAnimation from "./Animations/ContactAnimation.json";
import heroAnimation from "./Animations/HeroAnimation.json";
import projectAnimation from "./Animations/ProjectAnimation.json";
import skillsAnimation from "./Animations/SkillsAnimation.json";
import { Link } from "react-scroll";

// Skills

import JavaScript from "../Assets/Skills/javascript-svgrepo-com.svg";
import ReactJS from "../Assets/Skills/ReactJS.svg";
import Redis from "../Assets/Skills/Redis.svg";
import TailwindCSS from "../Assets/Skills/TailwindCSS1.svg";
import PostgreSQL from "../Assets/Skills/PostgreSQL.svg";
import NodeJS from "../Assets/Skills/NodeJS.svg";
import MongoDB from "../Assets/Skills/MongoDB.svg";
import Github from "../Assets/Skills/Github.svg";
import FastAPI from "../Assets/Skills/FastAPI.svg";
import ExpressJS from "../Assets/Skills/ExpressJS.svg";
import Docker from "../Assets/Skills/docker.svg";
import { FaHammer } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
import NextJS from "../Assets/Skills/nextjs-icon-svgrepo-com.svg";

// Main  Logo

export const MainLogo = (
  <Link
    to="/"
    onClick={() => window.scroll(0, 0)}
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    <span className="r font-bebas-neue text-mainTheme text-4xl font-bold ">
      &lt;
    </span>
    <span className="r font-bebas-neue text-mainTheme text-4xl font-bold ">
      <IoHammerOutline size={32} />
    </span>
    <span className="r font-bebas-neue text-mainTheme text-4xl font-bold ">
      /&gt;
    </span>
    Vi
    <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">
      वे
    </span>
    k
  </Link>
);

// All  Projects Images

export const ECmomLogo = ecommlogo;
export const DrivingSchoolLogo = drivingSchoolLogo;
export const PortfolioLogo = portfolioLogo;
export const SnapiaLogo = snapiaLogo;
export const WeatherAppLogo = weatherAppLogo;
export const IMDBLogo = imdbLogo;
export const Loader = loader;
export const InvoiceGeneratorImg = InvoiceGenerator;

// All Animations

export const AboutAnimation = aboutAnimation;
export const ContactAnimation = contactAnimation;
export const HeroAnimation = heroAnimation;
export const ProjectAnimation = projectAnimation;
export const SkillsAnimation = skillsAnimation;

// All Skills
export const JavaScriptLogo = JavaScript;
export const ReactJSLogo = ReactJS;
export const RedisLogo = Redis;
export const TailwindCSSLogo = TailwindCSS;
export const PostgreSQLLogo = PostgreSQL;
export const NodeJSLogo = NodeJS;
export const MongoDBLogo = MongoDB;
export const GithubLogo = Github;
export const FastAPILogo = FastAPI;
export const ExpressJSLogo = ExpressJS;
export const DockerLogo = Docker;
export const NextJSLogo = NextJS;
