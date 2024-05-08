import cn from 'classnames'

interface IButton {
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  submit?: boolean
  disabled?: boolean
}

export const Button = ({
  type,
  size = 'sm',
  onClick,
  className,
  children,
  submit,
  disabled
}: IButton) => {
  const buttoncn = cn(
    type === 'primary' &&
      'bg-[hsla(214.48,95.653%,46.946%)] text-[#fff] hover:bg-[hsla(214.48,95.653%,50%)] active:bg-[hsla(214.48,95.653%,40%)]',
    type === 'secondary' &&
      'bg-[#fff] border border-[hsla(229.53,26.731%,89.339%)] text-[#0A0B0D] hover:border-[hsla(229.53,46.731%,79.339%)]',
    type === 'tertiary' &&
      'bg-[hsla(228.61,11.119%,11.812%)] text-[#fff] hover:bg-[hsla(228.61,11.119%,15.812%)] active:bg-[hsla(228.61,11.119%,5.812%)]',
    size === 'sm' && 'px-4 py-2',
    size === 'md' && 'py-3 px-4',
    'rounded-[32px] px-4 py-2 text-sm font-semibold leading-6 disabled:bg-[#E5E5E5]',
    className
  )
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={buttoncn}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
