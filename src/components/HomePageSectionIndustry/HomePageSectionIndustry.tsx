import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { IndustryLogosMock } from '@/mocks/HomePageMocks'

export const HomePageSectionIndustry = () => {
  return (
    <section className="bg-[#0967E9]">
      <Container>
        <div className="py-[80px]">
          <Typography className="text-center text-[16px] font-normal leading-6 text-[#fff]/75">
            Teaming up with industry giants elevates our products and services
            to new heights.
          </Typography>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-16">
            {IndustryLogosMock.map(({ image }, index) => (
              <img key={index} src={image} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
