import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { Container } from '@/atoms/Container/Container'

export const HomePageHero = () => {
  return (
    <section className="bg-[#0967E9]">
      <Container>
        <div className="grid grid-cols-2 gap-[80px] py-[80px] max-sm:grid-cols-1">
          <Typography className="text-[56px] font-semibold leading-[72px] text-[#fff]">
            Simplified Mining, Automated Earning.
          </Typography>
          <div>
            <Typography className="text-[16px] font-normal leading-6 text-[#fff]">
              DigVault constitutes a Bitcoin mining environment equipped with
              diverse tools facilitating the accrual of rewards from
              cryptocurrency assets. Start earning already today,
            </Typography>
            <div className="mt-8 flex items-center gap-2">
              <Link to={AppRoutePath.SIGNUP()}>
                <button className="rounded-[32px] bg-[#FFD915] px-4 py-2 text-sm font-semibold leading-6 text-[#1a212a] hover:bg-[#ffe044] active:bg-[#e5c313]">
                  Start Now
                </button>
              </Link>
              <Link to={AppRoutePath.CLOUD()}>
                <button className="rounded-[32px] bg-[#3885EE] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#5f9df1] active:bg-[#3277d6]">
                  How it Works?
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img src="/home-page__banner.png" />
      </Container>
    </section>
  )
}
