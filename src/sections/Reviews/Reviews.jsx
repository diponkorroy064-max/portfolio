"use client";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote, Send } from "lucide-react";
import defaultReviews from "@/data/reviews";
import { useEffect, useState } from "react";
import { createReview, getReviews } from "@/lib/review/review";
import { toast } from "sonner";

export default function Reviews() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        rating: "5",
        review: "",
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
            const result = await createReview(formData);

            if (result.success) {
                toast.success("🎉 Thank you for your review!");

                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    rating: "5",
                    review: "",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const [review, setReview] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const result = await getReviews();
                if (result.success) {
                    setReview(result.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchReviews();
    }, []);

    const displayReviews = review.length > 0 ? review : defaultReviews;

    return (
        <section id="reviews" className="space-y-10">
            {/* Section Header */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-[#6fc844]" />
                    <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                        Testimonials & Recommendations
                    </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    <span className="text-[#6fc844]">Client</span> Feedback
                </h2>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayReviews.map((item, index) => (
                    <motion.div
                        key={item.id || item._id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="bg-[#16171b] border border-zinc-800/80 hover:border-[#6fc844]/50 rounded-2xl p-6 transition-all duration-300 shadow-lg flex flex-col justify-between relative group"
                    >
                        <MessageSquareQuote className="absolute top-4 right-4 w-7 h-7 text-zinc-800 group-hover:text-[#6fc844]/30 transition-colors pointer-events-none" />

                        <div>
                            {/* Stars */}
                            <div className="flex items-center gap-1 text-[#6fc844] mb-3">
                                {[...Array(Number(item.rating || 5))].map((_, i) => (
                                    <Star key={i} size={15} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                                &ldquo;{item.review}&rdquo;
                            </p>
                        </div>

                        <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-sm text-white">
                                    {item.name}
                                </h4>
                                <p className="text-xs text-[#6fc844]">
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Leave a Review Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#16171b] rounded-2xl border border-zinc-800/80 p-6 sm:p-8 shadow-xl"
            >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-[#6fc844]">Leave</span> a Review or Feedback
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                        />

                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company or Designation"
                            className="bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors"
                        />

                        <select
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-300 outline-none focus:border-[#6fc844] transition-colors"
                        >
                            <option value="5">⭐⭐⭐⭐⭐ (5 Stars - Exceptional)</option>
                            <option value="4">⭐⭐⭐⭐ (4 Stars - Very Good)</option>
                            <option value="3">⭐⭐⭐ (3 Stars - Good)</option>
                            <option value="2">⭐⭐ (2 Stars)</option>
                            <option value="1">⭐ (1 Star)</option>
                        </select>
                    </div>

                    <textarea
                        name="review"
                        required
                        value={formData.review}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Write your constructive feedback or project recommendation..."
                        className="w-full bg-[#121316] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#6fc844] transition-colors resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#6fc844] hover:bg-[#5eb537] text-black font-bold py-3 px-6 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-md shadow-[#6fc844]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        <Send size={15} />
                        {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
