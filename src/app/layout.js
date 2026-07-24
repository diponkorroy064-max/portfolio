import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diponkor Roy | Frontend Developer (MERN Stack)",
  description:
    "Professional portfolio of Diponkor Roy showcasing skills, projects, experience, and education in MERN Stack and Next.js development.",
  keywords: [
    "Diponkor Roy",
    "Portfolio",
    "Frontend Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "JavaScript",
    "Web Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
