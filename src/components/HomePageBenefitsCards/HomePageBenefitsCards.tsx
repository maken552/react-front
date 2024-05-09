import { Link } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { Container } from '@/atoms/Container/Container'
import { BenefitsAndCoreValuesMock } from '@/mocks/HomePageMocks'

export const HomePageBenefitsCards = () => {
  return (
    <section className="bg-[#0967E9]">
      <Container className="py-[80px]">
        <h2 className="text-center text-[56px] font-semibold leading-[72px] text-[#fff]">
          Benefits and core values
        </h2>
        <p className="text-center text-[16px] font-normal leading-[24px] text-[#fff]">
          What makes us your most reliable partner
        </p>
        <div className="my-[64px] grid grid-cols-3 gap-[40px] max-sm:grid-cols-1 max-sm:gap-8 max-sm:px-8">
          {BenefitsAndCoreValuesMock.map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 max-sm:items-center max-sm:text-center"
            >
              <img src={icon} className="h-[48px] w-[48px]" />
              <div>
                <p className="font-medium leading-6 text-[#fff]">{title}</p>
                <p className="mt-2 text-sm leading-[20px] text-[#fff]/75">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={AppRoutePath.SIGNUP()}>
            <button className="rounded-[32px] bg-[#3885EE] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#5f9df1] active:bg-[#3277d6]">
              Start Mining
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
