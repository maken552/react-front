import { Dialog, Typography } from '@material-tailwind/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { Container } from '@/atoms/Container/Container'

export const HomePageHero = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <section className="bg-[#0967E9]">
      <Container>
        <div className="grid grid-cols-2 gap-[80px] py-[80px] max-sm:grid-cols-1">
          <Typography className="text-[56px] font-semibold leading-[72px] text-[#fff]">
            Simplified Mining, Automated Earning.
          </Typography>
          <div>
            <Typography className="text-[16px] font-normal leading-6 text-[#fff]">
              DigVault constitutes a Bitcoin mining environment equipped with
              diverse tools facilitating the accrual of rewards from
              cryptocurrency assets. Start earning already today,
            </Typography>
            <div className="mt-8 flex items-center gap-2">
              <Link to={AppRoutePath.SIGNUP()}>
                <button className="rounded-[32px] bg-[#FFD915] px-4 py-2 text-sm font-semibold leading-6 text-[#1a212a] hover:bg-[#ffe044] active:bg-[#e5c313]">
                  Start Now
                </button>
              </Link>
              <button
                onClick={handleOpen}
                className="rounded-[32px] bg-[#3885EE] px-4 py-2 text-sm font-semibold leading-6 text-[#fff] hover:bg-[#5f9df1] active:bg-[#3277d6]"
              >
                How it Works?
              </button>
            </div>
          </div>
        </div>
        <img src="/home-page__banner.png" />
      </Container>
      <DialogVideo open={open} handleOpen={handleOpen} />
    </section>
  )
}

interface IDialogVideo {
  open: boolean
  handleOpen: () => void
  className?: string
}

const DialogVideo = ({ open, handleOpen, className }: IDialogVideo) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="flex flex-col items-center justify-center gap-2 p-2 text-center"
    >
      <video controls className="w-full rounded-[8px]">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </Dialog>
  )
}
