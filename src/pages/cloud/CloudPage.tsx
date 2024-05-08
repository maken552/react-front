import { Typography } from '@material-tailwind/react'

import { IconCheckFill } from '@/assets/Icons'
import { Button } from '@/atoms/Button/Button'
import { Container } from '@/atoms/Container/Container'
import { FAQComponent } from '@/components/FAQList/FAQList'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

// TODO: Clean up code
// TODO: Separete into components
// TODO: Create CloudPageMocks

export const CloudPage = () => {
  return (
    <>
      <Header />
      <Container className="py-[80px]">
        <Typography className="mx-auto max-w-[640px] text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
          Most affordable way to start earning BTC
        </Typography>
        <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
          Get Bitcoins daily from anywhere in the world, starting at just $150.
        </Typography>
      </Container>
      <img
        src="/cloud-page__banner.png"
        className="mx-auto h-full max-h-[660px] w-full max-w-[800px]"
      />
      <Container className="grid grid-cols-3 gap-8 py-[80px] max-sm:grid-cols-1">
        <div className="flex flex-col gap-4">
          <Typography className="text-center text-[32px] font-bold leading-8 text-[#0667ea]">
            24 Hours
          </Typography>
          <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
            That&apos;s the time from contract purchase to the first BTC payout.
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="text-center text-[32px] font-bold leading-8 text-[#0667ea]">
            $150
          </Typography>
          <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
            Now you can start mining from as low as $150!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="text-center text-[32px] font-bold leading-8 text-[#0667ea]">
            1 App
          </Typography>
          <Typography className="text-center text-[16px] font-normal leading-6 text-[#8d91a1]">
            Everything for BTC on your phone: Buy, sell, store, exchange, and
            withdraw.
          </Typography>
        </div>
      </Container>
      {/* Choose ASIC Section */}
      <section className="bg-[#F4F8FE] py-[80px]">
        <Container>
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
            Choose ASIC-based Mining Plans
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Lease hash rate directly from leading ASICs to optimize mining
            efficiency to the fullest. Simply select a plan and generate a
            contract with just a few clicks.
          </Typography>
          <div className="mt-[80px] grid grid-cols-3 gap-[20px] max-sm:grid-cols-1">
            {/* Card 01 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 01
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                106 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 106 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 02 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 02
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                120 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 120 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 03 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 03
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                188 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 188 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 04 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 04
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                106 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 106 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 05 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 05
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                120 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 120 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
            {/* Card 06 */}
            <div className="rounded-[16px] bg-[#fff] p-4">
              <Typography className="ml-2 text-xs font-semibold leading-4 text-[#0667ea]">
                DigVault 06
              </Typography>
              <Typography className="ml-2 mt-2 text-[24px] font-medium leading-[32px] text-[#000]">
                188 TH
              </Typography>
              <div className="mt-6 flex flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                  ASIC-based mining plan
                </Typography>
                <Typography className="font-medium leading-6 text-[#000]">
                  S19a Pro 188 TH/s
                </Typography>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Price 1 TH/Day
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.013
                  </Typography>
                </div>
                <div className="flex w-full flex-col gap-2 rounded-[8px] bg-[#F4F8FD] p-3">
                  <Typography className="text-xs font-semibold leading-4 text-[#909499]">
                    Service
                  </Typography>
                  <Typography className="font-medium leading-6 text-[#000]">
                    $0.5
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
                    97%
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Info Cards Section */}
      <Container className="pb-[64px] pt-[80px]">
        <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
          How do I get started?
        </Typography>
        <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
          Start getting BTC now just in 3 simple steps. Access to the world of
          cryptocurrencies is even easier with ECOS!
        </Typography>
      </Container>
      <Container className="grid grid-cols-2 gap-[80px] py-[80px] max-sm:grid-cols-1">
        <div className="order-1 my-auto">
          <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
            Sign up
          </Typography>
          <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
            Cloud mining contracts are available both in the app and on the
            website. After registration, you will be able to choose the best
            option.
          </Typography>
          <div className="my-[40px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Simple registration in 3 clicks and no KYC
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                24/7 support - we will always answer any questions
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Access to a personal account from any device
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="primary">Try Now</Button>
            <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
              Learn more
            </button>
          </div>
        </div>
        <img src="/cloud-page__card01.png" className="order-2" />
      </Container>
      <Container className="grid grid-cols-2 gap-[80px] py-[80px] max-sm:grid-cols-1">
        <div className="order-2 my-auto max-sm:order-1">
          <Typography className="text-[24px] font-semibold leading-[32px] text-[#000]">
            Create and buy your contract
          </Typography>
          <Typography className="mt-4 text-[16px] font-normal leading-6 text-[#000]">
            Create your contract in the calculator and pay by any convenient way
            for you - by card or cryptocurrency.
          </Typography>
          <div className="my-[40px] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Maximum flexibility - you can choose the term, cost or capacity
                of the contract yourself
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                The mined coins are added daily to your assets and features in
                the wallet
              </Typography>
            </div>
            <div className="flex items-center gap-2">
              <IconCheckFill className="shrink-0 text-[#01A76A]" />
              <Typography className="text-sm font-semibold leading-6 text-[#7f8992]">
                Daily rewards - no need to wait to get them
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button type="primary">Try Now</Button>
            <button className="rounded-[32px] bg-[#F3FAFF] px-4 py-2 text-sm font-semibold leading-6 text-[#0667EA] hover:bg-[#fafdff] active:bg-[#F3FAFF]">
              Learn more
            </button>
          </div>
        </div>
        <img src="/cloud-page__card02.png" className="order-1 max-sm:order-2" />
      </Container>
      {/* FAQ List */}
      <section className="border-t border-[#DFE7F2] bg-[#F4F8FE] py-[80px]">
        <Container>
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
            Got a question?
          </Typography>
          <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
            Drawing from our extensive experience, we&apos;ve compiled
            comprehensive answers.
          </Typography>
          <FAQComponent />
        </Container>
      </section>
      <Footer />
    </>
  )
}
