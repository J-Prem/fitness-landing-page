import { motion } from 'framer-motion'
import { FiStar, FiAward, FiCalendar } from 'react-icons/fi'

const trainers = [
    {
        id: 1,
        name: 'Marcus Reid',
        specialization: 'Strength & Powerlifting',
        experience: 8,
        rating: 4.9,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80',
        badge: '🏆 Top Trainer',
        tags: ['Strength', 'HIIT', 'Nutrition'],
    },
    {
        id: 2,
        name: 'Priya Sharma',
        specialization: 'Yoga & Mindfulness',
        experience: 6,
        rating: 4.8,
        reviews: 248,
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80',
        badge: '⭐ Featured',
        tags: ['Yoga', 'Flexibility', 'Meditation'],
    },
    {
        id: 3,
        name: 'Jake Torres',
        specialization: 'CrossFit & Cardio',
        experience: 10,
        rating: 5.0,
        reviews: 489,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&auto=format&fit=crop&q=80',
        badge: '🔥 Elite',
        tags: ['CrossFit', 'Endurance', 'Fat Loss'],
    },
    {
        id: 4,
        name: 'Aisha Johnson',
        specialization: 'Body Transformation',
        experience: 7,
        rating: 4.9,
        reviews: 367,
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&auto=format&fit=crop&q=80',
        badge: '💪 Expert',
        tags: ['Weight Loss', 'Toning', 'Diet'],
    },
]

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <FiStar
                    key={star}
                    className={`text-sm ${star <= Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                    style={{ fill: star <= Math.floor(rating) ? 'currentColor' : 'none' }}
                />
            ))}
            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">{rating}</span>
        </div>
    )
}

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
}

export default function TrainerProfiles() {
    return (
        <section id="trainers" className="py-24 bg-gray-50 dark:bg-gray-900">
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
                        Our Experts
                    </span>
                    <h2 className="section-title">Meet Our <span className="gradient-text">Elite Trainers</span></h2>
                    <p className="section-subtitle">
                        Hand-picked certified professionals ready to guide your transformation journey.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, i) => (
                        <motion.div
                            key={trainer.id}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-red-500/10 transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                {/* Badge */}
                                <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-bold px-2.5 py-1 rounded-full text-gray-800 dark:text-white">
                                    {trainer.badge}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-0.5">{trainer.name}</h3>
                                <p className="text-sm text-red-500 font-semibold mb-3">{trainer.specialization}</p>

                                <StarRating rating={trainer.rating} />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">({trainer.reviews} reviews)</p>

                                {/* Experience */}
                                <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-600 dark:text-gray-400">
                                    <FiAward className="text-red-500" />
                                    <span>{trainer.experience} years experience</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {trainer.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Book Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-4 w-full btn-primary py-2.5 text-sm flex items-center justify-center gap-2"
                                >
                                    <FiCalendar className="text-sm" />
                                    Book Session
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="btn-outline">View All 500+ Trainers →</button>
                </motion.div>
            </div>
        </section>
    )
}
