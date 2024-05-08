interface IRating {
  rating: number
}

export const Rating = ({ rating }: IRating) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.99967 14.1667L5.10148 17.1585L6.43323 11.5755L2.07422 7.84157L7.79549 7.38289L9.99967 2.08337L12.2039 7.38289L17.9252 7.84157L13.5662 11.5755L14.8979 17.1585L9.99967 14.1667Z"
            fill="#02B47A"
          />
        </svg>
      ))}
    </div>
  )
}
