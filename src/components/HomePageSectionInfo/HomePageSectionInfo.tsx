/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Typography } from '@material-tailwind/react'
import cn from 'classnames'
import { isMobile } from 'react-device-detect'

import { IconCheckFill } from '@/assets/Icons'
import { Button } from '@/atoms/Button/Button'
import { Container } from '@/atoms/Container/Container'
import { IsNumberOdd } from '@/helper/helper'
import { HomePageInfoSectionMock } from '@/mocks/HomePageMocks'

export const HomePageSectionInfo = () => {
  return (
    <section className="my-[80px] flex flex-col gap-[160px]">
      {HomePageInfoSectionMock.map(
        ({ title, desc, features, banner }, index) => (
          <Container
            key={index}
            className="grid grid-cols-2 gap-[80px] max-sm:grid-cols-1"
          >
            <div
              className={
                cn('my-auto', IsNumberOdd(index) && !isMobile && 'order-2')!
              }
            >
              <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
                {title}
              </Typography>
              <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
                {desc}
              </Typography>
              <div className="my-[40px] flex flex-col gap-4">
                {features.map(({ name }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <IconCheckFill className="shrink-0 text-[#01A76A]" />
                    <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                      {name}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button type="primary">Try Now</Button>
                <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
                  Learn more
                </button>
              </div>
            </div>
            <img
              src={banner}
              className={cn(IsNumberOdd(index) && !isMobile && 'order-1')}
            />
          </Container>
        )
      )}
    </section>
  )
}
