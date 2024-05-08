import { Typography } from '@material-tailwind/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useCountries } from 'use-react-countries'

import { AppRoutePath, DOMAIN } from '@/app/appRoutePath'
import { Button } from '@/atoms/Button/Button'
import { InputSelect } from '@/atoms/InputSelect/InputSelect'
import { InputText } from '@/atoms/InputText/InputText'
import { setUser } from '@/store/features/userSlice/userSlice'
import { country } from '@/types/CountryType'

export const SignUpPage = () => {
  const { countries } = useCountries()

  const countryOptions = countries
    .filter(
      (country: country) =>
        country.name === 'Germany' || country.name === 'Georgia'
    )
    .map((country: country) => ({
      icon: country.flags.svg,
      name: country.countryCallingCode,
      value: country.countryCallingCode
    }))

  const [signUpStep, setSignUpStep] = useState('personal_information')
  // const [signUpStep, setSignUpStep] = useState('security_and_password')

  const [userInformation, setUserInformation] = useState({
    first_name: '',
    last_name: '',
    email: '',
    countryCode: '',
    phone: '',
    password: '',
    password_repeat: ''
  })

  const [nextStepDisabled, setNextStepDisabled] = useState(true)
  const [isSignUpDisabled, setIsSignUpDisabled] = useState(true)

  const handleFormInputChange = (event: any) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    const isFirstNameFilled = userInformation.first_name.length > 0
    const isLastNameFilled = userInformation.last_name.length > 0
    const isEmailFilled = userInformation.email.length > 0
    const isCountrySelected = userInformation.countryCode.length > 0
    const isPhoneFilled = userInformation.phone.length > 0

    setNextStepDisabled(
      isFirstNameFilled &&
        isLastNameFilled &&
        isEmailFilled &&
        isCountrySelected &&
        isPhoneFilled
    )
  }, [userInformation, nextStepDisabled])

  useEffect(() => {
    const isPasswordFilled = userInformation.password.length > 0
    const isRepeatPasswordFilled = userInformation.password_repeat.length > 0

    setIsSignUpDisabled(isPasswordFilled && isRepeatPasswordFilled)
  }, [userInformation, isSignUpDisabled])

  const handleContinueClick = () => {
    if (signUpStep === 'personal_information') {
      console.log('Next step')
      setSignUpStep('security_and_password')
    }
  }

  const handleCountryCodeClick = (value: string) => {
    setUserInformation({
      ...userInformation,
      countryCode: value
    })
  }

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSignUpClick = () => {
    axios
      .post(`${DOMAIN}/api/register`, {
        email: userInformation.email,
        password: userInformation.password,
        password_confirmation: userInformation.password_repeat
      })
      .then(async function (response) {
        console.log(response)

        // set access token
        Cookies.set('token', response.data.data.token)

        // TODO: set user data in redux
        dispatch(setUser(response.data.data))

        // navigate to dashboard
        navigate(AppRoutePath.DASHBOARD())
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="h-full min-h-[100vh] w-full max-w-[100vw]">
      {/* Field Input Section */}
      <header className="flex justify-center border-b border-[#EBEBF0] p-4 pl-6">
        <a href={AppRoutePath.HOME()}>
          <img src="/main_logo.svg" />
        </a>
      </header>
      {signUpStep === 'personal_information' && (
        <section className="py-[48px]">
          <div className="mx-auto w-full max-w-[520px] px-6">
            <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
              Personal Information
            </Typography>
            <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
              Please, as a first step provide personal information below
            </Typography>
            <form className="mt-10 flex flex-col gap-4" action="/api/test">
              <div className="flex items-center gap-4">
                <InputText
                  name="first_name"
                  label="First name"
                  placeholder="Enter your name"
                  className="w-full"
                  value={userInformation.first_name}
                  onChange={handleFormInputChange}
                />
                <InputText
                  name="last_name"
                  label="Last name"
                  placeholder="Enter your last name"
                  className="w-full"
                  value={userInformation.last_name}
                  onChange={handleFormInputChange}
                />
              </div>
              <InputText
                name="email"
                label="Email"
                placeholder="Enter your email"
                className="w-full"
                value={userInformation.email}
                onChange={handleFormInputChange}
              />
              <div className="flex items-center gap-4">
                <InputSelect
                  name="countryCode"
                  label="Country"
                  options={countryOptions}
                  className="border-[#EBEBF0]"
                  onClick={handleCountryCodeClick}
                />
                <InputText
                  name="phone"
                  label="Phone"
                  placeholder="000 000 000"
                  className="w-full"
                  value={userInformation.phone}
                  onChange={handleFormInputChange}
                />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <Button type="secondary">Cancel</Button>
                <Button
                  type="primary"
                  onClick={handleContinueClick}
                  disabled={!nextStepDisabled}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
      {signUpStep === 'security_and_password' && (
        <section className="py-[48px]">
          <div className="mx-auto w-full max-w-[520px] px-6">
            <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
              Security and Password
            </Typography>
            <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
              Please set the secured password
            </Typography>
            <form className="mt-10 flex flex-col gap-4" action="/api/test">
              <InputText
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                className="w-full"
                value={userInformation.password}
                onChange={handleFormInputChange}
              />
              <InputText
                type="password"
                name="password_repeat"
                label="Repeat Password"
                placeholder="Enter your password"
                className="w-full"
                value={userInformation.password_repeat}
                onChange={handleFormInputChange}
              />
              <div className="mt-8 flex items-center justify-between">
                <Button type="secondary" submit>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={handleSignUpClick}
                  disabled={!isSignUpDisabled}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  )
}
