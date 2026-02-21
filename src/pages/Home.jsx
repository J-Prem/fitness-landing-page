import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrainerProfiles from '../components/TrainerProfiles'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import BMIPreview from '../components/BMIPreview'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <TrainerProfiles />
                <Features />
                <HowItWorks />
                <BMIPreview />
                <Pricing />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}
