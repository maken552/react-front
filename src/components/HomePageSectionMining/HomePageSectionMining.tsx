import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react'
import axios from 'axios'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchDevicesDataFromAPI } from '@/api/slices/Devices.api'
import { AppRoutePath, DOMAIN } from '@/app/appRoutePath'
import { IconChevron } from '@/assets/Icons'
import { Container } from '@/atoms/Container/Container'
import { MiningCardMocks, MiningCardRewardMocks } from '@/mocks/HomePageMocks'
import { AppDispatch, RootState } from '@/store'
import { IDevice } from '@/types/devices-data.types'

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
  },
  {
    name: '3'
  },
  {
    name: '4'
  },
  {
    name: '5'
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

  const deviceList = useSelector((state: RootState) => state.devices)

  const selectedDeviceObject = deviceList[selectedDevice]

  const calculateAPI = () => {
    axios
      .post(`${DOMAIN}/api/miner/calculate`, {
        device: 1,
        quantity: 4
      })
      .then((response) => {
        console.log('calculate api', response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    calculateAPI()
  }, [])

  return (
    <>
      {deviceList.length > 0 && (
        <Container className="py-[80px]">
          <Typography className="text-center text-[56px] font-semibold leading-[72px] text-[#000]">
            Create and order your mining farm
          </Typography>
          <Typography className="mt-1 text-center text-[16px] font-normal leading-6 text-[#000]">
            Set the farm properties and estimate its efficiency!
          </Typography>
          <section className="mt-[80px] grid grid-cols-2 gap-2 max-sm:grid-cols-1">
            <div className="flex items-center justify-center rounded-[16px] border border-[#F3F3F3] p-4">
              <img
                src="/home-page__miner01.png"
                className="max-h-[174px] max-w-[231px]"
              />
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-[16px] bg-[#F4F8FD] p-4">
              <div className="flex items-center gap-4 max-sm:flex-col">
                <CardDropdown
                  label="Device"
                  options={deviceList}
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
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.0851 4.93522L9.99998 0.833344L2.91492 4.93522L9.99998 9.03709L17.0851 4.93522ZM2.08331 6.37959V14.5833L9.16665 18.6843V10.4804L2.08331 6.37959ZM10.8333 18.6843L17.9166 14.5833V6.37959L10.8333 10.4804V18.6843Z"
                      fill="#0667EA"
                    />
                  </svg>
                }
                name="Hosting at ECOS Mining Farm"
                value=""
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.58333 1.66667C4.16307 1.66667 3.80857 1.97962 3.75643 2.39665L2.50643 12.3967C2.50215 12.4309 2.5 12.4654 2.5 12.5V17.5C2.5 17.9603 2.8731 18.3333 3.33333 18.3333H16.6667C17.1269 18.3333 17.5 17.9603 17.5 17.5V12.5C17.5 12.4654 17.4978 12.4309 17.4936 12.3967L16.2436 2.39665C16.1914 1.97962 15.8369 1.66667 15.4167 1.66667H4.58333ZM4.16667 13.3333H15.8333V16.6667H4.16667V13.3333ZM12.5 14.1667H14.1667V15.8333H12.5V14.1667ZM10.8333 14.1667H9.16667V15.8333H10.8333V14.1667Z"
                      fill="#0667EA"
                    />
                  </svg>
                }
                name="Model"
                value={selectedDeviceObject?.name}
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.33697 5.34738L0.634766 2.64518L1.81327 1.46667L4.51547 4.16887H17.2169C17.6772 4.16887 18.0502 4.54197 18.0502 5.00221C18.0502 5.08331 18.0384 5.16398 18.0152 5.24167L16.0152 11.9083C15.9094 12.2608 15.5849 12.5022 15.2169 12.5022H5.00363V14.1689H14.1703V15.8356H4.1703C3.71006 15.8356 3.33697 15.4624 3.33697 15.0023V5.34738ZM4.58697 19.1689C3.89661 19.1689 3.33697 18.6093 3.33697 17.9189C3.33697 17.2285 3.89661 16.6689 4.58697 16.6689C5.27733 16.6689 5.83697 17.2285 5.83697 17.9189C5.83697 18.6093 5.27733 19.1689 4.58697 19.1689ZM14.587 19.1689C13.8966 19.1689 13.337 18.6093 13.337 17.9189C13.337 17.2285 13.8966 16.6689 14.587 16.6689C15.2773 16.6689 15.837 17.2285 15.837 17.9189C15.837 18.6093 15.2773 19.1689 14.587 19.1689Z"
                      fill="#0667EA"
                    />
                  </svg>
                }
                name="Quantity"
                value="1 Unit"
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.8333 8.33333H16.6666L9.16665 19.1667V11.6667H3.33331L10.8333 0.833328V8.33333Z"
                      fill="#0667EA"
                    />
                  </svg>
                }
                name="Total Mining Power"
                value={selectedDeviceObject?.hashrate}
              />
            </article>

            <article className="flex flex-col justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99999C18.3333 5.39761 14.6023 1.66666 9.99996 1.66666C5.39758 1.66666 1.66663 5.39761 1.66663 9.99999C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333ZM13.9212 8.80332C13.7769 9.68066 13.3171 10.1095 12.6958 10.2608C13.5225 10.7236 13.9205 11.426 13.4948 12.6581C12.9655 14.2033 11.7805 14.3435 10.211 14.0442L9.80696 15.675L8.89504 15.449L9.29913 13.8182C9.19596 13.7907 9.09196 13.7666 8.98804 13.7424C8.84471 13.7091 8.69663 13.6746 8.55013 13.6325L8.14605 15.2634L7.23579 15.0378L7.63984 13.4069L5.82658 12.9131L6.27728 11.7599C6.27728 11.7599 6.96168 11.9482 6.95107 11.9363C7.20492 11.9981 7.32903 11.8207 7.37988 11.6966L8.02693 9.08207L8.49788 7.22381C8.51821 7.02296 8.45529 6.76018 8.08438 6.66021C8.10963 6.64541 7.41668 6.49474 7.41668 6.49474L7.68671 5.40189L9.55554 5.86504L9.95129 4.26756L10.8928 4.5009L10.497 6.09837C10.7401 6.15125 10.9759 6.21551 11.2187 6.27723L11.6145 4.67975L12.5305 4.90677L12.1244 6.54613C13.2798 6.97005 14.112 7.59813 13.9212 8.80332ZM9.67179 9.12857C10.2193 9.29307 11.8425 9.78091 12.116 8.69474C12.3706 7.66223 10.964 7.3468 10.3105 7.20026C10.2335 7.18298 10.1669 7.16806 10.1147 7.15457L9.62613 9.11482L9.67179 9.12857ZM8.82638 12.3119L8.90571 12.3354C9.58021 12.5361 11.4941 13.1053 11.7537 12.0272C12.0211 10.989 10.3005 10.5847 9.53021 10.4037C9.44579 10.3838 9.37271 10.3667 9.31504 10.3517L8.82638 12.3119Z"
                      fill="#E9973D"
                    />
                  </svg>
                }
                name="Yearly Mining Reward"
                value={`${
                  parseFloat(selectedDeviceObject?.daily_mining) * 365
                } BTC`}
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0041 18.3356C5.40174 18.3356 1.67078 14.6047 1.67078 10.0023C1.67078 5.39992 5.40174 1.66896 10.0041 1.66896C14.6065 1.66896 18.3375 5.39992 18.3375 10.0023C18.3375 14.6047 14.6065 18.3356 10.0041 18.3356ZM7.08744 11.6689V13.3356H9.17079V15.0023H10.8375V13.3356H11.6708C12.8214 13.3356 13.7541 12.4029 13.7541 11.2523C13.7541 10.1017 12.8214 9.16892 11.6708 9.16892H8.33746C8.10733 9.16892 7.92078 8.98242 7.92078 8.75225C7.92078 8.52217 8.10733 8.33559 8.33746 8.33559H12.9208V6.66896H10.8375V5.00229H9.17079V6.66896H8.33746C7.18685 6.66896 6.25411 7.60169 6.25411 8.75225C6.25411 9.90292 7.18685 10.8356 8.33746 10.8356H11.6708C11.9009 10.8356 12.0875 11.0222 12.0875 11.2523C12.0875 11.4824 11.9009 11.6689 11.6708 11.6689H7.08744Z"
                      fill="#357A30"
                    />
                  </svg>
                }
                name="Yearly Mining Reward"
                value={`${
                  parseFloat(selectedDeviceObject?.daily_mining) * 365
                } USD`}
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99999C18.3333 5.39761 14.6023 1.66666 9.99996 1.66666C5.39758 1.66666 1.66663 5.39761 1.66663 9.99999C1.66663 14.6023 5.39758 18.3333 9.99996 18.3333ZM13.9212 8.80332C13.7769 9.68066 13.3171 10.1095 12.6958 10.2608C13.5225 10.7236 13.9205 11.426 13.4948 12.6581C12.9655 14.2033 11.7805 14.3435 10.211 14.0442L9.80696 15.675L8.89504 15.449L9.29913 13.8182C9.19596 13.7907 9.09196 13.7666 8.98804 13.7424C8.84471 13.7091 8.69663 13.6746 8.55013 13.6325L8.14605 15.2634L7.23579 15.0378L7.63984 13.4069L5.82658 12.9131L6.27728 11.7599C6.27728 11.7599 6.96168 11.9482 6.95107 11.9363C7.20492 11.9981 7.32903 11.8207 7.37988 11.6966L8.02693 9.08207L8.49788 7.22381C8.51821 7.02296 8.45529 6.76018 8.08438 6.66021C8.10963 6.64541 7.41668 6.49474 7.41668 6.49474L7.68671 5.40189L9.55554 5.86504L9.95129 4.26756L10.8928 4.5009L10.497 6.09837C10.7401 6.15125 10.9759 6.21551 11.2187 6.27723L11.6145 4.67975L12.5305 4.90677L12.1244 6.54613C13.2798 6.97005 14.112 7.59813 13.9212 8.80332ZM9.67179 9.12857C10.2193 9.29307 11.8425 9.78091 12.116 8.69474C12.3706 7.66223 10.964 7.3468 10.3105 7.20026C10.2335 7.18298 10.1669 7.16806 10.1147 7.15457L9.62613 9.11482L9.67179 9.12857ZM8.82638 12.3119L8.90571 12.3354C9.58021 12.5361 11.4941 13.1053 11.7537 12.0272C12.0211 10.989 10.3005 10.5847 9.53021 10.4037C9.44579 10.3838 9.37271 10.3667 9.31504 10.3517L8.82638 12.3119Z"
                      fill="#E9973D"
                    />
                  </svg>
                }
                name="Daily Mining Reward"
                value={`${parseFloat(selectedDeviceObject?.daily_mining)} BTC`}
              />
              <CardItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0041 18.3356C5.40174 18.3356 1.67078 14.6047 1.67078 10.0023C1.67078 5.39992 5.40174 1.66896 10.0041 1.66896C14.6065 1.66896 18.3375 5.39992 18.3375 10.0023C18.3375 14.6047 14.6065 18.3356 10.0041 18.3356ZM7.08744 11.6689V13.3356H9.17079V15.0023H10.8375V13.3356H11.6708C12.8214 13.3356 13.7541 12.4029 13.7541 11.2523C13.7541 10.1017 12.8214 9.16892 11.6708 9.16892H8.33746C8.10733 9.16892 7.92078 8.98242 7.92078 8.75225C7.92078 8.52217 8.10733 8.33559 8.33746 8.33559H12.9208V6.66896H10.8375V5.00229H9.17079V6.66896H8.33746C7.18685 6.66896 6.25411 7.60169 6.25411 8.75225C6.25411 9.90292 7.18685 10.8356 8.33746 10.8356H11.6708C11.9009 10.8356 12.0875 11.0222 12.0875 11.2523C12.0875 11.4824 11.9009 11.6689 11.6708 11.6689H7.08744Z"
                      fill="#357A30"
                    />
                  </svg>
                }
                name="Daily Mining Reward"
                value={`${parseFloat(selectedDeviceObject?.daily_mining)} USD`}
              />
              {/* {MiningCardRewardMocks.map(({ icon, name, value }, index) => (
            <CardItem key={index} icon={icon} name={name} value={value} />
          ))} */}
            </article>
            <article className="flex items-center justify-between gap-2 rounded-[16px] bg-[#F4F8FD] p-4">
              <div className="flex flex-col gap-2">
                <Typography className="text-xs font-medium leading-4 text-[#909499]">
                  Total Cost
                </Typography>
                <Typography className="text-[20px] font-semibold leading-6 text-[#000]">
                  {`$${
                    parseFloat(selectedDeviceObject?.price) *
                    (selectedQuantity + 1)
                  }`}
                </Typography>
              </div>
              <Link to={AppRoutePath.SIGNUP()}>
                <button className="flex w-full max-w-[160px] items-center justify-center rounded-[32px] bg-[#0667EA] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#046EFA] active:bg-[#0667ea]">
                  Buy Now
                </button>
              </Link>
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
      )}
    </>
  )
}

interface IDropdownOptions {
  name: string
  cost?: string
}

interface ICardDropdown {
  label: string
  options: IDevice[] | IDropdownOptions[]
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
