import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiArrowRight } from 'react-icons/fi'
import BMICalculatorModal from './BMICalculatorModal'

export default function BMIPreview() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <section id="bmi" className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Left Text */}
                        <div>
                            <span className="inline-block bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-red-200 dark:border-red-800/50 mb-4">
                                Health Tool
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                                Know Your <span className="gradient-text">BMI</span> Instantly
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Your Body Mass Index is the first step to understanding your health. Use our free BMI calculator to get instant results and personalized health tips.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Instant BMI calculation', 'Supports metric & imperial units', 'Health category classification', 'Personalized tips based on result'].map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300">
                                        <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(true)}
                                className="btn-primary flex items-center gap-2 text-base"
                                aria-label="Open BMI Calculator"
                            >
                                <FiActivity />
                                Check Your BMI Free
                                <FiArrowRight />
                            </motion.button>
                        </div>

                        {/* Right Card */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(true)}
                            className="cursor-pointer"
                        >
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700/50 shadow-2xl overflow-hidden">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                                            <FiActivity className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-black text-xl">BMI Calculator</h3>
                                            <p className="text-gray-400 text-sm">Free Health Assessment Tool</p>
                                        </div>
                                    </div>

                                    {/* Mock inputs */}
                                    <div className="space-y-3 mb-6">
                                        <div className="bg-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Height (cm)</span>
                                            <span className="text-white font-bold">175</span>
                                        </div>
                                        <div className="bg-gray-800 rounded-xl px-4 py-3 flex items-center justify-between">
                                            <span className="text-gray-400 text-sm">Weight (kg)</span>
                                            <span className="text-white font-bold">70</span>
                                        </div>
                                    </div>

                                    {/* Mock Result */}
                                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-2xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <p className="text-gray-400 text-xs">Your BMI Score</p>
                                                <p className="text-4xl font-black text-green-400">22.9</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-green-500/30">
                                                    Normal Weight ✓
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-2 bg-gradient-to-r from-blue-400 via-green-400 via-amber-300 to-red-500 rounded-full relative">
                                            <div className="absolute w-3 h-3 bg-white rounded-full shadow-md -top-0.5" style={{ left: '50%' }} />
                                        </div>
                                    </div>

                                    {/* Click prompt */}
                                    <div className="mt-4 text-center text-gray-500 text-sm flex items-center justify-center gap-1">
                                        <span>Click to calculate your BMI</span>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <BMICalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
