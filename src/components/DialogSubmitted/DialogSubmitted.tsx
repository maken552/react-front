import { Dialog, Typography } from '@material-tailwind/react'

import { Button } from '@/atoms/Button/Button'

interface IDialog {
  open: boolean
  handleOpen: () => void
  className?: string
}

export const DialogSubmitted = ({ open, handleOpen, className }: IDialog) => {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center justify-center gap-2 rounded-[32px] px-8 py-10 text-center"
    >
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F4FFF2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16 32C7.16344 32 0 24.8365 0 16C0 7.16344 7.16344 0 16 0C24.8365 0 32 7.16344 32 16C32 24.8365 24.8365 32 16 32ZM14.4042 22.4L25.7179 11.0863L23.4552 8.82355L14.4042 17.8746L9.87874 13.349L7.61598 15.6118L14.4042 22.4Z"
            fill="#357A30"
          />
        </svg>
      </div>
      <Typography className="mt-[32px] text-[24px] font-normal leading-8 text-[#000]">
        Your request was submitted
      </Typography>
      <Typography className="text-sm font-normal leading-6 text-[909499]">
        Your inquiry has been successfully received. One of our associates{' '}
        <br /> will promptly reach out to discuss next steps with you.
      </Typography>
      <button
        onClick={handleOpen}
        className="mt-[32px] rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0A0B0D]"
      >
        Got it!
      </button>
    </Dialog>
  )
}
