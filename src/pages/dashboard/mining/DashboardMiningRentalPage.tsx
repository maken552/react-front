import { Typography } from '@material-tailwind/react'
import { useState } from 'react'

import { AppRoutePath } from '@/app/appRoutePath'
import { Button } from '@/atoms/Button/Button'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DialogVerification } from '@/components/DialogVerification/DialogVerification'

export const DashboardMiningRentalPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
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
          <div className="mt-8 grid grid-cols-2 gap-6">
            <CloudMinerCard
              name="Bitmain Antminer S19K Pro 115TH/s"
              price="$1600"
              duration="12 Months"
              perDay="$4.37"
              onClick={handleOpen}
            />
            <CloudMinerCard
              name="Bitmain Antminer S19K Pro 115TH/s"
              price="$2150"
              duration="24 Months"
              perDay="$2.94"
              onClick={handleOpen}
            />
            <CloudMinerCard
              name="Bitmain Antminer S21 188TH/s"
              price="$3450"
              duration="12 Months"
              perDay="$9.43"
              onClick={handleOpen}
            />
            <CloudMinerCard
              name="Bitmain Antminer S19K Pro 115TH/s"
              price="$4650"
              duration="24 Months"
              perDay="$6.35"
              onClick={handleOpen}
            />
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
      <DialogVerification open={open} handleOpen={handleOpen} />
    </>
  )
}

interface ICloudMinerCard {
  name: string
  price: string
  duration: string
  perDay: string
  onClick: () => void
}

export const CloudMinerCard = ({
  name,
  price,
  duration,
  perDay,
  onClick
}: ICloudMinerCard) => {
  return (
    <DashboardCard className="bg-[#fff]">
      <Typography className="text-center font-medium leading-4 text-[#000]">
        {name}
      </Typography>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
          <Typography className="text-sm font-semibold leading-4 text-[#909499]">
            Rental Price
          </Typography>
          <Typography className="text-sm font-medium leading-4 text-[#0667ea]">
            {price}
          </Typography>
        </div>
        <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
          <Typography className="text-sm font-semibold leading-4 text-[#909499]">
            Duration
          </Typography>
          <Typography className="text-sm font-medium leading-4 text-[#000]">
            {duration}
          </Typography>
        </div>
        <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
          <Typography className="text-sm font-semibold leading-4 text-[#909499]">
            ASIC Rent Per Day
          </Typography>
          <Typography className="text-sm font-medium leading-4 text-[#0667ea]">
            {perDay}
          </Typography>
        </div>
      </div>
      <Button type="primary" onClick={onClick}>
        Rent
      </Button>
    </DashboardCard>
  )
}
