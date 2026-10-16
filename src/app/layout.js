import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";

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
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Web Developer",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/icon.png",
  },
};

// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full bg-[#0e0f12] text-white transition-colors duration-300">
        <ThemeProvider defaultTheme="dark">
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
