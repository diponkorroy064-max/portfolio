"use client";

import socialLinks from "@/constants/socialLinks";

export default function SocialLinks() {
    return (
        <div className="flex gap-4 mt-8">
            {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-sky-500 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300"
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
    );
}
