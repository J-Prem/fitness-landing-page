import { motion } from 'framer-motion'
import { FiSearch, FiClipboard, FiTrendingUp } from 'react-icons/fi'

const steps = [
    {
        step: '01',
        icon: FiSearch,
        title: 'Choose Your Trainer',
        description:
            'Browse 500+ certified trainers by specialization, ratings, and availability. Use smart filters to find your perfect match.',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=80',
        color: 'from-red-500 to-orange-500',
    },
    {
        step: '02',
        icon: FiClipboard,
        title: 'Get Custom Fitness Plan',
        description:
            'Your trainer creates a personalized workout and nutrition plan based on your goals, body type, and lifestyle.',
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&auto=format&fit=crop&q=80',
        color: 'from-orange-500 to-amber-400',
    },
    {
        step: '03',
        icon: FiTrendingUp,
        title: 'Track Progress & Transform',
        description:
            'Monitor your workouts, nutrition, body metrics, and celebrate milestones as you reach your dream body.',
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=80',
        color: 'from-amber-400 to-yellow-400',
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/50 mb-4">
                        Simple Process
                    </span>
                    <h2 className="section-title">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="section-subtitle">
                        Start your transformation in 3 simple steps. No complexity, just results.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-20">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        const isEven = i % 2 === 1

                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
                            >
                                {/* Text */}
                                <div className={isEven ? 'lg:col-start-2' : ''}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <span className="text-7xl font-black text-gray-100 dark:text-gray-800 select-none leading-none">
                                            {step.step}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    {/* Progress line */}
                                    <div className="flex items-center gap-2">
                                        {steps.map((s, j) => (
                                            <div
                                                key={j}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${j <= i
                                                        ? `bg-gradient-to-r ${step.color} ${j === i ? 'w-12' : 'w-6'}`
                                                        : 'w-6 bg-gray-200 dark:bg-gray-700'
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                            Step {step.step} of {steps.length}
                                        </span>
                                    </div>
                                </div>

                                {/* Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className={`relative ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                                >
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-72 lg:h-80 object-cover"
                                            loading="lazy"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
                                        {/* Step number overlay */}
                                        <div className="absolute top-4 right-4">
                                            <div className={`bg-gradient-to-br ${step.color} text-white text-2xl font-black w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                                                {step.step}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Decorative blob */}
                                    <div className={`absolute -z-10 -bottom-4 -right-4 w-48 h-48 bg-gradient-to-br ${step.color} opacity-20 rounded-full blur-2xl`} />
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
