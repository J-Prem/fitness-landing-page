import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
    {
        id: 1,
        name: 'Rahul Mehta',
        age: 28,
        location: 'Mumbai',
        trainer: 'Marcus Reid',
        result: 'Lost 22kg in 4 months',
        review:
            'FitPro completely transformed my life. Marcus\'s personalized program and constant motivation helped me shed 22kg. The app makes tracking progress so simple and rewarding. I\'ve never felt more confident!',
        rating: 5,
        before: 'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?w=200&auto=format&fit=crop&q=80',
        after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&auto=format&fit=crop&q=80',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        tag: '💪 Weight Loss',
    },
    {
        id: 2,
        name: 'Sneha Kapoor',
        age: 32,
        location: 'Bangalore',
        trainer: 'Priya Sharma',
        result: 'Gained flexibility & lost stress',
        review:
            'Priya\'s yoga sessions on FitPro are absolutely life-changing. I went from barely touching my toes to doing full splits in 3 months. The online coaching is so convenient — I can train anytime, anywhere!',
        rating: 5,
        before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&auto=format&fit=crop&q=80',
        after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop&q=80',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        tag: '🧘 Flexibility',
    },
    {
        id: 3,
        name: 'Arjun Singh',
        age: 24,
        location: 'Delhi',
        trainer: 'Jake Torres',
        result: 'Built 8kg of muscle in 5 months',
        review:
            'Jake\'s CrossFit program on FitPro is insane! I joined as a complete beginner and now I can deadlift 2x my body weight. The progress tracking feature keeps me accountable and the community is super supportive.',
        rating: 5,
        before: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=200&auto=format&fit=crop&q=80',
        after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200&auto=format&fit=crop&q=80',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        tag: '🏋️ Muscle Gain',
    },
    {
        id: 4,
        name: 'Ananya Nair',
        age: 35,
        location: 'Chennai',
        trainer: 'Aisha Johnson',
        result: 'Post-pregnancy transformation',
        review:
            'After my second pregnancy, I felt completely lost. Aisha created a safe, effective plan that helped me lose 15kg and regain my confidence. The nutrition guidance alone was worth every rupee! Highly recommend FitPro.',
        rating: 5,
        before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&auto=format&fit=crop&q=80',
        after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop&q=80',
        avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&q=80',
        tag: '✨ Transformation',
    },
]

export default function Testimonials() {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    const next = useCallback(() => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prev = useCallback(() => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [next])

    const t = testimonials[index]

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    }

    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/50 mb-4">
                        Success Stories
                    </span>
                    <h2 className="section-title">
                        Real Results, <span className="gradient-text">Real People</span>
                    </h2>
                    <p className="section-subtitle">
                        Join thousands of members who've already transformed their lives with FitPro.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={t.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/5 border border-gray-100 dark:border-gray-700"
                        >
                            {/* Before / After Images */}
                            <div className="relative">
                                <div className="grid grid-cols-2 h-full min-h-[280px]">
                                    <div className="relative overflow-hidden">
                                        <img src={t.before} alt="Before transformation" className="w-full h-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 bg-black/30 flex items-end">
                                            <span className="text-white text-xs font-bold bg-gray-900/70 px-3 py-1.5 m-3 rounded-full">BEFORE</span>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <img src={t.after} alt="After transformation" className="w-full h-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent flex items-end">
                                            <span className="text-white text-xs font-bold bg-red-500/80 px-3 py-1.5 m-3 rounded-full">AFTER</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Result banner */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2.5 text-sm font-bold">
                                    🏆 {t.result}
                                </div>
                            </div>

                            {/* Review Content */}
                            <div className="p-8 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-200 dark:border-red-800/50 mb-4">
                                        {t.tag}
                                    </span>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <FiStar key={s} className="text-amber-400 text-lg" style={{ fill: 'currentColor' }} />
                                        ))}
                                    </div>

                                    <blockquote className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic mb-6">
                                        "{t.review}"
                                    </blockquote>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-red-500/30"
                                        loading="lazy"
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white">{t.name}, {t.age}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{t.location} · Trainer: {t.trainer}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <button
                        onClick={prev}
                        aria-label="Previous testimonial"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-11 h-11 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors border border-gray-200 dark:border-gray-700"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next testimonial"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-11 h-11 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors border border-gray-200 dark:border-gray-700"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-red-500' : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
