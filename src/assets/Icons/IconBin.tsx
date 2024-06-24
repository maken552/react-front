interface IIcon {
  size?: number
  className?: string
}

const IconBin = ({ size = 16, className }: IIcon) => {
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
        d="M11.333 4.00001H14.6663V5.33334H13.333V14C13.333 14.3682 13.0345 14.6667 12.6663 14.6667H3.33301C2.96482 14.6667 2.66634 14.3682 2.66634 14V5.33334H1.33301V4.00001H4.66634V2.00001C4.66634 1.63182 4.96482 1.33334 5.33301 1.33334H10.6663C11.0345 1.33334 11.333 1.63182 11.333 2.00001V4.00001ZM5.99967 7.33334V11.3333H7.33301V7.33334H5.99967ZM8.66634 7.33334V11.3333H9.99967V7.33334H8.66634ZM5.99967 2.66668V4.00001H9.99967V2.66668H5.99967Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconBin
