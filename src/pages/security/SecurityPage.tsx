import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { HomePageSectionFAQ } from '@/components/HomePageSectionFAQ/HomePageSectionFAQ'
import { HomePageSectionWhy } from '@/components/HomePageSectionWhy/HomePageSectionWhy'
import { SectionCertification } from '@/components/SectionCertification/SectionCertification'

const AuthorityLogos = [
  {
    img: '/logos/security/card01.png'
  },
  {
    img: '/logos/security/card02.png'
  },
  {
    img: '/logos/security/card03.png'
  },
  {
    img: '/logos/security/card04.png'
  },
  {
    img: '/logos/security/card05.png'
  },
  {
    img: '/logos/security/card06.png'
  },
  {
    img: '/logos/security/card07.png'
  },
  {
    img: '/logos/security/card08.png'
  },
  {
    img: '/logos/security/card09.png'
  }
]

export const SecurityPage = () => {
  return (
    <>
      <Header />
      <section className="bg-[#F4F8FD]">
        <Container className="py-20 max-sm:py-8">
          <div>
            <Typography className="mx-auto text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
              Protect Your Assets with DigVault&apos;s <br /> Robust Foundation
            </Typography>
            <Typography className="mx-auto mt-1 text-center text-[16px] font-normal leading-6 text-[#000]">
              Our strong business model ensures the safety of your funds and the
              robustness <br /> of our products.
            </Typography>
          </div>
        </Container>
      </section>
      <SectionCertification />
      <Container>
        <div className="py-20 text-center">
          <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
            DigVault collaborates with top-tier authorities in custody and
            compliance.
          </Typography>
          <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
            Our primary mission is the safety of our customers and their funds.
            To <br /> achieve this goal, we partner with prominent authorities
            and companies.
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-[20px] pb-20 max-sm:grid-cols-1">
          {AuthorityLogos.map(({ img }, index) => (
            <div
              key={index}
              className="flex h-[160px] w-full items-center justify-center rounded-[16px] border border-[#E2E6EA] bg-[#fff]"
            >
              <img src={img} className="max-h-[64px] max-w-[200px]" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 py-20 max-sm:grid-cols-1 max-sm:gap-10">
          <div className="my-auto flex flex-col items-center gap-4 pr-20 text-start max-sm:pr-0">
            <Typography className="w-full text-[24px] font-semibold leading-[32px] text-[#000]">
              Cryptocurrency Security Standard Level 3
            </Typography>
            <Typography className="w-full text-[16px] font-normal leading-6 text-[#000]">
              To underpin the robustness of the enterprise, DigVault is making
              use of our partners&apos; enterprise solutions which incorporate
              the Cryptocurrency Security Standard Level 3.
            </Typography>
          </div>
          <img src="/logos/security/KV00.png" />
        </div>
        <div className="grid grid-cols-2 py-20 max-sm:grid-cols-1 max-sm:gap-10">
          <img src="/logos/security/KV01.png" className="max-sm:order-2" />
          <div className="my-auto flex flex-col items-center gap-4 pl-20 text-start max-sm:pl-0">
            <Typography className="w-full text-[24px] font-semibold leading-[32px] text-[#000]">
              Data Protection and Confidentialityt
            </Typography>
            <Typography className="w-full text-[16px] font-normal leading-6 text-[#000]">
              Your personal information is contained behind secured networks and
              is only accessible to a limited number of persons who are required
              to keep the information confidential. All sensitive/credit
              information you supply is encrypted via Secure Socket Layer (SSL)
              technology.
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-2 py-20 max-sm:grid-cols-1 max-sm:gap-10">
          <div className="my-auto flex flex-col items-center gap-4 pr-20 text-start max-sm:pr-0">
            <Typography className="w-full text-[24px] font-semibold leading-[32px] text-[#000]">
              Accredited Information Security Management Systems
            </Typography>
            <Typography className="w-full text-[16px] font-normal leading-6 text-[#000]">
              ISO/IEC 27001 guarantees that DigVault&apos;s security
              infrastructure is of the highest standard, thus ensuring the
              safety of the enterprise and minimizing risks for all clients and
              investors.
            </Typography>
          </div>
          <img src="/logos/security/KV02.png" />
        </div>
      </Container>
      <HomePageSectionWhy />
      <HomePageSectionFAQ />
      <Footer />
    </>
  )
}
