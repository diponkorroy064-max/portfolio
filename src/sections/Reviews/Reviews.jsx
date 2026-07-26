"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import defaultReviews from "@/data/reviews";
import { useEffect, useState } from "react";
import { createReview, getReviews } from "@/lib/review/review";
import { toast } from "sonner";


export default function Reviews() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        rating: "",
        review: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await createReview(formData);

            if (result.success) {
                toast.success("🎉 Thank you for your review!");

                setFormData({
                    name: "",
                    company: "",
                    email: "",
                    rating: "",
                    review: "",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    };
    // console.log("form data from review section", formData);


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
    console.log("review", review);

    const displayReviews = review.length > 0 ? review : defaultReviews;


    return (
        <section id="reviews"
            className="bg-slate-950 py-12 px-6 lg:px-12 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 text-lg font-semibold">
                        Feedback
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Reviews & Suggestions
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        I value constructive feedback. Feel free to share your
                        thoughts about my portfolio, Projects and suggest improvements.
                    </p>
                </motion.div>

                
                {/* Review Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mt-10">
                    {displayReviews.map((review, index) => (
                        <motion.div
                            key={review.id  || review._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-sky-500 transition">
                            
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(Number(review.rating))].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-7">
                                {review.review}
                            </p>

                            <div className="mt-6 border-t border-slate-700 pt-4">
                                <h4 className="font-semibold text-lg">
                                    {review.name}
                                </h4>

                                <p className="text-sky-400 text-sm">
                                    {review.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Review Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-15 bg-slate-900 rounded-3xl border border-slate-800 p-8">
                    <h3 className="text-3xl font-bold text-center mb-8">
                        Leave a Review
                    </h3>

                    <form className="grid gap-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-sky-500" />

                            <input
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                type="text"
                                placeholder="Company / Organization"
                                className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-sky-500" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <input name="email" value={formData.email} onChange={handleChange} type="email"
                                placeholder="Email Address" className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-sky-500"/>

                            <select name="rating" value={formData.rating}
                                onChange={handleChange}
                                className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-sky-500">
                                <option value="">Rating</option>
                                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                                <option value="4">⭐⭐⭐⭐ (4)</option>
                                <option value="3">⭐⭐⭐ (3)</option>
                                <option value="2">⭐⭐ (2)</option>
                                <option value="1">⭐ (1)</option>
                            </select>
                        </div>

                        <textarea name="review" value={formData.review} onChange={handleChange} rows={4} placeholder="Write your review..." className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-sky-500"></textarea>

                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 transition py-4 rounded-xl font-semibold cursor-pointer">
                            Submit Review
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

