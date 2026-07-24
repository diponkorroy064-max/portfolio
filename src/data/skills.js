import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiVercel,
    SiFirebase,
    SiJsonwebtokens,
    SiFramer,
    SiMui,
    SiShadcnui,
} from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJs },
            { name: "React.js", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Material UI", icon: SiMui },
            { name: "shadcn/ui", icon: SiShadcnui },
        ],
    },

    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "JWT", icon: SiJsonwebtokens },
            { name: "Firebase", icon: SiFirebase },
        ],
    },

    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: SiMongodb },
        ],
    },

    {
        category: "Tools",
        items: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Postman", icon: SiPostman },
            { name: "Vercel", icon: SiVercel },
            { name: "Figma", icon: FaFigma },
        ],
    },
];

export default skills;
