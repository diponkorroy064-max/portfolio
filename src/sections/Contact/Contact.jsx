"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Portfolio Contact* 
👤 Name: ${formData.name} 
📧 Email: ${formData.email} 
📝 Subject: ${formData.subject} 
💬 Message: ${formData.message}`;

        const phone = "8801744533593"; // WhatsApp number
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");

        toast.success("Opening WhatsApp with your message!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    const contactChannels = [
        {
            icon: Mail,
            title: "Email Address",
            value: "diponkorroy064@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com",
            isExternal: true,
        },
        {
            icon: Phone,
            title: "Phone / WhatsApp",
            value: "+880 1744533593",
            link: "https://wa.me/8801744533593",
            isExternal: true,
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Dhaka-1207, Bangladesh",
            link: null,
            isExternal: false,
        },
    ];

    return (
        <section id="contact" className="space-y-10">
            {/* Section Header */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-[#6fc844]" />
                    <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                        Let&apos;s Connect
                    </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    <span className="text-[#6fc844]">Get In</span> Touch
                </h2>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactChannels.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                        <div className="bg-[#16171b] border border-zinc-800/80 hover:border-[#6fc844]/50 rounded-2xl p-5 transition-all duration-300 shadow-lg group h-full flex flex-col justify-center items-center text-center">
                            <div className="p-3 rounded-xl bg-[#121316] border border-zinc-800 group-hover:border-[#6fc844]/40 group-hover:bg-[#6fc844]/10 transition-colors mb-3">
                                <Icon className="w-5 h-5 text-[#6fc844]" />
                            </div>
                            <h3 className="text-xs font-semibold text-zinc-400">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-bold text-white mt-1 group-hover:text-[#6fc844] transition-colors break-all">
                                {item.value}
                            </p>
                        </div>
                    );

                    if (item.link) {
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                target={item.isExternal ? "_blank" : undefined}
                                rel={item.isExternal ? "noopener noreferrer" : undefined}
                                className="block h-full"
                            >
                                {content}
                            </Link>
                        );
                    }
                    return <div key={index}>{content}</div>;
                })}
            </div>

            {/* Direct Message Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#16171b] rounded-2xl border border-zinc-800/80 p-6 sm:p-8 shadow-xl"
            >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-[#6fc844]" />
                        <span>Send Me a Direct Message</span>
                    </h3>
                    <span className="hidden sm:inline-block text-xs font-bold text-[#6fc844] bg-[#6fc844]/10 px-3 py-1 rounded-full border border-[#6fc844]/20">
                        Fast Response
                    </span>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Alex Smith"
                                className="w-full bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. alex@company.com"
                                className="w-full bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="e.g. Project Inquiry / Opportunity"
                            className="w-full bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your project details or message here..."
                            className="w-full bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-[#6fc844] hover:bg-[#5eb537] text-black font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#6fc844]/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Send size={15} />
                            Send Message (WhatsApp)
                        </button>

                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                            <span>Or reach directly via email</span>
                        </div>
                    </div>
                </form>
            </motion.div>

            {/* Social Channels Footer Row */}
            <div className="pt-4 flex flex-col items-center justify-center gap-3">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                    Follow & Connect
                </p>
                <SocialLinks />
            </div>
        </section>
    );
}
