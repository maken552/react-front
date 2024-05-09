import { Typography } from '@material-tailwind/react'

import { Container } from '@/atoms/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export const ContactPage = () => {
  return (
    <>
      <Header />
      <section className="bg-[#F4F8FD]">
        <Container className="py-20 max-sm:py-8">
          <div>
            <Typography className="text-[56px] font-semibold leading-[72px] text-[#000] max-sm:text-[38px] max-sm:leading-[56px]">
              Contact
            </Typography>
            <Typography className="mt-1 max-w-[640px] text-[16px] font-normal leading-6 text-[#000]">
              Feel free to contact our amiable team either by phone or by
              visiting one of our office locations.
            </Typography>
          </div>
        </Container>
      </section>
      <section className="border border-[#E7EDF5]">
        <Container>
          <div className="grid grid-cols-4 gap-4 py-20 max-sm:grid-cols-1 max-sm:gap-16 max-lg:grid-cols-2">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  +3 (749) 370-5541
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  USA Office
                </Typography>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  +3 (749) 370-5541
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  Canada Office
                </Typography>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  support@digvault.org
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  Support Department
                </Typography>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                  fill="black"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  sales@digvault.org
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  Sales Department
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <div className="flex flex-col gap-4 rounded-[8px] border border-[#E2E6EA] bg-[#fff] p-6">
            <img src="/contact/card02.png" />
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                  fill="#0667EA"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  315 W 36th St. 5th floor, New York, NY 10018
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  New York, USA
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[8px] border border-[#E2E6EA] bg-[#fff] p-6">
            <img src="/contact/card01.png" />
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                  fill="#0667EA"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <Typography className="text-[24px] font-normal leading-6 text-[#000]">
                  30 Wellington St W 5th Floor, Toronto
                </Typography>
                <Typography className="text-[16px] leading-6 text-[#0667ea]">
                  Toronto, Canada
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}
