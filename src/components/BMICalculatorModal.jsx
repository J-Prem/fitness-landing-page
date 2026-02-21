import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiActivity } from 'react-icons/fi'

function getBMIInfo(bmi) {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-400', bar: 'bg-blue-400', tips: ['Increase caloric intake with nutrient-dense foods', 'Focus on strength training to build muscle mass', 'Consult a nutritionist for a healthy weight gain plan', 'Eat protein-rich foods like chicken, fish, eggs, and legumes'] }
    if (bmi < 25) return { category: 'Normal Weight', color: 'text-green-400', bar: 'bg-green-400', tips: ['Maintain your current balanced diet', 'Continue regular exercise — 150 min/week minimum', 'Focus on building strength and endurance', 'Stay hydrated and prioritize sleep quality'] }
    if (bmi < 30) return { category: 'Overweight', color: 'text-amber-400', bar: 'bg-amber-400', tips: ['Create a moderate caloric deficit (300-500 kcal/day)', 'Incorporate cardio — at least 30 minutes daily', 'Reduce refined sugars and processed foods', 'Consider working with a certified personal trainer'] }
    return { category: 'Obese', color: 'text-red-400', bar: 'bg-red-400', tips: ['Consult a doctor before starting intensive exercise', 'Start with low-impact cardio like walking or swimming', 'Adopt a Mediterranean-style whole-food diet', 'Set small, achievable weekly goals and track progress'] }
}

function getBMIPosition(bmi) {
    const clamped = Math.min(Math.max(bmi, 15), 40)
    return ((clamped - 15) / (40 - 15)) * 100
}

export default function BMICalculatorModal({ isOpen, onClose }) {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('metric') // metric | imperial
    const [bmi, setBmi] = useState(null)
    const [bmiInfo, setBmiInfo] = useState(null)
    const [error, setError] = useState('')
    const modalRef = useRef(null)

    useEffect(() => {
        if (!isOpen) { setBmi(null); setError(''); setHeight(''); setWeight('') }
    }, [isOpen])

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    const calculate = () => {
        setError('')
        const h = parseFloat(height)
        const w = parseFloat(weight)
        if (!h || !w || h <= 0 || w <= 0) { setError('Please enter valid height and weight.'); return }

        let bmiVal
        if (unit === 'metric') {
            const hm = h / 100
            bmiVal = w / (hm * hm)
        } else {
            bmiVal = (703 * w) / (h * h)
        }

        if (bmiVal < 10 || bmiVal > 60) { setError('Values seem out of range. Please check your inputs.'); return }
        const rounded = parseFloat(bmiVal.toFixed(1))
        setBmi(rounded)
        setBmiInfo(getBMIInfo(rounded))
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="BMI Calculator"
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        initial={{ scale: 0.85, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl shadow-black/30 overflow-hidden"
                    >
                        {/* Top gradient bar */}
                        <div className="h-1.5 bg-gradient-to-r from-red-500 to-orange-500" />

                        {/* Header */}
                        <div className="flex items-center justify-between p-6 pb-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                                    <FiActivity className="text-white text-lg" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-gray-900 dark:text-white">BMI Calculator</h2>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Know your Body Mass Index</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                aria-label="Close modal"
                                className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center justify-center transition-colors"
                            >
                                <FiX size={18} />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">
                            {/* Unit Toggle */}
                            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                                {['metric', 'imperial'].map((u) => (
                                    <button
                                        key={u}
                                        onClick={() => { setUnit(u); setBmi(null); setHeight(''); setWeight('') }}
                                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all capitalize ${unit === u
                                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                            }`}
                                    >
                                        {u} {u === 'metric' ? '(cm/kg)' : '(in/lbs)'}
                                    </button>
                                ))}
                            </div>

                            {/* Inputs */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                        Height ({unit === 'metric' ? 'cm' : 'inches'})
                                    </label>
                                    <input
                                        type="number"
                                        id="bmi-height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all text-sm"
                                        min="1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                        Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                                    </label>
                                    <input
                                        type="number"
                                        id="bmi-weight"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all text-sm"
                                        min="1"
                                    />
                                </div>
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl px-4 py-2">
                                    ⚠️ {error}
                                </p>
                            )}

                            <button
                                onClick={calculate}
                                className="w-full btn-primary py-3.5 text-base"
                                aria-label="Calculate BMI"
                            >
                                Calculate My BMI 🏋️
                            </button>

                            {/* Result */}
                            <AnimatePresence>
                                {bmi && bmiInfo && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ type: 'spring', damping: 20 }}
                                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 space-y-4"
                                    >
                                        {/* BMI Score */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Your BMI Score</p>
                                                <motion.div
                                                    initial={{ scale: 0.5 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: 'spring', damping: 15 }}
                                                    className={`text-5xl font-black ${bmiInfo.color} mt-1`}
                                                >
                                                    {bmi}
                                                </motion.div>
                                            </div>
                                            <div className={`px-4 py-2 rounded-xl bg-white dark:bg-gray-700 shadow-sm`}>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Category</p>
                                                <p className={`font-black text-sm ${bmiInfo.color}`}>{bmiInfo.category}</p>
                                            </div>
                                        </div>

                                        {/* BMI Scale Bar */}
                                        <div>
                                            <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-green-400 via-amber-300 to-red-500">
                                                <motion.div
                                                    initial={{ left: '0%' }}
                                                    animate={{ left: `${getBMIPosition(bmi)}%` }}
                                                    transition={{ type: 'spring', damping: 20, delay: 0.2 }}
                                                    className="absolute -translate-x-1/2 -top-0.5 w-4 h-4 rounded-full bg-white border-2 border-gray-800 shadow-md"
                                                    style={{ top: '-2px' }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                                <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
                                            </div>
                                        </div>

                                        {/* Tips */}
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">💡 Health Tips</p>
                                            <ul className="space-y-1.5">
                                                {bmiInfo.tips.map((tip, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + i * 0.08 }}
                                                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                                                    >
                                                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                                                        {tip}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        <p className="text-xs text-gray-400 dark:text-gray-500">
                                            * BMI is a screening tool, not a diagnostic measure. Consult a healthcare professional for medical advice.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
