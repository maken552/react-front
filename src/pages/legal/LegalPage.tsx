import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export const LegalPage = () => {
  return (
    <>
      <Header />
      <Container className="mb-32 mt-16 max-sm:my-8">
        <Typography className="text-[32px] font-semibold leading-[32px] text-[#0F1C36] max-sm:text-[20px]">
          Legal
        </Typography>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          Introduction
        </Typography>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          This statement should be read in conjunction with all policies
          displayed on this Website, which outline the rules and expectations
          governing DigVault Ltd&apos;s business practices in compliance with
          all applicable laws of the countries in which we operate.
        </p>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          About The Company
        </Typography>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          DigVault Ltd, operating under the trading name Payback, has been in
          operation since August 2017. It is a law-abiding company that provides
          counseling and assistance to victims of fraud in recovering their
          stolen funds. Registered in Israel with the company registration
          number (CRN) 513711653, Payback also operates in various other
          jurisdictions worldwide.
        </p>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          The Services
        </Typography>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          DigVault Ltd, trading as Payback, offers assistance to consumers
          seeking advice and guidance. Our services are provided by competent
          attorneys licensed by the Israel Bar Association, who supervise the
          provision of services. We specialize in recovery consulting, guiding
          clients through the process of canceling transactions and obtaining
          refunds using alternative dispute resolution methods outside of court.
          It&apos;s important to note that we do not serve as legal
          representatives for our clients and are not obligated to participate
          in any litigation, arbitration, or administrative proceedings.
        </p>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          Additionally, we cannot guarantee the outcome or result of our
          recovery consulting services. We provide consumers with a free initial
          consultation, after which recovery consulting services may be
          commissioned and will involve fees and/or commissions based on the
          service and the complexity of each case, as outlined in the contract.
          Cancellation of services under the contract follows the provisions of
          the Israeli Consumer Protection Law (Transaction Cancellation), 2010,
          Section 2(3).
        </p>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          Compliance, Regulation & Authorization
        </Typography>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          CRN: 513711653), authorized and regulated under Israeli law, operates
          globally, ensuring full compliance with regulatory requirements in
          each jurisdiction. <br /> 4.1 In the United Kingdom, the company
          operates under a legal exemption recognized by The Financial Conduct
          Authority (FCA), eliminating the need for FCA authorization and
          regulation <br /> 4.2 In Canada, operations are conducted with the
          acknowledgment of The Ontario Securities Commission (OSC). <br /> 4.3
          In Australia, operations are conducted with the acknowledgment of The
          Australian Financial Complaints Authority (AFCA). <br /> 4.4 In the
          United States, operations comply with The Federal Trade Commission
          (FTC) provisions and adhere to the Telemarketing Sales Rule (TSR),
          without practicing US law. <br /> 4.5 In Europe, the company operates
          with acknowledgment from various prominent financial regulators and
          their associations, such as The Portuguese Securities Market
          Commission (CMVM). <br /> 4.6 The company adheres to data protection
          regulations, including GDPR and CCPA.
        </p>
        <Typography className="mt-10 text-[24px] font-semibold leading-[24px] text-[#4B5568] max-sm:mt-2 max-sm:text-[18px]">
          No Warranties
        </Typography>
        <p className="mt-4 list-decimal text-base font-normal leading-[24px] text-[#4B5568] max-sm:text-sm">
          DigVault Ltd, trading as Payback, provides services to consumers
          seeking advice and counsel to the best of our knowledge and
          understanding, drawing from our experience. It&apos;s important to
          note that we do not act as legal representatives for our clients, and
          therefore, we cannot make any express or implied warranties regarding
          the outcome or result of the recovery consulting services consumers
          retain from us.
        </p>
      </Container>
      <Footer />
    </>
  )
}
