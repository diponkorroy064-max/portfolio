import { Download, Eye } from "lucide-react";


export default function ResumeButton({
    type = "download",
    href = "/resume/Diponkor_Roy-Resume.pdf",
    className = "",
}) {
    const isDownload = type === "download";

    return (
        <a
            href={href}
            {...(isDownload ? { download: true } : {})}
            target={isDownload ? "_self" : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-all duration-300 ${className}`}
        >
            {isDownload ? (
                <>
                    <Download size={18} />
                    Download Resume
                </>
            ) : (
                <>
                    <Eye size={18} />
                    View Resume
                </>
            )}
        </a>
    );
}
