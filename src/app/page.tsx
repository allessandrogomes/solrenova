import '@/app/globals.scss'
import styles from './styles.module.scss'
import Header from "@/components/Header"
import IntroSection from '@/components/IntroSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import RecentProjectsSection from '@/components/RecentProjectsSection'
import AboutUsSection from '@/components/AboutUsSection'
import OurServicesSection from '@/components/OurServicesSection'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import { customTheme } from '@/theme/breakpoints'

export default function Home() {
    return (
        <div className={styles.container}>
            <ThemeProvider theme={customTheme}>
                <Header />
            </ThemeProvider>
            <IntroSection />
            <WhyChooseUsSection />
            <OurServicesSection />
            <RecentProjectsSection />
            <AboutUsSection />
            <Footer />
        </div>
    )
}