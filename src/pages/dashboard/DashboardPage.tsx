import { Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DialogVerification } from '@/components/DialogVerification/DialogVerification'
import { RootState } from '@/store'

export const DashboardPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const balance = useSelector((state: RootState) => state.user.balance_usd)

  const coinTable = useSelector(
    (state: RootState) => state.user.relationships?.wallets
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
        <section className="mx-auto my-[32px] w-full max-w-[720px] px-6">
          {/* Estimated Balance */}
          <DashboardCard className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
            <div className="flex flex-col gap-2 max-sm:w-full max-sm:justify-start">
              <Typography className="text-sm leading-4 text-[#909499]">
                Estimated Balance
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-[24px] font-medium leading-[32px] text-[#0a0b0d]">
                  {balance && balance.toFixed(2)}
                </Typography>
                <div className="rounded-[8px] bg-[#F7F7F9] px-2 py-1">
                  <Typography className="text-xs font-medium leading-4 text-[#0a0b0d]">
                    USD
                  </Typography>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-2 max-sm:w-full max-sm:justify-start">
              <button
                className="rounded-[32px] bg-[#FFD915] px-4 py-2 text-sm font-semibold leading-6 text-[#1a212a]"
                onClick={handleOpen}
              >
                Deposit
              </button>
              <button
                className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
                onClick={handleOpen}
              >
                Withdraw
              </button>
              <button
                className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
                onClick={handleOpen}
              >
                Buy Crypto
              </button>
            </div>
          </DashboardCard>
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
          <DashboardCard>
            <Typography className="text-[16px] font-medium leading-6 text-[#000]">
              Holdings
            </Typography>
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th>
                    <Typography className="text-xs leading-4 text-[#909499]">
                      Popular Coins
                    </Typography>
                  </th>
                  <th>
                    <Typography className="text-end text-xs leading-4 text-[#909499]">
                      Amount
                    </Typography>
                  </th>
                  <th>
                    <Typography className="text-end text-xs leading-4 text-[#909499]">
                      Coin Price
                    </Typography>
                  </th>
                  <th>
                    <Typography className="mr-2 text-end text-xs leading-4 text-[#909499]">
                      Actions
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {coinTable &&
                  coinTable.map((coin, index) => (
                    <tr key={index}>
                      <td>
                        <div className="flex items-center gap-3">
                          <img
                            src={coin.relationships.coin.logo}
                            className="h-6 w-6"
                          />
                          <div className="flex flex-col">
                            <Typography className="text-[16px] font-medium leading-6 text-[#000]">
                              {coin.symbol}
                              {/* BTC */}
                            </Typography>
                            <Typography className="text-xs leading-4 text-[#909499]">
                              {coin.relationships.coin.name}
                              {/* Bitcoin */}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-end gap-3">
                          <div className="flex flex-col">
                            <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                              {coin.balance}
                            </Typography>
                            <Typography className="text-end text-xs leading-4 text-[#909499]">
                              {`${coin.to_usd && coin.to_usd.toFixed(2)}$`}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-end gap-3">
                          <div className="flex flex-col">
                            <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                              {coin.usd_price.USD &&
                                coin.usd_price.USD.toFixed(2)}
                              {/* $70,572 */}
                            </Typography>
                            <Typography className="text-end text-xs leading-4 text-[#909499]">
                              {`${
                                coin.usd_price.percent_change_1h &&
                                coin.usd_price.percent_change_1h.toFixed(2)
                              }%`}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-end">
                          <button
                            className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
                            onClick={handleOpen}
                          >
                            Buy
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
              {/* <tbody>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src="/logo_eth.png" className="h-6 w-6" />
                      <div className="flex flex-col">
                        <Typography className="text-[16px] font-medium leading-6 text-[#000]">
                          ETH
                        </Typography>
                        <Typography className="text-xs leading-4 text-[#909499]">
                          Ethereum
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex flex-col">
                        <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                          0.00
                        </Typography>
                        <Typography className="text-end text-xs leading-4 text-[#909499]">
                          0.00
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex flex-col">
                        <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                          $70,572
                        </Typography>
                        <Typography className="text-end text-xs leading-4 text-[#909499]">
                          0.00%
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end">
                      <button
                        className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
                        onClick={handleOpen}
                      >
                        Buy
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src="/logo_bnb.png" className="h-6 w-6" />
                      <div className="flex flex-col">
                        <Typography className="text-[16px] font-medium leading-6 text-[#000]">
                          BNB
                        </Typography>
                        <Typography className="text-xs leading-4 text-[#909499]">
                          BNB
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex flex-col">
                        <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                          0.00
                        </Typography>
                        <Typography className="text-end text-xs leading-4 text-[#909499]">
                          0.00
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-3">
                      <div className="flex flex-col">
                        <Typography className="text-end text-[16px] font-medium leading-6 text-[#000]">
                          $70,572
                        </Typography>
                        <Typography className="text-end text-xs leading-4 text-[#909499]">
                          0.00%
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-end">
                      <button
                        className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
                        onClick={handleOpen}
                      >
                        Buy
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody> */}
            </table>
          </DashboardCard>
          <div className="flex gap-6 py-6">
            <DashboardCard className="w-full">
              <Typography className="text-[16px] font-medium leading-6 text-[#000]">
                Cloud Mining
              </Typography>
              <Typography className="mt-2 text-xs leading-4 text-[#909499]">
                Most affordable way to start earning BTC. Get Bitcoins daily
                from anywhere in the world, starting at just $500.
              </Typography>
              <Link to={AppRoutePath.DASHBOARD_MINING_CLOUD()}>
                <button
                  className="flex items-center gap-2 pt-4 text-sm font-medium leading-4 text-[#0667EA]"
                  // onClick={handleOpen}
                >
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
              </Link>
            </DashboardCard>
            <DashboardCard className="w-full">
              <Typography className="text-[16px] font-medium leading-6 text-[#000]">
                Miner Rental
              </Typography>
              <Typography className="mt-2 text-xs leading-4 text-[#909499]">
                Rent top-notch ASIC Miners hosted at ECOS Data Centre! Start
                mining now.
              </Typography>
              <Link to={AppRoutePath.DASHBOARD_MINING_RENT()}>
                <button
                  className="flex items-center gap-2 pt-4 text-sm font-medium leading-4 text-[#0667EA]"
                  // onClick={handleOpen}
                >
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
              </Link>
            </DashboardCard>
          </div>
          <DashboardCard className="w-full">
            <Typography className="text-[16px] font-medium leading-6 text-[#000]">
              Bitcoin Miners
            </Typography>
            <Typography className="mt-2 text-xs leading-4 text-[#909499]">
              Get your Bitcoin Miner in DigVault Data Centre and control your
              BTC rewards remotely!
            </Typography>
            <Link to={AppRoutePath.DASHBOARD_MINING_BITCOIN()}>
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
            </Link>
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
      <DialogVerification open={open} handleOpen={handleOpen} />
    </>
  )
}
