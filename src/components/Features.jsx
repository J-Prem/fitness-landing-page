import { motion } from 'framer-motion'
import {
    FiAward, FiTarget, FiHeart, FiMonitor, FiTrendingUp, FiUsers
} from 'react-icons/fi'

const features = [
    {
        icon: FiAward,
        title: 'Certified Trainers',
        description: 'All trainers are NASM/ACE certified with verified credentials and background checks.',
        color: 'from-red-500 to-rose-600',
        bg: 'bg-red-50 dark:bg-red-950/30',
    },
    {
        icon: FiTarget,
        title: 'Personalized Plans',
        description: 'AI-powered fitness plans tailored to your goals, fitness level, and schedule.',
        color: 'from-orange-500 to-amber-500',
        bg: 'bg-orange-50 dark:bg-orange-950/30',
    },
    {
        icon: FiHeart,
        title: 'Nutrition Guidance',
        description: 'Comprehensive meal plans and nutritional coaching aligned with your workout goals.',
        color: 'from-pink-500 to-rose-500',
        bg: 'bg-pink-50 dark:bg-pink-950/30',
    },
    {
        icon: FiMonitor,
        title: 'Online Coaching',
        description: 'Train from anywhere with live video sessions and on-demand workout libraries.',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50 dark:bg-violet-950/30',
    },
    {
        icon: FiTrendingUp,
        title: 'Progress Tracking',
        description: 'Real-time analytics, body metrics, and visual progress graphs to keep you motivated.',
        color: 'from-green-500 to-emerald-600',
        bg: 'bg-green-50 dark:bg-green-950/30',
    },
    {
        icon: FiUsers,
        title: 'Community Support',
        description: 'Join 10K+ members in group challenges, forums, and accountability groups.',
        color: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
}

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-gray-950">
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
                        Why Choose Us
                    </span>
                    <h2 className="section-title">
                        Everything You Need to <span className="gradient-text">Succeed</span>
                    </h2>
                    <p className="section-subtitle">
                        A complete ecosystem designed to make your fitness journey seamless, effective, and fun.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="group relative bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 overflow-hidden"
                            >
                                {/* Background shine on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl`} />
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`bg-gradient-to-br ${feature.color} bg-clip-text`}>
                                        <Icon className={`text-2xl bg-gradient-to-br ${feature.color}`} style={{ color: 'transparent', background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                                        {/* Fallback solid icon */}
                                    </div>
                                    <Icon className="text-2xl text-gray-700 dark:text-gray-200 absolute opacity-0" />
                                </div>

                                {/* Use a simpler icon rendering */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 -mt-[72px] opacity-100`}>
                                    <Icon className="text-2xl text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>

                                <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 rounded-full`} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
