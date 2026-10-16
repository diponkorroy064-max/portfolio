import DashboardLayout from "@/components/dashboard/DashboardLayout";

// Server-Side SEO Metadata (App Router SSR)
export const metadata = {
  title: "Diponkor Roy | Full Stack & MERN Stack Developer",
  description:
    "Professional portfolio dashboard of Diponkor Roy. Full Stack & MERN Stack Developer specialized in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web application development.",
  keywords: [
    "Diponkor Roy",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Diponkor Roy", url: "https://github.com/diponkorroy064-max" }],
  creator: "Diponkor Roy",
  openGraph: {
    title: "Diponkor Roy | Full Stack & MERN Stack Developer",
    description:
      "Explore the portfolio, production projects, and technical skills of Diponkor Roy, a Full Stack Developer building scalable, modern web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Diponkor Roy Portfolio",
  },
};

// 100% Server Component (Server-Side Rendering)
export default function Home() {
  return <DashboardLayout />;
}
