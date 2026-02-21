import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { GiMuscleUp } from 'react-icons/gi'
import { useTheme } from '../App'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Programs', href: '#how-it-works' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/60 transition-shadow">
                            <GiMuscleUp className="text-white text-xl" />
                        </div>
                        <span className="text-xl font-black text-gray-900 dark:text-white">
                            Fit<span className="gradient-text">Pro</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="nav-link text-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                            className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </motion.button>

                        {/* CTA */}
                        <motion.a
                            href="#pricing"
                            onClick={(e) => handleNavClick(e, '#pricing')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:block btn-primary text-sm py-2 px-5"
                        >
                            Get Started
                        </motion.a>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-gray-700 dark:text-gray-300 font-medium py-2 px-3 rounded-lg hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-500 transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={(e) => handleNavClick(e, '#pricing')}
                                className="btn-primary text-center text-sm mt-2"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
