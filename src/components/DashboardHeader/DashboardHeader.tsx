import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react'
import cn from 'classnames'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { IconChevron } from '@/assets/Icons'
import { RootState } from '@/store'

const DashboardHeaderLinkMocks = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M14.4746 13.3333C14.4746 13.7015 14.1761 14 13.8079 14H3.14128C2.77309 14 2.47461 13.7015 2.47461 13.3333V6.32605C2.47461 6.12032 2.56959 5.92611 2.73198 5.79981L8.06534 1.65166C8.30608 1.46442 8.64314 1.46442 8.88388 1.65166L14.2172 5.79981C14.3796 5.92611 14.4746 6.12032 14.4746 6.32605V13.3333Z"
          fill="white"
        />
      </svg>
    ),
    name: 'Dashboard',
    path: AppRoutePath.DASHBOARD()
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M9.14136 6.66666H13.808L7.80802 15.3333V9.33332H3.14136L9.14136 0.666656V6.66666Z"
          fill="white"
          fillOpacity="0.75"
        />
      </svg>
    ),
    name: 'Mining',
    path: '/dashboard/mining'
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M7.11053 1.47372C7.99959 1.28762 8.92833 1.28174 9.83779 1.47189C9.95579 2.24492 10.4111 2.95927 11.141 3.38068C11.8709 3.80208 12.7172 3.83922 13.4456 3.55486C14.0651 4.24744 14.5243 5.05468 14.8077 5.91767C14.198 6.40638 13.8077 7.15732 13.8077 7.99946C13.8077 8.84212 14.1985 9.59346 14.8087 10.0821C14.6679 10.5091 14.4815 10.9281 14.2478 11.3328C14.0141 11.7375 13.7445 12.1085 13.4451 12.4439C12.7168 12.1597 11.8707 12.197 11.141 12.6183C10.4117 13.0393 9.95653 13.7529 9.83806 14.5253C8.94906 14.7113 8.02033 14.7172 7.11081 14.5271C6.99285 13.7541 6.53753 13.0397 5.80764 12.6183C5.07775 12.1969 4.23145 12.1597 3.50301 12.4441C2.88357 11.7515 2.4243 10.9443 2.14095 10.0813C2.75061 9.59259 3.14098 8.84159 3.14098 7.99946C3.14098 7.15686 2.75015 6.4055 2.13989 5.91682C2.28075 5.48987 2.46715 5.07085 2.70081 4.66614C2.93447 4.26144 3.20415 3.8905 3.50347 3.55504C4.23181 3.8392 5.07791 3.80199 5.80764 3.38068C6.53695 2.9596 6.99213 2.24606 7.11053 1.47372ZM8.47433 9.99946C9.57886 9.99946 10.4743 9.10406 10.4743 7.99946C10.4743 6.89492 9.57886 5.99948 8.47433 5.99948C7.36973 5.99948 6.47431 6.89492 6.47431 7.99946C6.47431 9.10406 7.36973 9.99946 8.47433 9.99946Z"
          fill="white"
          fillOpacity="0.75"
        />
      </svg>
    ),
    name: 'Settings',
    path: '/dashboard/settings'
  }
]

export const DashboardHeader = () => {
  const userEmail = useSelector((state: RootState) => state.user.email)
  const userFirstName = useSelector((state: RootState) => state.user.first_name)

  const navigate = useNavigate()

  const handleLogoutClick = () => {
    // remove access token
    Cookies.remove('token')

    // TODO: purge redux store

    // navigate to home
    navigate(AppRoutePath.HOME())
  }
  return (
    <header className="flex items-center justify-between bg-[#0667EA] px-6 py-3">
      <Link to={AppRoutePath.DASHBOARD()}>
        <img src="/main_logo_white.svg" />
      </Link>
      {/* Center Navigation */}
      <div className="flex items-center gap-4 max-sm:hidden">
        {DashboardHeaderLinkMocks.map(({ icon, name, path }, index) => (
          <DashboardHeaderLink
            key={index}
            icon={icon}
            name={name}
            path={path}
          />
        ))}
      </div>
      {/* User Dropdown */}
      <Menu offset={16}>
        <MenuHandler>
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <Typography className="text-sm font-semibold leading-4 text-[#fff]">
                {userFirstName}
                {/* David */}
              </Typography>
              <Typography className="text-xs leading-4 text-[#fff]">
                {userEmail}
              </Typography>
            </div>
            <IconChevron size={16} className="text-[#fff]" />
          </div>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem
            className="flex items-center gap-2"
            onClick={handleLogoutClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 -960 960 960"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
            <Typography className="text-sm font-semibold leading-4 text-[#000]">
              Logout
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </header>
  )
}

interface IDashboardHeaderLink {
  icon: React.ReactNode
  name: string
  path: string
  className?: string
}

const DashboardHeaderLink = ({
  icon,
  name,
  path,
  className
}: IDashboardHeaderLink) => {
  const location = useLocation()

  return (
    <Link
      to={path}
      className={cn(
        'flex items-center gap-2 rounded-[8px] p-2 pr-4 text-sm font-medium leading-6 text-[#fff]',
        location.pathname === path && 'bg-[#0A53D6]',
        className
      )}
    >
      {icon}
      {name}
    </Link>
  )
}
