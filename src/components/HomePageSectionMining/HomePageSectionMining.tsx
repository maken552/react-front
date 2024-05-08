import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react'
import cn from 'classnames'
import { useState } from 'react'

import { IconChevron } from '@/assets/Icons'
import { Container } from '@/atoms/Container/Container'
import { MiningCardMocks, MiningCardRewardMocks } from '@/mocks/HomePageMocks'

const DeviceOptions = [
  {
    name: 'Bitman Antminer S19k Pro 110TH/s',
    cost: '90 0000'
  },
  {
    name: 'Bitman Antminer S19k Pro 188TH/s',
    cost: '90 0000'
  }
]

const DeviceQuantity = [
  {
    name: '1'
  },
  {
    name: '2'
  }
]

export const HomePageSectionMining = () => {
  const [selectedDevice, setSelectedDevice] = useState(0)
  const [selectedQuantity, setSelectedQuantity] = useState(0)

  const onMenuClick = (index: number) => {
    setSelectedDevice(index)
  }

  const onQuantityMenuClick = (index: number) => {
    setSelectedQuantity(index)
  }

  return (
    <Container className="py-[80px]">
      <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
        Create and order your mining farm
      </Typography>
      <Typography className="mt-1 text-center text-[16px] font-normal leading-6 text-[#000]">
        Set the farm properties and estimate its efficiency!
      </Typography>
      <section className="mt-[80px] grid grid-cols-2 gap-2 max-sm:grid-cols-1">
        <div className="flex items-center justify-center rounded-[16px] border border-[#F3F3F3] p-4">
          <img src="/home-page__miner01.png" />
        </div>
        <div className="flex flex-col justify-between rounded-[16px] bg-[#F4F8FD] p-4">
          <div className="flex items-center gap-4 max-sm:flex-col">
            <CardDropdown
              label="Device"
              options={DeviceOptions}
              selected={selectedDevice}
              onClick={onMenuClick}
            />
            <CardDropdown
              label="Quantity"
              options={DeviceQuantity}
              selected={selectedQuantity}
              onClick={onQuantityMenuClick}
              className="max-w-[120px] max-sm:max-w-full"
            />
          </div>
          {/* BTC Forecast */}
          <CardDisplay
            label="BTC Forecast"
            value="90 0000"
            className="max-sm:mt-4"
          />
        </div>
        <article className="flex flex-col justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
          {MiningCardMocks.map(({ icon, name, value }, index) => (
            <CardItem key={index} icon={icon} name={name} value={value} />
          ))}
        </article>

        <article className="flex flex-col justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
          {MiningCardRewardMocks.map(({ icon, name, value }, index) => (
            <CardItem key={index} icon={icon} name={name} value={value} />
          ))}
        </article>
        <article className="flex items-center justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
          <div className="flex flex-col gap-2">
            <Typography className="text-xs font-medium leading-4 text-[#909499]">
              Total Cost
            </Typography>
            <Typography className="text-[20px] font-semibold leading-6 text-[#000]">
              $2050
            </Typography>
          </div>
          <button className="flex w-full max-w-[160px] items-center justify-center rounded-[32px] bg-[#0667EA] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#046EFA] active:bg-[#0667ea]">
            Buy Now
          </button>
        </article>
        <article className="flex items-center justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
          <Typography className="text-sm font-semibold leading-6 text-[#909499]">
            Make a consultation request
          </Typography>
          <button className="text-sm font-semibold leading-6 text-[#0667ea]">
            Request a Call Back
          </button>
        </article>
      </section>
    </Container>
  )
}

interface IDropdownOptions {
  name: string
  cost?: string
}

interface ICardDropdown {
  label: string
  options: IDropdownOptions[]
  selected: number
  onClick: (index: number) => void
  className?: string
}

const CardDropdown = ({
  label,
  options,
  selected,
  onClick,
  className
}: ICardDropdown) => {
  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <Typography className="ml-4 text-sm font-medium leading-4">
        {label}
      </Typography>
      <Menu>
        <MenuHandler>
          <button className="flex items-center justify-between rounded-[12px] border border-[#70809433] bg-[#fff] px-4 py-[10px] text-base font-medium leading-6 text-[#000] shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
            {options[selected].name}
            <IconChevron size={16} />
          </button>
        </MenuHandler>
        <MenuList>
          {options.map(({ name }, index) => (
            <MenuItem key={index} onClick={() => onClick(index)}>
              <div className="flex items-center gap-2">
                <Typography className="text-sm font-medium leading-6 text-[#000]">
                  {name}
                </Typography>
              </div>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}

interface ICardDisplay {
  label: string
  value: string
  className?: string
}

const CardDisplay = ({ label, value, className }: ICardDisplay) => {
  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <Typography className="ml-4 text-sm font-medium leading-4">
        {label}
      </Typography>
      <div className="flex items-center gap-2 rounded-[12px] border border-[#70809433] bg-[#fff] px-4 py-[10px] text-base font-medium leading-6 text-[#000] shadow-[0_1px_2px_0_rgba(112,128,148,0.10)]">
        <span className="text-base font-medium leading-6 text-[#909499]">
          $
        </span>
        {value}
      </div>
    </div>
  )
}

interface ICardItem {
  icon: React.ReactNode
  name: string
  value?: string
  className?: string
}

const CardItem = ({ icon, name, value, className }: ICardItem) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-[8px] bg-[#fff] p-[12px] shadow-[0_1px_2px_0_rgba(112,128,148,0.20)]',
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <Typography className="text-sm font-medium leading-6 text-[#000]">
          {name}
        </Typography>
      </div>
      {value && (
        <Typography className="text-sm font-semibold leading-6 text-[#000]">
          {value}
        </Typography>
      )}
    </div>
  )
}
