import { Alert, Dialog, Spinner, Typography } from '@material-tailwind/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'

import { AppRoutePath, DOMAIN } from '@/app/appRoutePath'
import {
  IconBin,
  IconLock,
  IconPersonalAddress,
  IconPersonalId
} from '@/assets/Icons'
import IconCrossOutline from '@/assets/Icons/IconCrossOutline'
import { Button } from '@/atoms/Button/Button'
import { DashboardCard } from '@/atoms/DashboardCard/DashboardCard'
import { InputText } from '@/atoms/InputText/InputText'
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader'

export const SettingsPage = () => {
  const [passwordDialogIsOpen, setPasswordDialogIsOpen] = useState(false)
  const passwordDialogHandler = () =>
    setPasswordDialogIsOpen(!passwordDialogIsOpen)

  const [verifyIdentityDialogIsOpen, setVerifyIdentityDialogIsOpen] =
    useState(false)
  const verifyIdentityDialogHandler = () =>
    setVerifyIdentityDialogIsOpen(!verifyIdentityDialogIsOpen)

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
              onClick={passwordDialogHandler}
            />
            <SettingsPageItem
              icon={<IconPersonalId />}
              name="Personal Verification"
              desc="Verify your identity"
              status="required"
              action="verify"
              onClick={verifyIdentityDialogHandler}
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
      <UpdatePasswordDialog
        open={passwordDialogIsOpen}
        handler={passwordDialogHandler}
      />
      <VerifyIdentityDialog
        open={verifyIdentityDialogIsOpen}
        handler={verifyIdentityDialogHandler}
      />
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

interface IUpdatePasswordDialog {
  open: boolean
  handler: () => void
}

const UpdatePasswordDialog = ({ open, handler }: IUpdatePasswordDialog) => {
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(false)

  const [userInformation, setUserInformation] = useState({
    password: '',
    new_password: '',
    new_password_repeat: ''
  })

  const handleFormInputChange = (event: any) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value
    })
  }

  const PostPasswordUpdateToAPI = () => {
    setAlert('')
    setLoading(true)
    axios
      .post(
        `${DOMAIN}/api/settings/profile/password/update`,
        {
          old_password: userInformation.password,
          password: userInformation.new_password,
          password_confirmation: userInformation.new_password_repeat
        },
        {
          headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        }
      )
      .then(async function (response) {
        setLoading(false)
        console.log(response)
        handler()
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
        setAlert('Password update failed')
      })
  }

  return (
    <Dialog open={open} handler={handler}>
      <div className="flex justify-between border-b border-[#F5F5F5] p-4">
        <Typography className="text-[16px] font-medium leading-6 text-[#0a0b0d]">
          Update Password
        </Typography>
        <button onClick={handler}>
          <IconCrossOutline />
        </button>
      </div>
      <div className="flex flex-col gap-6 px-4 py-6">
        <InputText
          type="password"
          name="password"
          label="Old Password"
          placeholder="Enter your current password"
          className="w-full"
          value={userInformation.password}
          onChange={handleFormInputChange}
        />
        <InputText
          type="password"
          name="new_password"
          label="New Password"
          placeholder="Enter your new password"
          className="w-full"
          value={userInformation.new_password}
          onChange={handleFormInputChange}
        />
        <InputText
          type="password"
          name="new_password_repeat"
          label="Repeat New Password"
          placeholder="Repeat your new password"
          className="w-full"
          value={userInformation.new_password_repeat}
          onChange={handleFormInputChange}
        />
      </div>
      <div className="rounded-b-[16px] bg-[#F5F5F5] p-4">
        <Button
          type="primary"
          onClick={PostPasswordUpdateToAPI}
          disabled={loading}
        >
          {loading && <Spinner />}
          {!loading && <>Update Password</>}
        </Button>
        {alert && (
          <Alert color="red" className="mt-4 text-xs leading-4">
            {alert}
          </Alert>
        )}
      </div>
    </Dialog>
  )
}

interface IVerifyIdentityDialog {
  open: boolean
  handler: () => void
}

const VerifyIdentityDialog = ({ open, handler }: IVerifyIdentityDialog) => {
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState(false)

  const [userInformation, setUserInformation] = useState({
    password: '',
    new_password: '',
    new_password_repeat: ''
  })

  const handleFormInputChange = (event: any) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value
    })
  }

  const idFrontFileInputRef = useRef<HTMLInputElement>(null)
  const idBackFileInputRef = useRef<HTMLInputElement>(null)
  const selfieFileInputRef = useRef<HTMLInputElement>(null)

  const [idFrontFile, setIdFrontFile] = useState<File | null>(null)
  const [idBackFile, setIdBackFile] = useState<File | null>(null)
  const [selfieFile, setSelfieFile] = useState<File | null>(null)

  const handleIdFrontFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIdFrontFile(e.target.files[0])
    }
  }
  const handleIdBackFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIdBackFile(e.target.files[0])
    }
  }
  const handleSelfieFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelfieFile(e.target.files[0])
    }
  }

  const handleIdFrontFileUploadClick = () => {
    idFrontFileInputRef.current?.click()
  }
  const handleIdBackFileUploadClick = () => {
    idBackFileInputRef.current?.click()
  }
  const handleSelfieFileUploadClick = () => {
    selfieFileInputRef.current?.click()
  }

  const removeIdFrontFile = () => {
    idFrontFileInputRef.current!.value = ''
    setIdFrontFile(null)
  }
  const removeIdBackFile = () => {
    idBackFileInputRef.current!.value = ''
    setIdBackFile(null)
  }
  const removeSelfieFile = () => {
    selfieFileInputRef.current!.value = ''
    setSelfieFile(null)
  }

  useEffect(() => {
    console.log(idFrontFile, idBackFile, selfieFile)
  }, [idFrontFile, idBackFile, selfieFile])

  const PostIdentityVerificationToAPI = () => {
    setAlert('')
    setLoading(true)

    const formData = new FormData()

    if (idFrontFile) {
      formData.append('ID_front_image', idFrontFile)
    }
    if (idBackFile) {
      formData.append('ID_back_image', idBackFile)
    }
    if (selfieFile) {
      formData.append('selfie_image', selfieFile)
    }

    axios
      .post(`${DOMAIN}/api/settings/profile/identity/verification`, formData, {
        headers: { Authorization: `Bearer ${Cookies.get('token')}` }
      })
      .then(async function (response) {
        setLoading(false)
        console.log(response)
        handler()
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error)
        setAlert('Identity Verification Upload Failed')
      })
  }

  return (
    <Dialog open={open} handler={handler}>
      <div className="flex justify-between border-b border-[#F5F5F5] p-4">
        <Typography className="text-[16px] font-medium leading-6 text-[#0a0b0d]">
          Proof of Identity
        </Typography>
        <button onClick={handler}>
          <IconCrossOutline />
        </button>
      </div>
      <div className="flex flex-col gap-6 px-4 py-6">
        <input
          type="file"
          onChange={handleIdFrontFileChange}
          className="hidden"
          ref={idFrontFileInputRef}
        />
        <input
          type="file"
          onChange={handleIdBackFileChange}
          className="hidden"
          ref={idBackFileInputRef}
        />
        <input
          type="file"
          onChange={handleSelfieFileChange}
          className="hidden"
          ref={selfieFileInputRef}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography className="font-medium leading-6 text-[#0a0b0d]">
              ID Front
            </Typography>
            <Typography className="text-xs leading-4 text-[#909499]">
              Proof of Identity Front
            </Typography>
          </div>
          {idFrontFile === null && (
            <button
              onClick={handleIdFrontFileUploadClick}
              className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0a0b0d]"
            >
              Upload
            </button>
          )}
          {idFrontFile !== null && (
            <div className="flex w-[200px] items-center justify-between rounded-[12px] border border-dashed border-[#DFDFDF] px-6 py-4">
              <Typography className="max-w-[120px] truncate text-xs text-[#909499]">
                {idFrontFile.name}
              </Typography>
              <button onClick={removeIdFrontFile}>
                <IconBin />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography className="font-medium leading-6 text-[#0a0b0d]">
              ID Back
            </Typography>
            <Typography className="text-xs leading-4 text-[#909499]">
              Proof of Identity Back
            </Typography>
          </div>
          {idBackFile === null && (
            <button
              onClick={handleIdBackFileUploadClick}
              className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0a0b0d]"
            >
              Upload
            </button>
          )}
          {idBackFile !== null && (
            <div className="flex w-[200px] items-center justify-between rounded-[12px] border border-dashed border-[#DFDFDF] px-6 py-4">
              <Typography className="max-w-[120px] truncate text-xs text-[#909499]">
                {idBackFile.name}
              </Typography>
              <button onClick={removeIdBackFile}>
                <IconBin />
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography className="font-medium leading-6 text-[#0a0b0d]">
              Selfie with ID
            </Typography>
            <Typography className="text-xs leading-4 text-[#909499]">
              Selfie with Proof of Identity
            </Typography>
          </div>
          {selfieFile === null && (
            <button
              onClick={handleSelfieFileUploadClick}
              className="rounded-[32px] bg-[#F4F8FD] px-4 py-2 text-sm font-semibold leading-6 text-[#0a0b0d]"
            >
              Upload
            </button>
          )}
          {selfieFile !== null && (
            <div className="flex w-[200px] items-center justify-between rounded-[12px] border border-dashed border-[#DFDFDF] px-6 py-4">
              <Typography className="max-w-[120px] truncate text-xs text-[#909499]">
                {selfieFile.name}
              </Typography>
              <button onClick={removeSelfieFile}>
                <IconBin />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-b-[16px] bg-[#F5F5F5] p-4">
        <Button
          type="primary"
          onClick={PostIdentityVerificationToAPI}
          disabled={loading}
        >
          {loading && <Spinner />}
          {!loading && <>Send for Verification</>}
        </Button>
        {alert && (
          <Alert color="red" className="mt-4 text-xs leading-4">
            {alert}
          </Alert>
        )}
      </div>
    </Dialog>
  )
}
