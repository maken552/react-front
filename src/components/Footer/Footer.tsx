import { Link } from 'react-router-dom'

import { AppRoutePath } from '@/app/appRoutePath'
import { Container } from '@/atoms/Container/Container'

export const Footer = () => {
  return (
    <footer className="border-t border-[#2D2F39] bg-[#1B1C22] py-16 max-sm:px-6">
      <Container className="border-b border-[#2D2F39] pb-[48px]">
        <div className="flex justify-between gap-[32px] max-sm:flex-wrap">
          <div className="flex justify-between gap-[32px] max-sm:flex-wrap">
            <div className="flex w-[220px] flex-col gap-2">
              <p className="font-medium leading-6 text-[#fff]">Products</p>
              <Link
                to={AppRoutePath.CLOUD()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Cloud Mining
              </Link>
              <Link
                to={AppRoutePath.MINERS()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Bitcoin Mining
              </Link>
            </div>
            <div className="flex w-[220px] flex-col gap-2">
              <p className="font-medium leading-6 text-[#fff]">Company</p>
              <Link
                to={AppRoutePath.ABOUT()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                About us
              </Link>
              <Link
                to={AppRoutePath.SECURITY()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Security
              </Link>
              <Link
                to={AppRoutePath.CONTACT()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Contact
              </Link>
              {/* <a href="#" className="text-xs leading-[20px] text-[#8D91A1]">
                Licenses
              </a> */}
            </div>
            <div className="flex w-[220px] flex-col gap-2">
              <p className="font-medium leading-6 text-[#fff]">Legal</p>
              <Link
                to={AppRoutePath.LEGAL()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Legals
              </Link>
              <Link
                to={AppRoutePath.PRIVACY()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Privacy
              </Link>
              <Link
                to={AppRoutePath.TERMS()}
                className="text-xs leading-[20px] text-[#8D91A1]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          {/* TODO: Language Switcher */}
          {/* <a href="#" className="text-xs leading-[20px] text-[#8D91A1]">
            Language Switcher
          </a> */}
        </div>
      </Container>
      <Container className="pt-[48px]">
        <div className="flex items-center gap-[48px] max-sm:flex-col max-sm:gap-8">
          <div className="flex gap-4">
            <img src="/home-page__banner_logo01.svg" />
            <div className="flex flex-col">
              <span className="text-xs font-medium leading-5 text-[#8D91A1]">
                ISO 27001, 27017, 27018 &
              </span>
              <span className="text-xs font-medium leading-5 text-[#8D91A1]">
                SOC 2 Type 2 Certifications
              </span>
            </div>
          </div>
          <div className="h-6 w-px border-r border-[#333540] max-sm:hidden"></div>
          <div className="flex gap-4">
            <img src="/home-page__banner_logo03.svg" />
            <div className="flex flex-col">
              <span className="text-xs font-medium leading-5 text-[#8D91A1]">
                Licensed & Regulated
              </span>
              <span className="text-xs font-medium leading-5 text-[#8D91A1]">
                Digital Assets Institution
              </span>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs leading-[20px] text-[#8D91A1]">
          All or part of the DigVault, some features thereof, or some Digital
          Assets, are not available in certain jurisdictions, including where
          restrictions or limitations may apply, as indicated on he DigVault and
          in the relevant general terms and conditions.
        </p>
        <p className="mt-8 text-xs leading-[20px] text-[#8D91A1]">
          Copyright 2024 DigVault. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
