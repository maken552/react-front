interface IIcon {
  size?: number
  className?: string
}

const IconCheckFill = ({ size = 20, className }: IIcon) => {
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
        d="M10 18.3333C5.39765 18.3333 1.66669 14.6023 1.66669 10C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 10C18.3334 14.6023 14.6024 18.3333 10 18.3333ZM9.16885 13.3333L15.0614 7.44077L13.8829 6.26226L9.16885 10.9763L6.81186 8.61925L5.63335 9.79783L9.16885 13.3333Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default IconCheckFill
