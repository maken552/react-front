interface IIcon {
  size?: number
  className?: string
}

const IconChevron = ({ size = 20, className }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8.4998 8.78092L11.7997 5.48111L12.7425 6.42392L8.4998 10.6666L4.25716 6.42392L5.19997 5.48111L8.4998 8.78092Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconChevron
