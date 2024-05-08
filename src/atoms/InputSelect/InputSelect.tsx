import { Option, Select, Typography } from '@material-tailwind/react'
import cn from 'classnames'
import { useState } from 'react'

import { IconChevron } from '@/assets/Icons'

interface IOptionsArray {
  icon?: string
  name: string
  value: string
}

interface IInputSelect {
  name?: string
  label?: string
  placeholder?: string
  options: IOptionsArray[]
  onChange?: () => void
  onClick: (value: string) => void
  className?: string
}

export const InputSelect = ({
  name,
  label,
  placeholder,
  options,
  onChange,
  onClick,
  className
}: IInputSelect) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-[8px] bg-[#fff] p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]',
        className
      )}
    >
      {label && (
        <Typography className="text-xs font-semibold leading-4 text-[#0a0b0d]">
          {label}
        </Typography>
      )}
      <Select
        name={name}
        variant="standard"
        placeholder={placeholder}
        onChange={onChange}
        className="input-select flex w-full items-center gap-2 !border-b-0 !border-none p-0"
        containerProps={{
          className: '!min-w-[84px] h-[20px] p-0'
        }}
        labelProps={{
          className: 'hidden p-0'
        }}
        menuProps={{
          className: 'p-1'
        }}
      >
        {options &&
          options.map(({ icon, name, value }, index) => (
            <Option key={index} value={value} onClick={() => onClick(name)}>
              <div className="flex items-center gap-2">
                {icon && (
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center">
                    <img src={icon} />
                  </div>
                )}
                <span className="text-sm font-medium leading-[20px] text-[#0a0b0d]">
                  {name}
                </span>
              </div>
            </Option>
          ))}
      </Select>
    </div>
  )
}
