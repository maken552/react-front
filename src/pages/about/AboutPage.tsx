import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { HomePageSectionFAQ } from '@/components/HomePageSectionFAQ/HomePageSectionFAQ'
import { HomePageSectionWhy } from '@/components/HomePageSectionWhy/HomePageSectionWhy'

export const AboutPage = () => {
  return (
    <>
      <Header />

      <Container className="mb-[120px] mt-16 max-sm:my-8">
        <div>
          <Typography className="mx-auto max-w-[640px] text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
            Team that makes <br /> impossible possible
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            We build the best environment for you
          </Typography>
        </div>
        <img
          src="/about-page__banner.png"
          alt="About page banner"
          className="mx-auto h-full w-full max-w-[800px] pt-20"
        />
        <Typography className="mt-16 text-[32px] font-semibold leading-8 text-[#0F1C36] max-sm:text-[24px]">
          About
        </Typography>
        <p className="mt-4 w-full text-base font-normal leading-6 text-[#4B5568] max-sm:text-sm">
          From its humble beginnings with equipment sales, DigVault has evolved
          into the leading global player in mining, boasting its own investment
          infrastructure. The company now boasts a diverse product line,
          including six operational projects: cloud mining, ASIC mining,
          investment portfolios, hosting, wallet services, and a cryptocurrency
          exchange.
        </p>
        <p className="mt-4 w-full text-base font-normal leading-6 text-[#4B5568] max-sm:text-sm">
          Established in 2017 within the Free Economic Zone (FEZ) of Canada, the
          ECOS company was a collaborative venture between the Government of the
          Canada. This FEZ serves as a distinctive hub for fostering projects
          within the crypto and blockchain sectors.
        </p>
        <p className="mt-4 w-full text-base font-normal leading-6 text-[#4B5568] max-sm:text-sm">
          From Customer Support to Lawyers & Forensic Accountants, anyone you
          reach within our company is ideally placed to assist you. Starting
          with the initial process of gathering the evidence, all the way to
          confronting the scammers and getting your money back, our team will be
          on your side every step of the way.
        </p>
        <div className="my-[80px] grid grid-cols-3 gap-10 max-sm:my-8 max-sm:grid-cols-1 max-sm:gap-4">
          <div className="rounded-[16px] bg-[#EDF3FF] p-6">
            <Typography className="text-[24px] font-semibold leading-8 text-[#2B6EF0]">
              200K+
            </Typography>
            <p className="mt-2 w-full text-base font-normal leading-6 text-[#0F1C36]">
              Transactions
            </p>
          </div>
          <div className="rounded-[16px] bg-[#EDF3FF] p-6">
            <Typography className="text-[24px] font-semibold leading-8 text-[#2B6EF0]">
              6K+
            </Typography>
            <p className="mt-2 w-full text-base font-normal leading-6 text-[#0F1C36]">
              Mined BTC
            </p>
          </div>
          <div className="rounded-[16px] bg-[#EDF3FF] p-6">
            <Typography className="text-[24px] font-semibold leading-8 text-[#2B6EF0]">
              500K+
            </Typography>
            <p className="mt-2 w-full text-base font-normal leading-6 text-[#0F1C36]">
              Clients
            </p>
          </div>
        </div>
      </Container>

      <HomePageSectionWhy />

      <HomePageSectionFAQ />
      <Footer />
    </>
  )
}
