interface IIcon {
  size?: number
  className?: string
}

const IconCrossFill = ({ size = 20, className }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M9.99984 18.3334C5.39746 18.3334 1.6665 14.6024 1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001C18.3332 14.6024 14.6022 18.3334 9.99984 18.3334ZM9.99984 8.82158L7.64281 6.46455L6.4643 7.64306L8.82134 10.0001L6.4643 12.3571L7.64281 13.5356L9.99984 11.1786L12.3568 13.5356L13.5353 12.3571L11.1783 10.0001L13.5353 7.64306L12.3568 6.46455L9.99984 8.82158Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconCrossFill
