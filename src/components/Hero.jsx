import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const stats = [
    { value: 500, suffix: '+', label: 'Certified Trainers' },
    { value: 10, suffix: 'K+', label: 'Active Members' },
    { value: 95, suffix: '%', label: 'Success Rate' },
]

function AnimatedCounter({ value, suffix, label }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started) return
        let start = 0
        const duration = 2000
        const step = (value / duration) * 16
        const timer = setInterval(() => {
            start += step
            if (start >= value) { setCount(value); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 16)
        return () => clearInterval(timer)
    }, [started, value])

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-black gradient-text">
                {count}{suffix}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</div>
        </div>
    )
}

const FitnessCard = ({ delay, className, emoji, label }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={`glass-card p-4 flex items-center gap-3 min-w-[160px] ${className}`}
    >
        <span className="text-2xl">{emoji}</span>
        <div>
            <div className="text-sm font-bold text-gray-900 dark:text-white">{label}</div>
        </div>
    </motion.div>
)

export default function Hero({ onOpenBMI }) {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950 pt-20"
        >
            {/* Background Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-red-400/10 rounded-full blur-3xl" />
                {/* Grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                    style={{
                        backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT - Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-full px-4 py-1.5 mb-6"
                        >
                            <HiOutlineLightningBolt className="text-red-500 text-sm" />
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                                #1 Fitness Platform in India
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-gray-900 dark:text-white mb-6"
                        >
                            Transform{' '}
                            <span className="gradient-text">Your Body.</span>{' '}
                            <br />
                            Train With{' '}
                            <span className="relative">
                                Experts
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="absolute bottom-1 left-0 right-0 h-2 bg-red-500/20 rounded-full origin-left"
                                />
                            </span>
                            .
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
                        >
                            Connect with 500+ certified trainers, get personalized workout plans, track your
                            progress, and achieve your dream physique — all in one platform.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleScroll('#pricing')}
                                className="btn-primary flex items-center gap-2 glow-pulse"
                                aria-label="Get Started"
                            >
                                Get Started Free
                                <FiArrowRight className="text-base" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleScroll('#trainers')}
                                className="btn-outline flex items-center gap-2"
                                aria-label="Find Trainers"
                            >
                                <FiPlay className="text-base" />
                                Find Trainers
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-8"
                        >
                            {stats.map((s) => (
                                <AnimatedCounter key={s.label} {...s} />
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        {/* Main image container */}
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative w-full max-w-md"
                        >
                            {/* Central hero image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 border border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
                                    alt="Fitness transformation hero"
                                    className="w-full h-[420px] object-cover"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="glass-card p-3 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-lg font-bold">
                                            🏆
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-bold">Goal Achieved!</div>
                                            <div className="text-gray-300 text-xs">Sarah lost 18kg in 3 months</div>
                                        </div>
                                        <div className="ml-auto text-green-400 font-bold text-sm">✓</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, 8, 0], rotate: [0, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -left-8 top-8 glass-card dark:glass-card-dark p-3 shadow-xl hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">🔥</span>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900 dark:text-white">Calories Burned</div>
                                        <div className="text-lg font-black gradient-text">450 kcal</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -right-8 top-1/3 glass-card dark:glass-card-dark p-3 shadow-xl hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">💪</span>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900 dark:text-white">Strength Score</div>
                                        <div className="text-lg font-black gradient-text">+34%</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute -right-4 bottom-24 glass-card dark:glass-card-dark p-3 shadow-xl hidden lg:block"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">⭐</span>
                                    <div>
                                        <div className="text-xs font-bold text-gray-900 dark:text-white">Avg Rating</div>
                                        <div className="text-lg font-black gradient-text">4.9 / 5</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background glow */}
                        <div className="absolute inset-0 -z-10 bg-gradient-radial from-red-500/20 via-transparent to-transparent blur-2xl" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
            >
                <span className="text-xs font-medium">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-red-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
