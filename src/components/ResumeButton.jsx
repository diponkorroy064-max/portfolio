import { Download, Eye } from "lucide-react";

export default function ResumeButton({
    type = "download",
    href = "/resume/Diponkor_Roy_Full_Stack_Developer_Resume.pdf",
    className = "",
}) {
    const isDownload = type === "download";

    return (
        <a
            href={href}
            {...(isDownload ? { download: true } : {})}
            target={isDownload ? "_self" : "_blank"}
            rel={isDownload ? undefined : "noopener noreferrer"}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6fc844] hover:bg-[#5eb537] text-black font-bold transition-all duration-300 shadow-md shadow-[#6fc844]/20 hover:shadow-lg hover:shadow-[#6fc844]/30 ${className}`}
        >
            {isDownload ? (
                <>
                    <Download size={18} />
                    Download CV
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
