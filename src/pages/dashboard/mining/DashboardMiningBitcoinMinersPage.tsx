import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { AppRoutePath } from '@/app/appRoutePath'
import IconBTC from '@/assets/Icons/IconBTC'
import IconUSD from '@/assets/Icons/IconUSD'
import { Button } from '@/atoms/Button/Button'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DialogSubmitted } from '@/components/DialogSubmitted/DialogSubmitted'
import { RootState } from '@/store'

export const DashboardMiningBitcoinMinersPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const bitcoinMinerList = useSelector(
    (state: RootState) => state.rentals.bitcoinMinerList
  )

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
              Bitcoin Miners
            </Typography>
            <Typography className="mt-2 text-sm leading-6 text-[#909499]">
              You can select a new solution, purchase it on-line and it will be
              allocated on DigVault hosting.
            </Typography>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {bitcoinMinerList.map((rental, index) => (
              <PackageCard
                key={index}
                name={rental.name}
                price={rental.price && parseFloat(rental.price).toFixed(2)}
                dailyUSD={`${
                  rental.ul.usd.daily && rental.ul.usd.daily.toFixed(2)
                } USD`}
                monthlyUSD={`${
                  rental.ul.usd.monthly && rental.ul.usd.monthly.toFixed(2)
                } USD`}
                yearlyUSD={`${
                  rental.ul.usd.yearly && rental.ul.usd.yearly.toFixed(2)
                } USD`}
                dailyBTC={`${
                  rental.btc_daily_income &&
                  parseFloat(rental.btc_daily_income).toFixed(4)
                } BTC`}
                monthlyBTC={`${
                  rental.ul.btc.monthly && rental.ul.btc.monthly.toFixed(4)
                } BTC`}
                yearlyBTC={`${
                  rental.ul.btc.yearly && rental.ul.btc.yearly.toFixed(4)
                } BTC`}
                onClick={handleOpen}
              />
            ))}
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

interface IPackageCard {
  name: string
  price: string
  dailyUSD: string
  monthlyUSD: string
  yearlyUSD: string
  dailyBTC: string
  monthlyBTC: string
  yearlyBTC: string
  onClick: () => void
}

export const PackageCard = ({
  name,
  price,
  dailyUSD,
  monthlyUSD,
  yearlyUSD,
  dailyBTC,
  monthlyBTC,
  yearlyBTC,
  onClick
}: IPackageCard) => {
  return (
    <DashboardCard className="bg-[#fff]">
      <div className="flex items-center justify-between">
        <div className="ml-4 flex flex-col gap-2">
          <Typography className="text-sm font-normal leading-4 text-[#909499] ">
            Package
          </Typography>
          <Typography className="text-[16px] font-medium leading-6 text-[#000]">
            {name}
          </Typography>
        </div>
        <div className="rounded-[32px] bg-[#F4F8FD] px-4 py-1 text-sm font-semibold leading-6 text-[#0667ea]">
          {price}$
        </div>
      </div>
      <div className="flex flex-col gap-2 py-4">
        <PackageCardItem
          icon={<IconUSD />}
          name="Daily Income"
          value={dailyUSD}
        />
        <PackageCardItem
          icon={<IconUSD />}
          name="Montly Income"
          value={monthlyUSD}
        />
        <PackageCardItem
          icon={<IconUSD />}
          name="Yearly Income"
          value={yearlyUSD}
        />
        <PackageCardItem
          icon={<IconBTC />}
          name="Daily Income"
          value={dailyBTC}
        />
        <PackageCardItem
          icon={<IconBTC />}
          name="Montly Income"
          value={monthlyBTC}
        />
        <PackageCardItem
          icon={<IconBTC />}
          name="Yearly Income"
          value={yearlyBTC}
        />
      </div>
      <Button type="primary" onClick={onClick}>
        Buy and Allocate
      </Button>
    </DashboardCard>
  )
}

interface IPackageCardItem {
  icon: React.ReactNode
  name: string
  value: string
}

const PackageCardItem = ({ icon, name, value }: IPackageCardItem) => {
  return (
    <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
      <div className="flex items-center gap-2">
        {icon}
        <Typography className="text-sm font-medium leading-4">
          {name}
        </Typography>
      </div>
      <Typography className="text-sm font-semibold leading-4 text-[#000]">
        {value}
      </Typography>
    </div>
  )
}
