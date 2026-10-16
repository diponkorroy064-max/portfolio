"use client";
import socialLinks from "@/constants/socialLinks";

export default function SocialLinks({ className = "", itemClassName = "" }) {
    return (
        <div className={`flex flex-wrap justify-center items-center gap-3 ${className}`}>
            {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Social Link"
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#121316] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#6fc844] hover:border-[#6fc844] hover:shadow-lg hover:shadow-[#6fc844]/20 transition-all duration-300 ${itemClassName}`}
                    >
                        <Icon size={18} />
                    </a>
                );
            })}
        </div>
    );
}
