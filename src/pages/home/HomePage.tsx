import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { HomePageBenefitsCards } from '@/components/HomePageBenefitsCards/HomePageBenefitsCards'
import { HomePageHero } from '@/components/HomePageHero/HomePageHero'
import { HomePageSectionFAQ } from '@/components/HomePageSectionFAQ/HomePageSectionFAQ'
import { HomePageSectionIndustry } from '@/components/HomePageSectionIndustry/HomePageSectionIndustry'
import { HomePageSectionInfo } from '@/components/HomePageSectionInfo/HomePageSectionInfo'
import { HomePageSectionMining } from '@/components/HomePageSectionMining/HomePageSectionMining'
import { HomePageSectionPlans } from '@/components/HomePageSectionPlans/HomePageSectionPlans'
import { HomePageSectionWhy } from '@/components/HomePageSectionWhy/HomePageSectionWhy'

export const HomePage = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* Hero */}
      <HomePageHero />

      {/* Section: Logos */}
      <HomePageSectionIndustry />

      {/* Section: Benefits */}
      <HomePageBenefitsCards />

      {/* Section: Info Cards */}
      <HomePageSectionInfo />

      {/* Section: Mining */}
      <HomePageSectionMining />

      {/* Choose Plans Section */}
      <HomePageSectionPlans />

      {/* Why DigVault Section */}
      <HomePageSectionWhy />

      {/* FAQ List */}
      <HomePageSectionFAQ />

      {/* FOOTER */}
      <Footer />
    </>
  )
}
