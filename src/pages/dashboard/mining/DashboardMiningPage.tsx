import { Typography } from '@material-tailwind/react'

import { AppRoutePath } from '@/app/appRoutePath'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'

export const DashboardMiningPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Info Banner */}
      <div className="bg-[#FFD91533] p-2 text-center text-xs font-semibold leading-4 text-[#AF8900]">
        Profile is being reviewed. After full verification you will access all
        the functionalities
      </div>
      {/* Dashboard Header */}
      <DashboardHeader />
      {/* Dashboard Main Container */}
      <section className="mx-auto mt-[32px] w-full max-w-[720px] px-6">
        <div className="px-8">
          <Typography className="font-semibold leading-4 text-[#000]">
            Mining
          </Typography>
          <Typography className="mt-2 text-sm leading-6 text-[#909499]">
            Most affordable way to start earning BTC. Get Bitcoins daily from
            anywhere in the world, starting at just $150.
          </Typography>
        </div>
        <div className="grid grid-cols-3 gap-6 py-6 max-sm:grid-cols-1">
          <DashboardCard className="w-full">
            <div className="flex flex-col gap-2">
              <Typography className="text-sm leading-4 text-[#909499]">
                Total Mining Power
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-[24px] font-medium leading-[32px] text-[#0a0b0d]">
                  0.00
                </Typography>
                <div className="rounded-[8px] bg-[#0667EA1A] p-1 text-[#1467EA]">
                  <Typography className="text-xs font-medium leading-4">
                    Th/S
                  </Typography>
                </div>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard className="w-full">
            <div className="flex flex-col gap-2">
              <Typography className="text-sm leading-4 text-[#909499]">
                ASICs Rented
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-[24px] font-medium leading-[32px] text-[#0a0b0d]">
                  0.00
                </Typography>
                <div className="rounded-[8px] bg-[#0667EA1A] p-1 text-[#1467EA]">
                  <Typography className="text-xs font-medium leading-4">
                    ASICs
                  </Typography>
                </div>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard className="w-full">
            <div className="flex flex-col gap-2">
              <Typography className="text-sm leading-4 text-[#909499]">
                Total Mining Reward
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-[24px] font-medium leading-[32px] text-[#0a0b0d]">
                  0.00
                </Typography>
                <div className="rounded-[8px] bg-[#FEEFDD] p-1 text-[#D87400]">
                  <Typography className="text-xs font-medium leading-4">
                    BTC
                  </Typography>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
        <div className="flex gap-6 pb-6">
          <DashboardCard className="w-full">
            <Typography className="text-[16px] font-medium leading-6 text-[#000]">
              Cloud Mining
            </Typography>
            <Typography className="mt-2 text-xs leading-4 text-[#909499]">
              Most affordable way to start earning BTC. Get Bitcoins daily from
              anywhere in the world, starting at just $150.
            </Typography>
            <button className="flex items-center gap-2 pt-4 text-sm font-medium leading-4 text-[#0667EA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.66675 6.66667H13.3334L7.33341 15.3333V9.33334H2.66675L8.66675 0.666672V6.66667Z"
                  fill="#0667EA"
                />
              </svg>
              Start Mining
            </button>
          </DashboardCard>
          <DashboardCard className="w-full">
            <Typography className="text-[16px] font-medium leading-6 text-[#000]">
              Miner Rental
            </Typography>
            <Typography className="mt-2 text-xs leading-4 text-[#909499]">
              Rent top-notch ASIC Miners hosted at ECOS Data Centre! Start
              mining now.
            </Typography>
            <button className="flex items-center gap-2 pt-4 text-sm font-medium leading-4 text-[#0667EA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.66675 6.66667H13.3334L7.33341 15.3333V9.33334H2.66675L8.66675 0.666672V6.66667Z"
                  fill="#0667EA"
                />
              </svg>
              Start Mining
            </button>
          </DashboardCard>
        </div>
        <DashboardCard className="w-full">
          <Typography className="text-[16px] font-medium leading-6 text-[#000]">
            Bitcoin Miners
          </Typography>
          <Typography className="mt-2 text-xs leading-4 text-[#909499]">
            Get your Bitcoin Miner in DigVault Data Centre and control your BTC
            rewards remotely!
          </Typography>
          <button className="flex items-center gap-2 pt-4 text-sm font-medium leading-4 text-[#0667EA]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.66675 6.66667H13.3334L7.33341 15.3333V9.33334H2.66675L8.66675 0.666672V6.66667Z"
                fill="#0667EA"
              />
            </svg>
            Get an offer
          </button>
        </DashboardCard>
      </section>
      <footer className="mt-auto flex items-center justify-center gap-6 py-8">
        <a
          href={AppRoutePath.LEGAL()}
          className="text-xs leading-[20px] text-[#8d91a1]"
        >
          Legal
        </a>
        <a
          href={AppRoutePath.PRIVACY()}
          className="text-xs leading-[20px] text-[#8d91a1]"
        >
          Privacy
        </a>
        <a
          href={AppRoutePath.TERMS()}
          className="text-xs leading-[20px] text-[#8d91a1]"
        >
          Terms & Conditions
        </a>
      </footer>
    </div>
  )
}
