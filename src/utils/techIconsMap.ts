import {
  faReact,
  faJs,
  faNodeJs,
  faAws,
  faGitAlt,
  faPython,
  faGithub,
  faDocker,
  faBootstrap,
  faSass,
  faNpm,
  faYarn,
  faStripe,
  faLinux,
  faDigitalOcean,
} from "@fortawesome/free-brands-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Import custom SVG logos
import TypeScriptLogo from "../assets/logos/typescript.svg";
import ExpressLogo from "../assets/logos/express.svg";
import NextJSLogo from "../assets/logos/nextjs.svg";
import TailwindLogo from "../assets/logos/tailwind.svg";
import RailwayIcon from "../assets/logos/railway.svg";
import MantineIcon from "../assets/logos/mantine.svg";
import ViteIcon from "../assets/logos/vite.svg";
import D3Icon from "../assets/logos/d3.svg";
import HeadlessUIIcon from "../assets/logos/headlessui.svg";
import ReactQueryIcon from "../assets/logos/react-query.svg";
import NetlifyIcon from "../assets/logos/netlify.svg";
import MongoDbIcon from "../assets/logos/mongodb.svg";
import CloudinaryIcon from "../assets/logos/cloudinary.svg";
import AzureIcon from "../assets/logos/Azure.svg";
import CSharpIcon from "../assets/logos/csharp.svg";
import SQLIcon from "../assets/logos/sql.svg";
import JavaIcon from "../assets/logos/java.svg";
import CssIcon from "../assets/logos/css.svg";
import HtmlIcon from "../assets/logos/html.svg";

// Define the type for tech icon info
export interface TechIconInfo {
  icon: IconDefinition | string;
  color: string;
  isSVG?: boolean;
}

// A map of technology names to their icons and colors
export const techIconMap: Record<string, TechIconInfo> = {
  // Font Awesome icons
  React: { icon: faReact, color: "text-blue-400" },
  JavaScript: { icon: faJs, color: "text-yellow-400" },
  "Node.js": { icon: faNodeJs, color: "text-green-600" },
  AWS: { icon: faAws, color: "text-yellow-600" },
  Git: { icon: faGitAlt, color: "text-orange-600" },
  Python: { icon: faPython, color: "text-blue-300" },
  GitHub: { icon: faGithub, color: "text-gray-600" },
  Docker: { icon: faDocker, color: "text-blue-600" },
  Bootstrap: { icon: faBootstrap, color: "text-purple-500" },
  Sass: { icon: faSass, color: "text-pink-500" },
  npm: { icon: faNpm, color: "text-red-500" },
  Yarn: { icon: faYarn, color: "text-blue-400" },
  Stripe: { icon: faStripe, color: "text-blue-500" },
  Linux: { icon: faLinux, color: "text-yellow-400" },
  DigitalOcean: { icon: faDigitalOcean, color: "text-blue-300" },
  Recharts: { icon: faChartColumn, color: "text-blue-400" },

  // Custom SVG icons
  Azure: { icon: AzureIcon, color: "text-blue-500", isSVG: true },
  Express: { icon: ExpressLogo, color: "text-gray-600", isSVG: true },
  TypeScript: { icon: TypeScriptLogo, color: "text-blue-600", isSVG: true },
  "Next.js": { icon: NextJSLogo, color: "text-gray-800", isSVG: true },
  Tailwind: { icon: TailwindLogo, color: "text-cyan-500", isSVG: true },
  MongoDB: { icon: MongoDbIcon, color: "text-current", isSVG: true },
  Railway: { icon: RailwayIcon, color: "text-current", isSVG: true },
  "Mantine UI": { icon: MantineIcon, color: "text-cyan-500", isSVG: true },
  Vite: { icon: ViteIcon, color: "text-current", isSVG: true },
  D3: { icon: D3Icon, color: "text-current", isSVG: true },
  HeadlessUI: { icon: HeadlessUIIcon, color: "text-cyan-400", isSVG: true },
  "React-Query": { icon: ReactQueryIcon, color: "text-current", isSVG: true },
  Netlify: { icon: NetlifyIcon, color: "text-current", isSVG: true },
  Mongoose: { icon: MongoDbIcon, color: "text-current", isSVG: true },
  Cloudinary: { icon: CloudinaryIcon, color: "text-current", isSVG: true },
  "C#": { icon: CSharpIcon, color: "text-current", isSVG: true },
  SQL: { icon: SQLIcon, color: "text-current", isSVG: true },
  Java: { icon: JavaIcon, color: "text-current", isSVG: true },
  CSS: { icon: CssIcon, color: "text-current", isSVG: true },
  HTML: { icon: HtmlIcon, color: "text-current", isSVG: true },
};

// Helper function to get icon info for a tech name
export const getTechIconInfo = (name: string): TechIconInfo => {
  return techIconMap[name] || { icon: faReact, color: "text-gray-400" };
};

// Helper function to extract the color without the text- prefix
export const getColorWithoutPrefix = (colorClass: string): string => {
  return colorClass.replace("text-", "");
};
