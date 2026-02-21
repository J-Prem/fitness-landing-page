import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

export default function CTA() {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="cta" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-red-950/40 to-gray-950" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(239,68,68,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.5) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block bg-red-500/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-500/30 mb-6">
                        🚀 Limited Time Offer — 30 Days Free
                    </span>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                        Start Your{' '}
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            Fitness Journey
                        </span>
                        {' '}Today
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join 10,000+ members already transforming their bodies. Expert trainers, personalized plans, and a supportive community — all in one platform.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(239,68,68,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScroll('#pricing')}
                            className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2"
                            aria-label="Join Now"
                        >
                            Join Now — It's Free
                            <FiArrowRight />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScroll('#trainers')}
                            className="border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                            aria-label="Book Free Consultation"
                        >
                            <FiCalendar />
                            Book Free Consultation
                        </motion.button>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        {['✓ No credit card required', '✓ Cancel anytime', '✓ 30-day money back', '✓ Instant access'].map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Floating trainer avatars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex justify-center items-center gap-2"
                >
                    <div className="flex -space-x-3">
                        {[
                            'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=60&auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=60&auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&auto=format&fit=crop&q=80',
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80',
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Member"
                                className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <div className="text-left ml-3">
                        <div className="text-white font-bold text-sm">10,000+ members</div>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s} className="text-amber-400 text-xs">★</span>
                            ))}
                            <span className="text-gray-400 text-xs ml-1">4.9/5 rating</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
