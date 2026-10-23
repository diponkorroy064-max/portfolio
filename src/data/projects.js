const projects = [
    {
        id: 1000,
        title: "AgroMart AI",
        image: "/images/projects/agromartai.jpg",
        category: "full stack",
        description:
            "A modern agricultural marketplace where farmers can purchase seeds, fertilizers, pesticides, seedlings, farming tools, machinery, and other essential products from trusted sellers.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Multer",
        ],

        live: "https://agromartai-client.vercel.app",

        github:
            "https://github.com/diponkorroy064-max/AgroMart-AI-client-",

        challenges:
            "Implemented role-based authentication for farmers, sellers, and admins, along with product management, order management, image uploads, responsive dashboards, and secure REST APIs.",

        future:
            "Integrate AI-powered crop recommendations, personalized product suggestions, online payment, real-time order tracking, notifications, and smart farming assistance.",
    },
    {
        id: 2000,
        title: "StayNest",
        image: "/images/projects/staynest1.png",
        category: "full stack",
        description: "A rental property management platform where users can browse, book, and manage rental properties with a beautiful user interface.",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express.js",
            "JavaScript(ES6+)",
            "Tailwind CSS",
            "MongoDB",
            "JWT",
            "Better Auth",
            "Stripe"
        ],
        live: "https://staynest-vert-beta.vercel.app",
        github: "https://github.com/diponkorroy064-max/StayNest-Client",
        challenges: "Created advanced filtering, authentication, protected routes, and responsive property cards.",
        future: "Payment integration, wishlist, property reviews, and map-based searching.",
    },
    {
        id: 3000,
        title: "CrowdSpark",
        image: "/images/projects/crowdspark.png",
        category: "full stack",
        description: "A full-featured crowdfunding platform where creators launch campaigns to raise funds, and supporters discover initiatives, pledge platform credits, and track contributions.",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express.js",
            "JavaScript(ES6+)",
            "Tailwind CSS",
            "MongoDB",
            "JWT",
            "Stripe",
            "Swiper.js"
        ],
        live: "https://client-eight-hazel-68.vercel.app",
        github: "https://github.com/diponkorroy064-max/CrowdFunding-Platform",
        challenges: "Implementing multi-role authorization (Supporter, Creator, Admin), platform credit economics, contribution approval workflows, and interactive floating notifications.",
        future: "Automated transactional email alerts (SendGrid/AWS SES), advanced aggregation-based campaign search, and community discussion threads for backers."
    },
    {
        id: 4000,
        title: "PetHaven",
        image: "/images/projects/pethaven1.png",
        category: "mern stack",
        description: "A full-stack pet adoption platform that connects rescued pets with loving families. Users can browse pets, submit adoption requests, and manage pet listings through role-based dashboards.",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express.js",
            "JavaScript(ES6+)",
            "MongoDB",
            "Tailwind CSS",
            "Better Auth",
            "JWT",
        ],
        live: "https://pet-adoption-platform-blush.vercel.app",
        github: "https://github.com/diponkorroy064-max/Pet-Adoption-Platform",
        challenges: "Implemented secure JWT authentication, role-based dashboards, pet adoption request management, protected routes, image uploading, and responsive UI with dynamic filtering.",
        future: "Add Stripe payment integration for donations, AI-powered pet recommendations, real-time chat between adopters and shelters, and email notifications for adoption updates.",
    },
    {
        id: 5000,
        title: "HireLoop",
        image: "/images/projects/Hireloop.jpg",
        category: "full stack",
        description:
            "A modern role-based job portal that connects job seekers, recruiters, and administrators through job posting, applications, company management, and dedicated dashboards.",
        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Better Auth",
            "JWT",
            "Framer Motion",
        ],
        live: "https://hireloop-client-five.vercel.app",
        github: "https://github.com/diponkorroy064-max/Hireloop-Project",
        challenges:
            "Designed role-based dashboards, secure authentication and authorization, job search and filtering, company management, protected APIs, and recruiter-to-job application workflows.",
        future:
            "Real-time notifications, AI-powered job recommendations, advanced analytics, interview scheduling, resume matching, and enhanced messaging features.",
    },
    {
        id: 6000,
        title: "AgroLink",
        image: "/images/projects/agrolink1.png",
        category: "full stack",
        description: "A collaborative platform where farmers, students, and experts can share agricultural resources, knowledge, and research.",
        technologies: [
            "Next.js",
            "React",
            "Express.js",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "Better Auth",
            "JWT",
        ],
        live: "https://agrolink-nine-pied.vercel.app",
        github: "https://github.com/diponkorroy064-max/AgroLink",
        challenges: "Designed multiple user roles, secure authentication, resource management and responsive dashboards.",
        future: "AI chatbot, expert booking system, crop disease prediction, and multilingual support.",
    },
    {
        id: 7000,
        title: "Tiles Gallery",
        image: "/images/projects/tiles-gallery.png",
        category: "mern stack",
        description:
            "A modern tile discovery platform showcasing stylish and high-quality tile designs for homeowners, architects, and developers. Users can explore tile collections and manage their profiles through a responsive web application.",
        technologies: [
            "Next.js",
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "DaisyUI",
            "HeroUI",
            "MongoDB",
            "Better Auth",
            "Google OAuth",
            "Vercel",
        ],
        live: "https://tiles-gallery-project-tan.vercel.app",
        github: "https://github.com/diponkorroy064-max/Tiles-Gallery-Project",
        challenges:
            "Implemented Better Auth authentication, Google Sign-In, protected routes, conditional navbar rendering, MongoDB integration, responsive layouts, and loading and toast notifications.",
        future:
            "Add advanced tile filtering, product comparisons, favorites, detailed tile specifications, and an admin dashboard for managing tile collections.",
    },
    {
        id: 8000,
        title: "ZENJI — Tactical Streetwear E-Commerce",
        image: "/images/projects/zenji.png",
        category: "frontend",
        description: "A modern, high-performance e-commerce web application for tactical apparel and futuristic streetwear, featuring a cyberpunk-inspired UI and seamless shopping experience.",
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Lucide React",
            "Vercel"
        ],
        live: "https://zenji-ecommerce.vercel.app",
        github: "https://github.com/diponkorroy064-max/ZENJI-Ecommerce",
        challenges: "Cyberpunk-inspired responsive UI, Interactive product image gallery with thumbnail swapping and zoom preview, Dynamic accordion and size guide, Size and color variant selection, Local storage cart persistence",
        future: "Role based dashboard access, Interactive shopping workflows, Stock availability indicators, Shopping cart with real-time calculations, Shipping and returns information.",
    }
];

export default projects;

