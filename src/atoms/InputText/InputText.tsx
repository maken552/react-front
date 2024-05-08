import { Typography } from '@material-tailwind/react'
import cn from 'classnames'

interface IInputText {
  name?: string
  type?: string
  label?: string
  value?: string
  placeholder?: string
  onChange?: (event: any) => void
  className?: string
}

export const InputText = ({
  name,
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
  className
}: IInputText) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-[8px] bg-[#F7F7F9] p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]',
        className
      )}
    >
      {label && (
        <Typography className="text-xs font-semibold leading-4 text-[#0a0b0d]">
          {label}
        </Typography>
      )}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="w-full bg-[#F7F7F9] text-sm font-medium leading-[20px] text-[#0A0B0D] outline-0 placeholder:text-[#7F8992]"
        onChange={onChange}
      />
    </div>
  )
}
