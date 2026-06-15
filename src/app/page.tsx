import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTerminal } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { SiNextdotjs, SiReact, SiJavascript, SiNodedotjs, SiExpress, SiTypescript, SiMongodb, SiTailwindcss, SiFramer, SiVercel, SiSocketdotio, SiPostman, SiHtml5, SiCss, SiAnthropic, SiOpenai, SiFigma, SiTldraw } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import ContributionGraph from "../components/ContributionGraph";
import GithubGraph from "../components/GithubGraph";
import ContactSection from "../components/ContactSection";

const mainStack = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
];

const wacheitStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "WebSockets", icon: SiSocketdotio, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const klyneStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const wacheitQuestStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const mySetup = [
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Cursor", src: "data:image/svg+xml;utf8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22Ebene_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20viewBox%3D%220%200%20466.73%20532.09%22%3E%0A%20%20%3C!--%20Generator%3A%20Adobe%20Illustrator%2029.6.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%202.1.1%20Build%209)%20%20--%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20.st0%20%7B%0A%20%20%20%20%20%20%20%20fill%3A%20%23edecec%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fstyle%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M457.43%2C125.94L244.42%2C2.96c-6.84-3.95-15.28-3.95-22.12%2C0L9.3%2C125.94c-5.75%2C3.32-9.3%2C9.46-9.3%2C16.11v247.99c0%2C6.65%2C3.55%2C12.79%2C9.3%2C16.11l213.01%2C122.98c6.84%2C3.95%2C15.28%2C3.95%2C22.12%2C0l213.01-122.98c5.75-3.32%2C9.3-9.46%2C9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05%2C151.99l-205.63%2C356.16c-1.39%2C2.4-5.06%2C1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87%2C145.67c-2.4-1.39-1.42-5.06%2C1.36-5.06h411.26c5.84%2C0%2C9.49%2C6.33%2C6.57%2C11.39h-.01Z%22%2F%3E%0A%3C%2Fsvg%3E", color: "#ffffff", invertInLightMode: true },
  { name: "Antigravity", src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2215%22%20viewBox%3D%220%200%2016%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cmask%20id%3D%22mask0_111_52%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%2215%22%3E%0A%3Cpath%20d%3D%22M14.0777%2013.984C14.945%2014.6345%2016.2458%2014.2008%2015.0533%2013.0084C11.476%209.53949%2012.2349%200%207.79033%200C3.34579%200%204.10461%209.53949%200.527295%2013.0084C-0.773543%2014.3092%200.635692%2014.6345%201.50293%2013.984C4.86344%2011.7076%204.64663%207.69664%207.79033%207.69664C10.934%207.69664%2010.7172%2011.7076%2014.0777%2013.984Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fmask%3E%0A%3Cg%20mask%3D%22url(%23mask0_111_52)%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-0.658907%20-3.2306C-0.922679%20-0.906781%201.07986%201.22861%203.81388%201.53894C6.54791%201.84927%208.97811%200.217009%209.24188%20-2.10681C9.50565%20-4.43063%207.50312%20-6.56602%204.76909%20-6.87635C2.03506%20-7.18667%20-0.395135%20-5.55442%20-0.658907%20-3.2306Z%22%20fill%3D%22%23FFE432%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter1_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M9.88233%204.36642C10.5673%207.31568%2013.566%209.13902%2016.5801%208.43896C19.5942%207.73891%2021.4823%204.78056%2020.7973%201.83131C20.1123%20-1.11795%2017.1136%20-2.94128%2014.0995%20-2.24123C11.0854%20-1.54118%209.19733%201.41717%209.88233%204.36642Z%22%20fill%3D%22%23FC413D%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter2_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-8.05291%206.34512C-7.18736%209.38883%20-3.28925%2010.9473%200.653774%209.82598C4.5968%208.7047%207.09158%205.32829%206.22603%202.28458C5.36048%20-0.759142%201.46236%20-2.31758%20-2.48066%20-1.19629C-6.42368%20-0.0750048%20-8.91846%203.3014%20-8.05291%206.34512Z%22%20fill%3D%22%2300B95C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter3_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-8.05291%206.34512C-7.18736%209.38883%20-3.28925%2010.9473%200.653774%209.82598C4.5968%208.7047%207.09158%205.32829%206.22603%202.28458C5.36048%20-0.759142%201.46236%20-2.31758%20-2.48066%20-1.19629C-6.42368%20-0.0750048%20-8.91846%203.3014%20-8.05291%206.34512Z%22%20fill%3D%22%2300B95C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter4_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-4.92402%208.86746C-2.75421%2011.0837%200.982691%2010.9438%203.42257%208.55507C5.86246%206.1663%206.08139%202.43321%203.91158%200.216963C1.74177%20-1.99928%20-1.99513%20-1.85942%20-4.43501%200.529349C-6.87489%202.91812%20-7.09383%206.65122%20-4.92402%208.86746Z%22%20fill%3D%22%2300B95C%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter5_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M6.42819%2017.2263C7.10197%2020.1273%209.91278%2021.953%2012.7063%2021.3042C15.4998%2020.6553%2017.2182%2017.7777%2016.5444%2014.8767C15.8707%2011.9757%2013.0599%2010.15%2010.2663%2010.7988C7.47281%2011.4477%205.75441%2014.3253%206.42819%2017.2263Z%22%20fill%3D%22%233186FF%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter6_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M1.66508%20-5.94539C0.254213%20-2.80254%201.7978%200.951609%205.11277%202.43973C8.42774%203.92785%2012.2588%202.58642%2013.6696%20-0.556431C15.0805%20-3.69928%2013.5369%20-7.45343%2010.222%20-8.94155C6.90699%20-10.4297%203.07594%20-9.08824%201.66508%20-5.94539Z%22%20fill%3D%22%23FBBC04%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter7_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-2.11428%2024.3903C-5.52984%2023.0496%200.307266%2012.0177%201.75874%208.32038C3.21024%204.62304%207.15576%202.71272%2010.5713%204.05357C13.9869%205.39442%2018.0354%2012.7796%2016.5838%2016.477C15.1323%2020.1743%201.30129%2025.7311%20-2.11428%2024.3903Z%22%20fill%3D%22%233186FF%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter8_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M18.5814%2010.6598C17.6669%2011.727%2015.2806%2011.1828%2013.2514%209.44417C11.2222%207.70556%2010.3185%205.43097%2011.2329%204.3637C12.1473%203.29646%2014.5336%203.84069%2016.5628%205.57928C18.592%207.31789%2019.4958%209.59249%2018.5814%2010.6598Z%22%20fill%3D%22%23749BFF%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter9_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M11.7552%205.22715C15.5162%207.77124%2019.8471%207.93838%2021.4286%205.60045C23.0101%203.26253%2021.2433%20-0.695128%2017.4823%20-3.23922C13.7213%20-5.78331%209.39044%20-5.95044%207.80896%20-3.61252C6.22747%20-1.27459%207.99428%202.68306%2011.7552%205.22715Z%22%20fill%3D%22%23FC413D%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter10_f_111_52)%22%3E%0A%3Cpath%20d%3D%22M-0.592149%201.08896C-1.5239%203.33663%20-1.21959%205.59799%200.0875457%206.13985C1.39468%206.68171%203.20966%205.29888%204.14141%203.05121C5.07316%200.803541%204.76885%20-1.45782%203.46171%20-1.99968C2.15458%20-2.54154%200.339602%20-1.15871%20-0.592149%201.08896Z%22%20fill%3D%22%23FFEE48%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_f_111_52%22%20x%3D%22-2.12817%22%20y%3D%22-8.35998%22%20width%3D%2212.8393%22%20height%3D%2211.383%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%220.722959%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter1_f_111_52%22%20x%3D%222.75168%22%20y%3D%22-9.38089%22%20width%3D%2225.1763%22%20height%3D%2224.96%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.49513%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter2_f_111_52%22%20x%3D%22-14.1669%22%20y%3D%22-7.50196%22%20width%3D%2226.5068%22%20height%3D%2223.6338%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.97119%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter3_f_111_52%22%20x%3D%22-14.1669%22%20y%3D%22-7.50196%22%20width%3D%2226.5068%22%20height%3D%2223.6338%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.97119%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter4_f_111_52%22%20x%3D%22-12.3607%22%20y%3D%22-7.29981%22%20width%3D%2223.709%22%20height%3D%2223.6846%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.97119%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter5_f_111_52%22%20x%3D%220.634962%22%20y%3D%225.02095%22%20width%3D%2221.7027%22%20height%3D%2222.0616%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.82351%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter6_f_111_52%22%20x%3D%22-3.97547%22%20y%3D%22-14.6666%22%20width%3D%2223.2857%22%20height%3D%2222.8313%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.5589%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter7_f_111_52%22%20x%3D%22-7.7407%22%20y%3D%22-0.945408%22%20width%3D%2229.1982%22%20height%3D%2230.1105%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.2852%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter8_f_111_52%22%20x%3D%226.78641%22%20y%3D%22-0.27231%22%20width%3D%2216.2415%22%20height%3D%2215.5681%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.04485%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter9_f_111_52%22%20x%3D%223.77526%22%20y%3D%22-8.71693%22%20width%3D%2221.687%22%20height%3D%2219.4212%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%221.72712%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter10_f_111_52%22%20x%3D%22-5.40727%22%20y%3D%22-6.39238%22%20width%3D%2214.3639%22%20height%3D%2216.9254%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222.1376%22%20result%3D%22effect1_foregroundBlur_111_52%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A", color: "#F0E68C" },
  { name: "Codex", icon: SiOpenai, color: "#412991" },
  { name: "Claude", src: "data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%23D97757%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EClaude%3C%2Ftitle%3E%3Cpath%20d%3D%22m4.7144%2015.9555%204.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608%201.5179.1032%202.2767.1578%201.6514.0972%202.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973%209.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686%201.9064%201.4754%202.4893%201.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335%206.6997%200l.9957.1336.419.3642.6192%201.4147%201.0018%202.2282%201.5543%203.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853%201.8517-.5586%202.9021-.3643%201.9429h.2125l.2429-.2429.9835-1.3053%201.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759%201.1293-.34%201.1657-1.0625%201.3478-.8804%201.1414-1.2628%201.7-.7893%201.36.0729.1093.1882-.0183%202.8535-.607%201.5421-.2794%201.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607%201.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929%201.0686%202.0035%201.8092%202.5075%202.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496%202.3436%203.5214.1214%201.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38%2017.959l-1.1414-1.9428-.1397.079-.674%207.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328%201.9672-2.1796%202.9446-1.7243%201.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889%202.386-3.0357%201.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385%204.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429%201.9064-1.3114Z%22%2F%3E%3C%2Fsvg%3E", color: "#D97757" },
  { name: "Figma", src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%2254%22%20height%3D%2280%22%20viewBox%3D%220%200%2054%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_912_3)%22%3E%0A%3Cpath%20d%3D%22M13.3333%2080.0002C20.6933%2080.0002%2026.6667%2074.0268%2026.6667%2066.6668V53.3335H13.3333C5.97333%2053.3335%200%2059.3068%200%2066.6668C0%2074.0268%205.97333%2080.0002%2013.3333%2080.0002Z%22%20fill%3D%22%230ACF83%22%2F%3E%0A%3Cpath%20d%3D%22M0%2039.9998C0%2032.6398%205.97333%2026.6665%2013.3333%2026.6665H26.6667V53.3332H13.3333C5.97333%2053.3332%200%2047.3598%200%2039.9998Z%22%20fill%3D%22%23A259FF%22%2F%3E%0A%3Cpath%20d%3D%22M0%2013.3333C0%205.97333%205.97333%200%2013.3333%200H26.6667V26.6667H13.3333C5.97333%2026.6667%200%2020.6933%200%2013.3333Z%22%20fill%3D%22%23F24E1E%22%2F%3E%0A%3Cpath%20d%3D%22M26.6667%200H40.0001C47.3601%200%2053.3334%205.97333%2053.3334%2013.3333C53.3334%2020.6933%2047.3601%2026.6667%2040.0001%2026.6667H26.6667V0Z%22%20fill%3D%22%23FF7262%22%2F%3E%0A%3Cpath%20d%3D%22M53.3334%2039.9998C53.3334%2047.3598%2047.3601%2053.3332%2040.0001%2053.3332C32.6401%2053.3332%2026.6667%2047.3598%2026.6667%2039.9998C26.6667%2032.6398%2032.6401%2026.6665%2040.0001%2026.6665C47.3601%2026.6665%2053.3334%2032.6398%2053.3334%2039.9998Z%22%20fill%3D%22%231ABCFE%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_912_3%22%3E%0A%3Crect%20width%3D%2253.3333%22%20height%3D%2280%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A", color: "#F24E1E" },
  { name: "tldraw", icon: SiTldraw, color: "#ffffff" },
];

export default function Home() {
  return (
      <div className="w-full px-1 sm:px-4 flex flex-col items-center gap-0">
        {/* Main Content Box */}
        <main className="w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pt-2 sm:pt-4 md:pt-6 pb-6 sm:pb-8 border-b border-zinc-200 dark:border-zinc-800/60 flex flex-col transition-colors duration-300">

        {/* Header Section */}
        <div className="animate-fade-in-up delay-100 flex items-start justify-start w-full gap-3 sm:gap-10">

          {/* Left: Image & Name */}
          <div className="flex flex-col items-center w-max gap-2">
            {/* Profile Photo */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-3xl overflow-hidden border-2 border-yellow-400/80 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              <Image
                src="/Mr.png"
                alt="Bhanu"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Name */}
            <div className="flex flex-col justify-center mt-1">
              <h1
                className="text-2xl sm:text-3xl tracking-wide text-zinc-900 dark:text-white italic relative pb-2 inline-block text-center whitespace-nowrap transition-colors duration-300"
                style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
              >
                Bhanu Nagar
                {/* Subtle underline */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-300 dark:bg-zinc-600/80 transition-colors duration-300"></div>
              </h1>
            </div>
          </div>

          {/* Right: Title & Bio */}
          <div className="flex flex-col justify-start min-w-0 mt-1 sm:mt-2">
            <h2
              className="text-zinc-900 dark:text-white tracking-wider sm:tracking-widest whitespace-nowrap text-[0.8rem] sm:text-sm md:text-xl lg:text-2xl truncate transition-colors duration-300"
              style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
            >
              FULL-STACK SYSTEMS ENGINEER
            </h2>
            <p
              className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400/90 [text-shadow:_0_0_15px_rgba(161,161,170,0.4)] leading-normal max-w-full sm:max-w-xl tracking-wide text-justify transition-colors duration-300"
              style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}
            >
              I build multi-platform products with a focus on Data Integrity, Global Payments, and Real-Time Sync. From system telemetry to secure commerce, I build end-to-end solutions at speed.
            </p>

            {/* Social Links & Button */}
            <div className="flex items-center justify-between w-full max-w-full sm:max-w-xl mt-2 sm:mt-3">
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Twitter (X) */}
                <a href="https://x.com/bhanu4417" target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-black/5 dark:bg-white/5 backdrop-blur-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95" aria-label="X (Twitter)">
                  <RiTwitterXLine className="w-4 h-4 sm:w-[1.2rem] sm:h-[1.2rem]" />
                </a>
                {/* Custom SVG (Wacheit) */}
                <a href="https://www.wacheit.com/profile/bhanu4417" target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-black/5 dark:bg-white/5 backdrop-blur-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95" aria-label="Wacheit Profile">
                  <svg className="w-4 h-4 sm:w-[1.2rem] sm:h-[1.2rem]" fill="none" stroke="currentColor" viewBox="1.5 1.5 21 21" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 4.5H8C6.9 4.5 6 5.4 6 6.5V10C6 11.1 5.1 12 4 12C5.1 12 6 12.9 6 14V17.5C6 18.6 6.9 19.5 8 19.5H9" />
                    <path d="M15 19.5H16C17.1 19.5 18 18.6 18 17.5V14C18 12.9 18.9 12 20 12C18.9 12 18 11.1 18 10V6.5C18 5.4 17.1 4.5 16 4.5H15" />
                    <circle cx="12" cy="10.5" r="1.6" />
                    <path d="M11.2 14.2C11.2 15.8 12.6 16.6 12.6 17.8C12.6 18.6 12.1 19.2 11.2 19.6" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com/Bhanu4417" target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-black/5 dark:bg-white/5 backdrop-blur-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95" aria-label="GitHub">
                  <FiGithub className="w-4 h-4 sm:w-[1.2rem] sm:h-[1.2rem]" strokeWidth={1.5} />
                </a>
                {/* LinkedIn */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-1 sm:p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700/50 bg-black/5 dark:bg-white/5 backdrop-blur-md text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95" aria-label="LinkedIn">
                  <FiLinkedin className="w-4 h-4 sm:w-[1.2rem] sm:h-[1.2rem]" strokeWidth={1.5} />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* My Work button */}
                <Link
                  href="/work"
                  className="hidden sm:block bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-[12px] border border-zinc-200 dark:border-zinc-700/80 text-[14px] leading-[20px] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500 }}
                >
                  My Work
                </Link>
                {/* Get in touch button */}
                <a
                  href="#contact"
                  className="bg-zinc-900 dark:bg-white text-white dark:text-black px-3 py-1 sm:px-5 sm:py-2 rounded-[12px] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-inter), "Inter Fallback", sans-serif', fontWeight: 500 }}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Technologies I Work With */}
        <div className="animate-fade-in-up delay-200 mt-10 sm:mt-12 w-full flex flex-col gap-3 sm:gap-4 transition-colors duration-300">
          <h3 
            className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            Tech I work with
          </h3>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {mainStack.map((tech, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-md border border-dashed border-zinc-300 dark:border-zinc-600/70 bg-white dark:bg-zinc-900/40 cursor-default transition-colors duration-300 shadow-sm dark:shadow-none"
              >
                <tech.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90 rounded-[3px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                <span className="text-[11px] sm:text-[12px] text-zinc-800 dark:text-zinc-300 font-medium tracking-wide transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="animate-fade-in-up delay-300 mt-10 sm:mt-12">
          <GithubGraph />
        </div>

        {/* Wacheit Contribution Graph */}
        <div className="animate-fade-in-up delay-400">
          <ContributionGraph />
        </div>

      </main>

      {/* Projects Box */}
      <section className="w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pb-2 sm:pb-4 pt-10 sm:pt-14 md:pt-16 flex flex-col transition-colors duration-300">
        <h2 
          className="animate-fade-in-up delay-500 text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 mb-5 sm:mb-6 transition-colors duration-300" 
          style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
        >
          Projects
        </h2>
        
        {/* Wacheit Project Item */}
        <div className="animate-fade-in-up delay-600 group relative flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 border-t border-zinc-200 dark:border-zinc-800/60 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300 overflow-hidden -mx-2 sm:-mx-10 md:-mx-12 px-2 sm:px-10 md:px-12 rounded-xl sm:rounded-none">
          {/* Subtle animated hover shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.04] dark:via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />

          {/* Text Content */}
          <div className="flex flex-col justify-center min-w-0 w-full relative z-10">
            <div className="flex items-center justify-between gap-4 mb-2 sm:mb-2.5">
              <h3 className="text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 tracking-wide transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
                Wacheit
              </h3>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400/90 leading-relaxed font-sans mb-3 sm:mb-4 line-clamp-2 transition-colors duration-300">
              An AI-native workflow tracker designed to streamline your productivity with intelligent task sync and beautifully seamless data visualization.
            </p>

            <div className="flex items-center gap-2 mt-auto flex-wrap">
              {/* Tech stack items */}
              {wacheitStack.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-dashed border-zinc-300 dark:border-zinc-600/70 bg-white dark:bg-zinc-900/40 cursor-default transition-colors duration-300 shadow-sm dark:shadow-none"
                >
                  <tech.icon className={`w-3.5 h-3.5 opacity-90 rounded-[3px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                  <span className="text-[10px] sm:text-[11px] text-zinc-800 dark:text-zinc-300 font-medium tracking-wide transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Klyne Project Item */}
        <div className="animate-fade-in-up delay-700 group relative flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 border-y border-zinc-200 dark:border-zinc-800/60 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300 overflow-hidden -mx-2 sm:-mx-10 md:-mx-12 px-2 sm:px-10 md:px-12 rounded-xl sm:rounded-none">
          {/* Subtle animated hover shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.04] dark:via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
          
          {/* Text Content */}
          <div className="flex flex-col justify-center min-w-0 w-full relative z-10">
            <div className="flex items-center justify-between gap-4 mb-2 sm:mb-2.5">
              <h3 className="text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 tracking-wide transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
                Klyne
              </h3>
            </div>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400/90 leading-relaxed font-sans mb-3 sm:mb-4 line-clamp-2 transition-colors duration-300">
              An automated content generator according to the mood and platform type for new-gen content generation.
            </p>
            
            <div className="flex items-center gap-2 mt-auto flex-wrap">
              {/* Tech stack items */}
              {klyneStack.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-dashed border-zinc-300 dark:border-zinc-600/70 bg-white dark:bg-zinc-900/40 cursor-default transition-colors duration-300 shadow-sm dark:shadow-none"
                >
                  <tech.icon className={`w-3.5 h-3.5 opacity-90 rounded-[3px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                  <span className="text-[10px] sm:text-[11px] text-zinc-800 dark:text-zinc-300 font-medium tracking-wide transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wacheit Quest Project Item */}
        <div className="animate-fade-in-up delay-800 group relative flex flex-col gap-3 sm:gap-4 py-5 sm:py-6 border-b border-zinc-200 dark:border-zinc-800/60 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300 overflow-hidden -mx-2 sm:-mx-10 md:-mx-12 px-2 sm:px-10 md:px-12 rounded-xl sm:rounded-none">
          {/* Subtle animated hover shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.04] dark:via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
          
          {/* Text Content */}
          <div className="flex flex-col justify-center min-w-0 w-full relative z-10">
            <div className="flex items-center justify-between gap-4 mb-2 sm:mb-2.5">
              <h3 className="text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 tracking-wide transition-colors duration-300" style={{ fontFamily: 'var(--font-instrument-serif), serif' }}>
                Wacheit Quest
              </h3>
            </div>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400/90 leading-relaxed font-sans mb-3 sm:mb-4 line-clamp-2 transition-colors duration-300">
              A personal blog website where I post daily updates, thoughts, and design descriptions about my current work.
            </p>
            
            <div className="flex items-center gap-2 mt-auto flex-wrap">
              {/* Tech stack items */}
              {wacheitQuestStack.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-dashed border-zinc-300 dark:border-zinc-600/70 bg-white dark:bg-zinc-900/40 cursor-default transition-colors duration-300 shadow-sm dark:shadow-none"
                >
                  <tech.icon className={`w-3.5 h-3.5 opacity-90 rounded-[3px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                  <span className="text-[10px] sm:text-[11px] text-zinc-800 dark:text-zinc-300 font-medium tracking-wide transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Setup Box */}
      <section className="animate-fade-in-up delay-900 w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pt-6 sm:pt-10 md:pt-12 pb-6 sm:pb-10 flex flex-col transition-colors duration-300">
        <h2 
          className="text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 mb-5 sm:mb-6 transition-colors duration-300" 
          style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
        >
          My Setup
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {mySetup.map((tech, idx) => (
            <div 
              key={idx} 
              className="relative flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl cursor-default transition-all duration-300 overflow-hidden shadow-sm dark:shadow-none border border-zinc-200 dark:border-transparent"
            >
              <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${tech.color}15 0%, rgba(240, 240, 240, 0.4) 100%)`, boxShadow: `inset 0 1px 0 0 ${tech.color}10` }} />
              <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${tech.color}15 0%, rgba(20, 20, 20, 0.4) 100%)`, boxShadow: `inset 0 1px 0 0 ${tech.color}10` }} />
              
              <div className="relative z-10 flex items-center gap-3.5">
                {tech.icon ? (
                  // @ts-ignore
                  <tech.icon className={`w-6 h-6 sm:w-7 sm:h-7 opacity-90 rounded-[4px] ${tech.color === '#ffffff' ? 'text-zinc-900 dark:text-white' : ''}`} style={tech.color !== '#ffffff' ? { color: tech.color } : undefined} />
                ) : (
                  // @ts-ignore
                  <img src={tech.src} alt={tech.name} className={`w-6 h-6 sm:w-7 sm:h-7 opacity-90 rounded-[4px] object-contain transition-all duration-300 ${tech.invertInLightMode ? 'dark:invert-0 invert' : ''}`} />
                )}
                <span className="text-[14px] sm:text-[15px] text-zinc-800 dark:text-zinc-200 font-medium tracking-wide transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider line after My Setup */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-10 md:px-12">
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/60 mb-2 sm:mb-4 transition-colors duration-300"></div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Divider line before Quote */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-10 md:px-12 mt-2 sm:mt-4">
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/60 mb-8 sm:mb-10 transition-colors duration-300"></div>
      </div>

      {/* Quote Box */}
      <section className="animate-fade-in-up delay-1000 w-full max-w-3xl bg-[#FAFAFA] dark:bg-[#100F0F] px-2 sm:px-10 md:px-12 pb-12 sm:pb-16 flex flex-col transition-colors duration-300">
        <div className="relative w-full rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-[#151515]/50 px-3 py-6 sm:px-8 sm:py-8 overflow-hidden flex flex-col justify-center transition-colors duration-300">
          {/* Huge background quotes */}
          <div className="absolute top-2 left-4 sm:top-3 sm:left-6 text-[80px] sm:text-[110px] leading-none text-zinc-300 dark:text-zinc-800/50 font-serif font-bold select-none pointer-events-none tracking-tighter transition-colors duration-300" style={{ transform: 'translateY(-10px)' }}>
            “
          </div>
          
          <div className="relative z-10 w-full flex flex-col gap-2 sm:gap-3 pl-8 sm:pl-12">
            <p className="text-zinc-700 dark:text-zinc-300/90 text-[13px] sm:text-[15px] font-mono italic leading-relaxed transition-colors duration-300">
              "when things start to not go your way just press break !"
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-[12px] sm:text-[13px] font-mono italic text-right mt-1 sm:mt-2 transition-colors duration-300">
              – Wache Guy
            </p>
          </div>
        </div>
      </section>

      </div>
  );
}
