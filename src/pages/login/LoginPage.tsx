import { Typography } from '@material-tailwind/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AppRoutePath, DOMAIN } from '@/app/appRoutePath'
import { Button } from '@/atoms/Button/Button'
import { InputText } from '@/atoms/InputText/InputText'
import { setUser } from '@/store/features/userSlice/userSlice'

export const LoginPage = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [userInformation, setUserInformation] = useState({
    email: '',
    password: ''
  })

  const handleFormInputChange = (event: any) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value
    })
  }

  const [isLoginDisabled, setIsLoginDisabled] = useState(true)

  useEffect(() => {
    const isEmailFilled = userInformation.email.length > 0
    const isPasswordFilled = userInformation.password.length > 0

    setIsLoginDisabled(isEmailFilled && isPasswordFilled)
  }, [userInformation, isLoginDisabled])

  const handleLoginClick = () => {
    console.log('login pushed', userInformation)
    axios
      .post(`${DOMAIN}/api/login`, {
        email: userInformation.email,
        password: userInformation.password
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
      <section className="py-[48px]">
        <div className="mx-auto w-full max-w-[520px] px-6">
          <Typography className="text-[32px] font-semibold leading-[48px] text-[#0a0b0d] max-sm:text-[24px]">
            Login
          </Typography>
          <Typography className="text-[16px] font-normal leading-6 text-[#7F8992] max-sm:text-[14px]">
            Enter your email and password to continue
          </Typography>
          <form className="mt-10 flex flex-col gap-4" action="/api/test">
            <InputText
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              className="w-full"
              value={userInformation.email}
              onChange={handleFormInputChange}
            />
            <InputText
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              className="w-full"
              value={userInformation.password}
              onChange={handleFormInputChange}
            />
            <div className="mt-8 flex items-center justify-end">
              <Button
                type="primary"
                onClick={handleLoginClick}
                disabled={!isLoginDisabled}
              >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
