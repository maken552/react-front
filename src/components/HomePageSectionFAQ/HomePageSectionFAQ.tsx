import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'

import { FAQComponent } from '../FAQList/FAQList'

export const HomePageSectionFAQ = () => {
  return (
    <section className="border-t border-[#DFE7F2] bg-[#F4F8FE] py-[80px]">
      <Container>
        <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
          Got a question?
        </Typography>
        <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
          Drawing from our extensive experience, we&apos;ve compiled
          comprehensive answers.
        </Typography>
        <FAQComponent />
      </Container>
    </section>
  )
}
