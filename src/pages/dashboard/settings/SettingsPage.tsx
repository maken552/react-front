import { Typography } from '@material-tailwind/react'

import { AppRoutePath } from '@/app/appRoutePath'
import { IconLock, IconPersonalAddress, IconPersonalId } from '@/assets/Icons'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'

export const SettingsPage = () => {
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
          <div className="px-8">
            <Typography className="font-semibold leading-4 text-[#000]">
              Settings
            </Typography>
            <Typography className="mt-2 text-sm leading-6 text-[#909499]">
              Please see below settings that you can change and update.
            </Typography>
          </div>
          <DashboardCard className="mt-8 flex flex-col gap-6">
            <SettingsPageItem
              icon={<IconLock />}
              name="Password"
              desc="You can update your password by clicking on button"
              action="update"
              onClick={() => console.log('Password')}
            />
            <SettingsPageItem
              icon={<IconPersonalId />}
              name="Personal Verification"
              desc="Verify your identity"
              status="required"
              action="verify"
              onClick={() => console.log('Personal ID')}
            />
            <SettingsPageItem
              icon={<IconPersonalAddress />}
              name="Address Verification"
              desc="Verify your address"
              status="required"
              action="verify"
              onClick={() => console.log('Personal Address')}
            />
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
    </>
  )
}

interface ISettingsPageItem {
  icon: React.ReactNode
  name: string
  desc: string
  status?: 'required' | 'inProgress' | 'verified'
  action?: 'update' | 'verify'
  onClick: () => void
}

const SettingsPageItem = ({
  icon,
  name,
  desc,
  status,
  action,
  onClick
}: ISettingsPageItem) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <div className="flex flex-col gap-1">
          <Typography className="flex gap-2 text-[16px] font-medium leading-6 text-[#0a0b0d]">
            {name}
            {status && (
              <>
                {status === 'required' && (
                  <div className="rounded-[8px] bg-[#FEEFDD] p-1 text-xs font-medium leading-4 text-[#d87400]">
                    Requires Verification
                  </div>
                )}
                {status === 'inProgress' && (
                  <div className="rounded-[8px] bg-[#FEEFDD] p-1 text-xs font-medium leading-4 text-[#d87400]">
                    In Progress
                  </div>
                )}
                {status === 'verified' && (
                  <div className="rounded-[8px] bg-[#EAFEDD] p-1 text-xs font-medium leading-4 text-[#218C53]">
                    Verified
                  </div>
                )}
              </>
            )}
          </Typography>
          <Typography className="text-sm leading-4 text-[#909499]">
            {desc}
          </Typography>
        </div>
      </div>
      <button
        className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0a0b0d]"
        onClick={onClick}
      >
        {action === 'verify' && 'Verify'}
        {action === 'update' && 'Update'}
      </button>
    </div>
  )
}
