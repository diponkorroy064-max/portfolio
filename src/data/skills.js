import { BiCopyright } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma,} from "react-icons/fa";
import {  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVercel, SiFirebase,
SiJsonwebtokens, SiFramer, SiMui, SiBetterauth,
SiNetlify,} from "react-icons/si";


const skills = [
    {
        category: "Frontend",
        items: [
            { name: "TypeScript", icon: BsTypescript },
            { name: "JavaScript", icon: FaJs },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React.js", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "HTML5", icon: FaHtml5 },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Material UI", icon: SiMui },
            // { name: "shadcn/ui", icon: SiShadcnui },
        ],
    },

    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "JWT", icon: SiJsonwebtokens },
            { name: "Better Auth", icon: SiBetterauth },
            { name: "bcrypt", icon: BiCopyright },
            { name: "Firebase", icon: SiFirebase },
        ],
    },

    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: DiMysql },
        ],
    },

    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Figma", icon: FaFigma },
            { name: "Postman", icon: SiPostman },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
        ],
    },
];

export default skills;
