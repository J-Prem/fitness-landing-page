import { motion } from 'framer-motion'
import {
    FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin, FiArrowRight
} from 'react-icons/fi'
import { GiMuscleUp } from 'react-icons/gi'

const footerLinks = {
    Platform: ['Find Trainers', 'Browse Programs', 'Pricing Plans', 'BMI Calculator', 'Success Stories'],
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Partnerships'],
    Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refund Policy'],
}

const socials = [
    { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: FiYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
]

export default function Footer() {
    return (
        <footer className="bg-gray-950 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                                <GiMuscleUp className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-black text-white">
                                Fit<span className="gradient-text">Pro</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            India's #1 fitness platform connecting you with certified trainers, personalized plans,
                            and a community that keeps you accountable.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2.5 text-sm text-gray-400">
                            <div className="flex items-center gap-2.5">
                                <FiMail className="text-red-500 flex-shrink-0" />
                                <span>hello@fitpro.in</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FiPhone className="text-red-500 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FiMapPin className="text-red-500 flex-shrink-0" />
                                <span>Bandra West, Mumbai, India</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3 mt-6">
                            {socials.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-400 hover:text-red-400 transition-colors hover:pl-1 duration-200 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="py-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-white font-bold mb-1">Stay Motivated 💪</h4>
                            <p className="text-gray-400 text-sm">Get weekly fitness tips, trainer spotlights, and exclusive deals.</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Newsletter email"
                                className="flex-1 md:w-64 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary py-2.5 px-4 flex items-center gap-1.5 text-sm whitespace-nowrap"
                                aria-label="Subscribe to newsletter"
                            >
                                Subscribe <FiArrowRight size={14} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    <p>© 2026 FitPro. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
