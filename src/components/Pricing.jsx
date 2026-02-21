import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiZap } from 'react-icons/fi'

const plans = [
    {
        id: 'basic',
        name: 'Basic',
        monthlyPrice: 999,
        yearlyPrice: 799,
        description: 'Perfect for beginners starting their fitness journey.',
        color: 'from-gray-500 to-gray-600',
        recommended: false,
        features: [
            'Access to 50+ trainers',
            '1 personalized workout plan',
            'Basic nutrition guide',
            'Community forum access',
            'Progress tracking dashboard',
            'Email support',
        ],
    },
    {
        id: 'pro',
        name: 'Pro',
        monthlyPrice: 2499,
        yearlyPrice: 1999,
        description: 'Our most popular plan for serious fitness enthusiasts.',
        color: 'from-red-500 to-orange-500',
        recommended: true,
        features: [
            'Access to all 500+ trainers',
            'Unlimited workout plans',
            'Custom nutrition meal plan',
            '4 live video sessions/month',
            'Advanced progress analytics',
            'BMI & body composition tracking',
            'Priority 24/7 support',
            'Exclusive workout videos',
        ],
    },
    {
        id: 'elite',
        name: 'Elite',
        monthlyPrice: 4999,
        yearlyPrice: 3999,
        description: 'The ultimate transformation package with VIP treatment.',
        color: 'from-violet-600 to-purple-700',
        recommended: false,
        features: [
            'Dedicated personal trainer',
            'Daily 1-on-1 coaching sessions',
            'Custom diet & supplement plan',
            'Unlimited live sessions',
            'Priority trainer matching',
            'In-person session credits',
            'Weekly body assessments',
            'VIP community & mastermind',
            'Dedicated account manager',
        ],
    },
]

export default function Pricing() {
    const [yearly, setYearly] = useState(false)

    return (
        <section id="pricing" className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/50 mb-4">
                        Pricing Plans
                    </span>
                    <h2 className="section-title">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="section-subtitle mb-8">
                        Choose the plan that fits your goals. No hidden fees, cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-full p-1.5">
                        <button
                            onClick={() => setYearly(false)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setYearly(true)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            Yearly
                            <span className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs px-2 py-0.5 rounded-full font-bold">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: plan.recommended ? 1.02 : 1.03, y: -4 }}
                            className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${plan.recommended
                                    ? 'bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-800 dark:to-gray-900 shadow-2xl shadow-red-500/20 border-2 border-red-500/50 ring-1 ring-red-500/30'
                                    : 'bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl'
                                }`}
                        >
                            {/* Recommended Badge */}
                            {plan.recommended && (
                                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center text-xs font-bold py-1.5 flex items-center justify-center gap-1">
                                    <FiZap size={12} />
                                    MOST POPULAR — RECOMMENDED
                                </div>
                            )}

                            <div className={`p-8 ${plan.recommended ? 'pt-12' : ''} flex flex-col flex-1`}>
                                {/* Plan Name */}
                                <div className="mb-6">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl mb-4 shadow-lg`}>
                                        <span className="text-white font-black text-lg">
                                            {plan.name[0]}
                                        </span>
                                    </div>
                                    <h3 className={`text-2xl font-black mb-1 ${plan.recommended ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm ${plan.recommended ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-end gap-1">
                                        <span className={`text-sm font-semibold ${plan.recommended ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'} mb-2`}>₹</span>
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={yearly ? 'yearly' : 'monthly'}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className={`text-5xl font-black ${plan.recommended ? 'text-white' : 'text-gray-900 dark:text-white'}`}
                                            >
                                                {yearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span className={`text-sm mb-2 ${plan.recommended ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>/mo</span>
                                    </div>
                                    {yearly && (
                                        <p className="text-green-400 text-sm font-semibold">
                                            💸 You save ₹{((plan.monthlyPrice - plan.yearlyPrice) * 12).toLocaleString()}/yr
                                        </p>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 flex-1 mb-8">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <FiCheck className="text-white text-xs" />
                                            </div>
                                            <span className={`text-sm ${plan.recommended ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                                                {feat}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${plan.recommended
                                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/40'
                                            : 'border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-red-500 hover:text-red-500 dark:hover:text-red-400'
                                        }`}
                                >
                                    {plan.recommended ? '🚀 Start Pro Plan' : `Get ${plan.name} Plan`}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
                >
                    🔒 Secure payment · 30-day money-back guarantee · Cancel anytime
                </motion.p>
            </div>
        </section>
    )
}
