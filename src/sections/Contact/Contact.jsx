"use client";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";


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

        const phone = "+8801744533593"; // Your WhatsApp number (without +)

        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,"_blank");

        // Clear form after opening WhatsApp---
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    // console.log("formData by whatsApp", formData);

    return (
        <section
            id="contact"
            className="bg-slate-900 py-12 px-6 lg:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 font-semibold text-lg">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Contact Me
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Interested in working together or have any questions?
                        Feel free to reach out through the contact form or
                        directly using the information below.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 mt-10">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="space-y-8">

                        
                        {/* Email */}
                        <Link
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block">
                            <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-sky-500 hover:bg-slate-700 transition-all duration-300 cursor-pointer">

                                <div className="bg-sky-500 p-4 rounded-full">
                                    <Mail size={24} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl">
                                        Email
                                    </h3>

                                    <p className="text-gray-400">
                                        diponkorroy064@gmail.com
                                    </p>
                                </div>

                            </div>
                        </Link>

                        
                        {/* Phone */}
                        <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-sky-500 transition">

                            <div className="bg-sky-500 p-4 rounded-full">
                                <Phone size={24} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-xl">
                                    Phone
                                </h3>

                                <p className="text-gray-400">
                                    +880 1744533593
                                </p>
                            </div>
                        </div>

                        
                        {/* Location */}
                        <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-sky-500 transition">
                            <div className="bg-sky-500 p-4 rounded-full">
                                <MapPin size={24} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-xl">
                                    Location
                                </h3>

                                <p className="text-gray-400">
                                    Dhaka-1207, Bangladesh
                                </p>
                            </div>
                        </div>

                        
                        {/* Social */}
                        <SocialLinks></SocialLinks>

                        {/* <div className="flex gap-5">
                            <a href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 hover:bg-sky-500 flex items-center justify-center transition">
                                <FaGithub/>
                            </a>

                            <a href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 hover:bg-sky-500 flex items-center justify-center transition">
                                <FaLinkedin/>
                            </a>
                        </div> */}
                    </motion.div>

                    
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 p-8 rounded-3xl border border-slate-700">

                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name" className="bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-sky-500"/>

                            <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-sky-500" />
                        </div>

                        <input type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject" className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-sky-500"/>

                        <textarea rows="6" name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none focus:border-sky-500 resize-none"></textarea>

                        <button type="submit" className="mt-8 w-full bg-sky-500 hover:bg-sky-600 transition py-4 rounded-xl font-semibold flex items-center justify-center gap-3 cursor-pointer">
                            <Send size={20} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
