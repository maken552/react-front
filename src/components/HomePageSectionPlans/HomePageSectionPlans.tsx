import { Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { Container } from '@/atoms/Container/Container'
import { CloudMinerCard } from '@/pages/dashboard/mining/DashboardMiningRentalPage'
import { RootState } from '@/store'

export const HomePageSectionPlans = () => {
  const navigate = useNavigate()
  const onRentClick = () => {
    navigate(AppRoutePath.SIGNUP())
  }

  const RentalList = useSelector((state: RootState) => state.rentals)

  return (
    <section className="bg-[#F4F8FE] py-[80px]">
      <Container>
        <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
          Choose ASIC-based Mining Plans
        </Typography>
        <Typography className="mx-auto mt-1 max-w-[640px] text-center text-[16px] font-normal leading-6 text-[#000]">
          Lease hash rate directly from leading ASICs to optimize mining
          efficiency to the fullest. Simply select a plan and generate a
          contract with just a few clicks.
        </Typography>
        <div className="mt-[80px] grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
          {RentalList.map((rental, index) => (
            <CloudMinerCard
              key={index}
              name={
                rental.relationships.device
                  ? rental.relationships.device.name
                  : ''
              }
              price={rental.price}
              duration={`${rental.duration} Months`}
              perDay={`$${rental.per_day}`}
              onClick={onRentClick}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
