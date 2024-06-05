import { Dialog, Typography } from '@material-tailwind/react'
import cn from 'classnames'

import IconBTC from '@/assets/Icons/IconBTC'
import { Button } from '@/atoms/Button/Button'

interface IDialog {
  open: boolean
  handleOpen: () => void
  className?: string
  amount: string | number
  address: string | number
}

export const DialogAmount = ({
  open,
  handleOpen,
  className,
  amount,
  address
}: IDialog) => {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-[32px] px-8 py-10 text-center',
        className
      )}
    >
      <Typography className="font-semibold leading-4 text-[#000]">
        Amount
      </Typography>
      <Typography className="text-[40px] font-semibold leading-[48px] text-[#000]">
        {amount}
      </Typography>
      <div className="mt-6 flex items-center gap-2 rounded-[8px] bg-[#F7F7F9] px-4">
        <IconBTC />
        <Typography className="font-medium leading-6 text-[#000]">
          {address}
        </Typography>
      </div>
      {/* TODO: add copy function to button */}
      <Button type="primary" onClick={handleOpen} className="mt-6">
        Copy Address
      </Button>
    </Dialog>
  )
}
