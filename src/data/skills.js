import { BiCopyright } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma,} from "react-icons/fa";
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
    SiBetterauth,
    SiNetlify,
    SiShadcnui,
    SiHeroui,
    SiRedux,
    SiZod,
} from "react-icons/si";

// Official Aceternity UI Logo Icon component
const SiAceternityui = ({ size = 24, className = "", ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="48 48 160 160"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M146 48H106.136L48 208H87.8644L116.932 128C116.932 128 122 114.5 124.4 108L131.466 88L146 48Z" />
        <path d="M110 48H149.864L168.032 98H127.84L110 48Z" />
        <path d="M139.587 113.833L171.458 208H208L172.807 113.833H139.587Z" />
        <path d="M173 114L140.8 208H104L139.545 114H173Z" />
    </svg>
);

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
            { name: "shadcn/UI", icon: SiShadcnui },
            { name: "Hero UI", icon: SiHeroui },
            { name: "Aceternity UI", icon: SiAceternityui },
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
            { name: "Redux", icon: SiRedux },
            { name: "Zod", icon: SiZod },
        ],
    },

    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: DiMysql },
            { name: "PostgreSQL", icon: DiPostgresql },
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
