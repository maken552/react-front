import { Dialog, Typography } from '@material-tailwind/react'

import { Button } from '@/atoms/Button/Button'

interface IDialogVerification {
  open: boolean
  handleOpen: () => void
  className?: string
}

export const DialogVerification = ({
  open,
  handleOpen,
  className
}: IDialogVerification) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center justify-center gap-2 px-8 py-10 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M2 10C2 8.89544 2.89544 8 4 8H44C45.1046 8 46 8.89544 46 10V38C46 39.1046 45.1046 40 44 40H4C2.89544 40 2 39.1046 2 38V10ZM26 16V20H38V16H26ZM36 24H26V28H36V24ZM21 20C21 17.2386 18.7614 15 16 15C13.2386 15 11 17.2386 11 20C11 22.7614 13.2386 25 16 25C18.7614 25 21 22.7614 21 20ZM16 27C12.134 27 9 30.134 9 34H23C23 30.134 19.866 27 16 27Z"
          fill="#0667EA"
        />
      </svg>
      <Typography className="text-[24px] font-normal leading-8 text-[#000]">
        Verification Required
      </Typography>
      <Typography className="text-sm font-normal leading-6 text-[909499]">
        As your profile is being verified your ability of any processes are{' '}
        <br className="max-sm:hidden" />
        unavailable. We will be in touch with you shortly.
      </Typography>
      <Button type="primary" className="mt-2" onClick={handleOpen}>
        Got it
      </Button>
    </Dialog>
  )
}
