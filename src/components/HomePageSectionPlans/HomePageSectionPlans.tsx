import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { MininPlanMocks } from '@/mocks/HomePageMocks'

export const HomePageSectionPlans = () => {
  return (
    <section className="bg-[#F4F8FE] py-[80px]">
      <Container>
        <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
          Choose ASIC-based Mining Plans
        </Typography>
        <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
          Lease hash rate directly from leading ASICs to optimize mining
          efficiency to the fullest. Simply select a plan and generate a
          contract with just a few clicks.
        </Typography>
        <div className="mt-[80px] grid grid-cols-3 gap-[20px] max-sm:grid-cols-1">
          {MininPlanMocks.map(
            ({ label, title, name, price, service, rating }, index) => (
              <div key={index} className="rounded-[16px] bg-[#fff] p-4">
                <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                  {label}
                </Typography>
                <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                  {title}
                </Typography>
                <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    ASIC-based mining plan
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    {name}
                  </Typography>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                    <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                      Price 1 TH/Day
                    </Typography>
                    <Typography className="font-medium leading-6 text-[#000]">
                      {price}
                    </Typography>
                  </div>
                  <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                    <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                      Service
                    </Typography>
                    <Typography className="font-medium leading-6 text-[#000]">
                      {service}
                    </Typography>
                  </div>
                </div>
                <div className="mt-[20px] flex items-center justify-between">
                  <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
                    Select
                  </button>
                  <div className="flex items-center gap-2 rounded-[8px] bg-[#357A301A] px-2 py-1">
                    <Typography className="text-xs leading-4 text-[#000]">
                      Rating
                    </Typography>
                    <Typography className="text-xs font-semibold leading-4 text-[#000]">
                      {rating}
                    </Typography>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-8 flex w-full items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#0667EA]" />
          <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
          <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
          <div className="h-2 w-2 rounded-full bg-[#CCD0D5]" />
        </div>
      </Container>
    </section>
  )
}
