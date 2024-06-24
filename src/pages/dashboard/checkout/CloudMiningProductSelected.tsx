import { Radio, Typography } from '@material-tailwind/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { AppRoutePath, DOMAIN } from '@/app/appRoutePath'
import IconBTC from '@/assets/Icons/IconBTC'
import IconUSD from '@/assets/Icons/IconUSD'
import { Button } from '@/atoms/Button/Button'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'
import { DialogAmount } from '@/components/DialogAmount/DialogAmount'

export const CloudMiningProductSelected = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const getDataFromCart = () => {
    axios
      .get(`${DOMAIN}/api/cart/cartables`)
      .then(async function (response) {
        console.log('/cart/cartables', response)
      })
      .catch(function (error) {
        console.log('/cart/cartables', error)
      })
  }

  const AddCartableToCart = () => {
    axios
      .post(`${DOMAIN}/api/carts/add`, {
        // cartable_type: //one of cartables
        // cartable_id: 1
      })
      .then(async function (response) {
        console.log('/api/carts/add', response)
      })
      .catch(function (error) {
        console.log('/api/carts/add', error)
      })
  }

  useEffect(() => {
    getDataFromCart()
  }, [])

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
              Product Checkout
            </Typography>
            <Typography className="mt-2 text-sm leading-6 text-[#909499]">
              Please see below product you have selected and process with
              payment.
            </Typography>
          </div>
          <article>
            <div className="flex flex-col gap-4 pt-8">
              <Typography className="ml-[34px] text-sm leading-6 text-[#909499]">
                Product
              </Typography>
              <DashboardCard>
                <Typography className="ml-4 font-medium leading-4 text-[#000]">
                  Bitmain Antminer S19K Pro 115TH/s
                </Typography>
                <div className="grid grid-cols-3 gap-2 pt-4">
                  <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
                    <Typography className="text-sm font-semibold leading-4 text-[#909499]">
                      Rental Price
                    </Typography>
                    <Typography className="text-sm font-medium leading-4 text-[#0667EA]">
                      $1600
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
                    <Typography className="text-sm font-semibold leading-4 text-[#909499]">
                      Duration
                    </Typography>
                    <Typography className="text-sm font-medium leading-4 text-[#000]">
                      12 Months
                    </Typography>
                  </div>
                  <div className="flex items-center justify-between rounded-[8px] bg-[#F4F8FD] p-3">
                    <Typography className="text-sm font-semibold leading-4 text-[#909499]">
                      ASIC Rent Per Day
                    </Typography>
                    <Typography className="text-sm font-medium leading-4 text-[#0667EA]">
                      $4.37
                    </Typography>
                  </div>
                </div>
              </DashboardCard>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <Typography className="ml-[34px] text-sm leading-6 text-[#909499]">
                Select Currency
              </Typography>
              <DashboardCard>
                <div className="grid grid-cols-3 gap-2 pt-4">
                  {/* TODO: change container styles on selected */}
                  <div className="radio-container rounded-[8px] border border-[#F0F0F0] px-4 py-2">
                    <Radio
                      name="type"
                      label={
                        <div className="flex w-full items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10.0001C18.3332 5.39771 14.6022 1.66675 9.99984 1.66675C5.39746 1.66675 1.6665 5.39771 1.6665 10.0001C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334ZM13.9211 8.80341C13.7768 9.68075 13.317 10.1096 12.6957 10.2609C13.5224 10.7237 13.9203 11.4261 13.4947 12.6582C12.9653 14.2034 11.7804 14.3436 10.2109 14.0442L9.80684 15.6751L8.89492 15.4491L9.299 13.8182C9.19584 13.7907 9.09184 13.7667 8.98792 13.7425C8.84459 13.7092 8.6965 13.6747 8.55 13.6326L8.14593 15.2635L7.23567 15.0379L7.63972 13.407L5.82645 12.9132L6.27715 11.76C6.27715 11.76 6.96156 11.9482 6.95094 11.9364C7.20479 11.9982 7.32891 11.8208 7.37976 11.6967L8.02681 9.08216L8.49775 7.22391C8.51809 7.02305 8.45517 6.76027 8.08425 6.6603C8.1095 6.64551 7.41656 6.49483 7.41656 6.49483L7.68659 5.40198L9.55542 5.86513L9.95117 4.26766L10.8927 4.50099L10.4969 6.09846C10.74 6.15134 10.9758 6.2156 11.2186 6.27732L11.6143 4.67984L12.5304 4.90686L12.1243 6.54622C13.2797 6.97014 14.1119 7.59822 13.9211 8.80341ZM9.67167 9.12866C10.2192 9.29316 11.8424 9.781 12.1159 8.69483C12.3705 7.66232 10.9638 7.34689 10.3103 7.20036C10.2333 7.18307 10.1668 7.16815 10.1146 7.15466L9.626 9.11491L9.67167 9.12866ZM8.82625 12.312L8.90559 12.3355C9.58009 12.5362 11.494 13.1054 11.7536 12.0273C12.021 10.9891 10.3004 10.5847 9.53009 10.4037C9.44567 10.3839 9.37259 10.3667 9.31492 10.3517L8.82625 12.312Z"
                              fill="#E9973D"
                            />
                          </svg>
                          <Typography className="text-sm font-semibold leading-4 text-[#000]">
                            BTC
                          </Typography>
                        </div>
                      }
                      containerProps={{ className: 'order-2' }}
                      className="flex items-center justify-between"
                    />
                  </div>
                  <div className="radio-container rounded-[8px] border border-[#F0F0F0] px-4 py-2">
                    <Radio
                      name="type"
                      label={
                        <div className="flex w-full items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <rect
                              x="0.666504"
                              width="20"
                              height="20"
                              fill="url(#pattern0_222_171)"
                            />
                            <defs>
                              <pattern
                                id="pattern0_222_171"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  xlinkHref="#image0_222_171"
                                  transform="scale(0.0104167)"
                                />
                              </pattern>
                              <image
                                id="image0_222_171"
                                width="96"
                                height="96"
                                xlinkHref="data:image/png;base64,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"
                              />
                            </defs>
                          </svg>
                          <Typography className="text-sm font-semibold leading-4 text-[#000]">
                            Ethereum
                          </Typography>
                        </div>
                      }
                      containerProps={{ className: 'order-2' }}
                      className="flex items-center justify-between"
                    />
                  </div>
                  <div className="radio-container rounded-[8px] border border-[#F0F0F0] px-4 py-2">
                    <Radio
                      name="type"
                      label={
                        <div className="flex w-full items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <rect
                              x="0.333496"
                              width="20"
                              height="20"
                              fill="url(#pattern0_222_174)"
                            />
                            <defs>
                              <pattern
                                id="pattern0_222_174"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  xlinkHref="#image0_222_174"
                                  transform="scale(0.015625)"
                                />
                              </pattern>
                              <image
                                id="image0_222_174"
                                width="64"
                                height="64"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAEKElEQVR4Ae1ZPU/jMBh2UCUmEEhsLIUJJmBhAqkn/sB1Y+LowETL0V8A9wsqNWVioGJi425hAnES2y2wwQQsbEggNqSKXB9at6GxHduxkxZiqUpiv1/Pg9/Xbwgh6UgZSBlIGUgZ+LoMOMrQXddT1olTYWhogWxuXsm6HJIVfJerVMaU5JMQfnu7VHGrRkAm86RiPDFZ15WOU54A1z1PDJC6Y+mdKk8AITn1OBLUkKxVcgRIGksQLtu16+bYC93ZcAJqtbuu+MDdhaZtOAGelx042P6AQ3avuA8IUfb78YpF/6P1e6dWk/fRaEyRcvmepcDfAa67y1IYyLlMhpvGfAII2RlIsLygq9UKa4lNgMLWZxntyznH2WbFFSSgUsmyBD/FHKNDzASACfIlIOub+HZ87Hvi31aWl8n8xARXQNYO14B4IdAhfiQgQuH7+/Agdt1efX59FcrJ2hEaES0ivUulzunXmwKfq/CJiGivdQn4jIWPR4APa2sroPBp5j7PR25ykuwsLhJcowykxK9//4jx1PC8AtnaqrcI8DGiG+zY8DB52tjQVVfSmzo8JPcvL0o6TOFmLXBI6z0/xxSQmMyOjpK7tTUJSfMiODEi7QzHuQcBXpTQWO8ACKp8cUGuHh8Dps/zeWFasHp8kFxZWiLfp6cD9qLuho/HYMC8/ETh7IzUr6/lFRQksd3zJycdDdQVEImRHRmJlA7GakAnupAbnR0gMgkytNPgvQZQ65qpgBQY398nYQ0OdUOvvaeDDgj41q4D7WaomwKY0CSBVn/k/MLREcUovOoAhsHL1VVhKy10Shfb4PHYaQnpmioJrCLYsdW8AdA/t7ekfnOjtEvWZ2fJj5kZYcGEH1bR9PsP3PvAv+sHBKrVdeI4B4F5wQSCPVhZEUiYX0JztNv8KY588z3gt18nuAOwqkECNYq3ve25Ofpo9IpdVDg91bPJ+WTGJgAu9vbmieJnJlFkKHr4/WySg66RN2jbq1sjmHY54CHLJwCrhkmASdPHIGwKhwA89LqnAMtK6yur9unAMhnrXE/BY/nuvg6zVumchCEq2jdXyZjlCAAqSYN9QYBCrPIEDAoJCuABSY0AaDQa47j05VAEDwzqBJTLz32ZDhrg9Qigf3pNh1Td6DVCLOI+QCZKxRcofBMQNULKDVAE8IAXnQBYUSQBKkZGRPCIQb0GsCI3EAjLrGDOWB0yswNopPHsBIA3dhKZJQBE2CbB8G4zT4BNEgyDR6h2CLBBggXwdgkwSYIl8PYJMEGCRfAIz8wxCEu80QJwxVvmzjtOPY6W2z4BQFgqLTT/0Vrngu1dgGyxWOidtvFsrwiyoq3VDojnrbOWOnMxgofPeAmAx7A+wXLOIwT/iJ8AeOeREDN4hJIMASwSEgCPMNKRMpAykDKQMvCVGfgPRJU1ChznPkEAAAAASUVORK5CYII="
                              />
                            </defs>
                          </svg>
                          <Typography className="text-sm font-semibold leading-4 text-[#000]">
                            USDT
                          </Typography>
                        </div>
                      }
                      containerProps={{ className: 'order-2' }}
                      className="flex items-center justify-between"
                    />
                  </div>
                </div>
              </DashboardCard>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <Typography className="ml-[34px] text-sm leading-6 text-[#909499]">
                Amount to Pay
              </Typography>
              <DashboardCard className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3 px-4">
                    <IconUSD />
                    <Typography className="text-sm font-semibold leading-4 text-[#909499]">
                      Amount USD
                    </Typography>
                    <Typography className="font-medium leading-6 text-[#000]">
                      $1600
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-3 px-4">
                    <IconBTC />
                    <Typography className="text-sm font-semibold leading-4 text-[#909499]">
                      Amount BTC
                    </Typography>
                    <Typography className="font-medium leading-6 text-[#000]">
                      0.000015
                    </Typography>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </article>
          <Button type="primary" className="ml-8 mt-10">
            Process with Payment
          </Button>
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
      <DialogAmount
        open={open}
        handleOpen={handleOpen}
        amount={'0.000015'}
        address={'1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'}
      />
    </>
  )
}
