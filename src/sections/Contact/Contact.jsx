"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { toast } from "sonner";
import { sendMessage } from "@/lib/messege/messege";
import contactChannels from "@/data/contact";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await sendMessage(formData);

            if (result.success) {
                toast.success("🎉 Thank you! Your message has been sent successfully.");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error(result.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Something went wrong. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsApp = () => {
        const text = formData.message
            ? `*New Portfolio Contact* \n👤 Name: ${formData.name || "N/A"}\n📧 Email: ${formData.email || "N/A"}\n📝 Subject: ${formData.subject || "General Inquiry"}\n💬 Message: ${formData.message}`
            : "Hello Diponkor, I came across your portfolio and would like to connect!";
        const phone = "8801744533593";
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    };

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

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-[#6fc844] hover:bg-[#5eb537] text-black font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#6fc844]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={15} className={isSubmitting ? "animate-pulse" : ""} />
                            {isSubmitting ? "Sending Message..." : "Send Message"}
                        </button>

                        <button
                            type="button"
                            onClick={handleWhatsApp}
                            className="w-full sm:w-auto border border-zinc-800 hover:border-[#6fc844]/40 bg-[#121316] hover:bg-[#181a1f] text-zinc-300 hover:text-white py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <MessageCircle size={15} className="text-[#6fc844]" />
                            <span>Quick Chat on WhatsApp</span>
                        </button>
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
