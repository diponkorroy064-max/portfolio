import {
    Code2,
    Server,
    Database,
    Layout,
    Sparkles,
    CheckCircle2,
    Award,
    FolderGit2,
    GraduationCap,
} from "lucide-react";

export const bioData = {
    sectionBadge: "Introduction",
    sectionTitle: "About",
    sectionTitleHighlight: "Me",
    greeting: "Hi, I'm",
    name: "Diponkor Roy",
    role: "Frontend & MERN Stack Developer",
    paragraphs: [
        {
            prefix: "I am a passionate",
            highlightRole: "Frontend & MERN Stack Developer",
            middle: "who loves crafting clean, modern, and user-centric web applications. My core stack includes",
            highlightStack: "React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
        },
        {
            text: "From architecting role-based dashboards and integrating REST APIs to optimizing performance and polishing micro-interactions, I continuously strive to build impactful digital solutions that make everyday workflows seamless.",
        },
    ],
    academicCallout: {
        icon: GraduationCap,
        tag: "Academic Insight & Mindset",
        prefix: "My academic background in",
        institution: "Agriculture at Sher-e-Bangla Agricultural University",
        suffix:
            "has deeply nurtured my analytical thinking, research discipline, and problem-solving mindset—enabling me to approach software engineering with a structured, real-world perspective.",
    },
};

export const personalInfo = [
    { label: "Age", value: "24" },
    { label: "Residence", value: "Bangladesh" },
    { label: "Freelance", value: "Available", highlight: true },
    { label: "Address", value: "Dhaka-1207, Bangladesh" },
    { label: "Phone", value: "+880 1744533593" },
    { label: "Email", value: "diponkorroy064@gmail.com" },
];

export const services = [
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "Building modern, dynamic, and responsive web applications using Next.js, React, and TypeScript with clean component architecture.",
    },
    {
        icon: Server,
        title: "Backend & REST APIs",
        description:
            "Designing secure and scalable server applications with Node.js, Express.js, JWT authentication, Better Auth, and modular route handlers.",
    },
    {
        icon: Database,
        title: "Database Architecture",
        description:
            "Structuring schemas, indexing, and data modeling across MongoDB, PostgreSQL, and MySQL for optimized query performance.",
    },
    {
        icon: Layout,
        title: "Modern UI/UX & Motion",
        description:
            "Crafting sleek, accessible user interfaces with Tailwind CSS and Framer Motion, focusing on responsive design and subtle micro-interactions.",
    },
];

export const funFacts = [
    { icon: FolderGit2, number: "10+", label: "Completed Projects" },
    { icon: Award, number: "3+", label: "Full Stack Live Apps" },
    { icon: Sparkles, number: "20+", label: "Technologies Mastered" },
    { icon: CheckCircle2, number: "100%", label: "Dedication & Code Quality" },
];

const about = {
    bio: bioData,
    personalInfo,
    services,
    funFacts,
};

export default about;
