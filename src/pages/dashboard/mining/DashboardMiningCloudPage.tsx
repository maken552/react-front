import { Typography } from '@material-tailwind/react'
import { useState } from 'react'

import { AppRoutePath } from '@/app/appRoutePath'
import { Button } from '@/atoms/Button/Button'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DialogSubmitted } from '@/components/DialogSubmitted/DialogSubmitted'

export const DashboardMiningCloudPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const [hashrate, setHashrate] = useState(0)

  const increaseHashrate = () => {
    setHashrate(hashrate + 0.1)
  }

  const decreateHashrate = () => {
    if (hashrate - 0.1 > 0) {
      setHashrate(hashrate - 0.1)
    } else {
      setHashrate(0)
    }
  }

  return (
    <>
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
              Cloud Mining
            </Typography>
            <Typography className="mt-2 text-sm leading-6 text-[#909499]">
              Most affordable way to start earning BTC. Get Bitcoins daily from
              anywhere in the world, starting at just $150.
            </Typography>
          </div>
          <div className="mt-8">
            <DashboardCard className="w-full">
              <Typography className="ml-6 leading-4 text-[#000]">
                Select Harshrate
              </Typography>
              <div className="mt-4 flex items-center justify-between rounded-[17px] bg-[#F4F8FD] px-6 py-4">
                <button
                  onClick={decreateHashrate}
                  className="flex h-[40px] w-[56px] items-center justify-center rounded-[32px] border border-[#E4E4E4] bg-[#fff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M5 11V13H19V11H5Z" fill="black" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.1665 6.66669H13.8332L7.83317 15.3334V9.33335H3.1665L9.1665 0.666687V6.66669Z"
                      fill="#0667EA"
                    />
                  </svg>
                  <Typography className="text-[24px] font-medium leading-[32px] text-[#0a0b0d]">
                    {hashrate.toFixed(2)}
                  </Typography>
                  <div className="rounded-[8px] bg-[#FFD915] px-2 py-1 text-sm font-semibold leading-4 text-[#0a0b0d]">
                    TH/s
                  </div>
                </div>
                <button
                  onClick={increaseHashrate}
                  className="flex h-[40px] w-[56px] items-center justify-center rounded-[32px] border border-[#E4E4E4] bg-[#fff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex w-full items-center justify-end">
                <Button onClick={handleOpen} type="primary" className="mt-4">
                  Buy Hashrate
                </Button>
              </div>
            </DashboardCard>
          </div>
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
      <DialogSubmitted open={open} handleOpen={handleOpen} />
    </>
  )
}
