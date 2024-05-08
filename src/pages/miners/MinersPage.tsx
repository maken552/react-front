import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { HomePageSectionFAQ } from '@/components/HomePageSectionFAQ/HomePageSectionFAQ'
import { HomePageSectionMining } from '@/components/HomePageSectionMining/HomePageSectionMining'
import { HomePageSectionWhy } from '@/components/HomePageSectionWhy/HomePageSectionWhy'

export const MinersPage = () => {
  return (
    <>
      <Header />
      <section className="bg-[#F4F8FE]">
        <Container className="py-[80px]">
          <Typography className="mx-auto max-w-[640px] text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
            All-in-one Solution <br /> for Bitcoin Mining
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Get Bitcoins daily from anywhere in the world, starting at just
            $150.
          </Typography>
        </Container>
        <img src="/mining-page__banner.png" className="mx-auto px-6" />
      </section>

      <HomePageSectionMining />

      <Container className="py-20">
        <div className="grid grid-cols-3 gap-16 max-sm:grid-cols-1">
          <div className="flex flex-col items-center justify-center gap-4">
            <Typography className="text-[32px] font-bold leading-[32px] text-[#0667ea]">
              24 Hours
            </Typography>
            <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
              That&apos;s the time from contract purchase to the first <br />{' '}
              BTC payout.
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Typography className="text-[32px] font-bold leading-[32px] text-[#0667ea]">
              $150
            </Typography>
            <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
              Now you can start mining from <br /> as low as $150!
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Typography className="text-[32px] font-bold leading-[32px] text-[#0667ea]">
              1 App
            </Typography>
            <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
              Everything for BTC on your phone: Buy, sell, store, <br />{' '}
              exchange, and withdraw.
            </Typography>
          </div>
        </div>
      </Container>

      <HomePageSectionWhy />

      <HomePageSectionFAQ />

      <Footer />
    </>
  )
}
