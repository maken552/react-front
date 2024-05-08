import cn from 'classnames'

interface IDashboardCard {
  children: React.ReactNode
  className?: string
}

export const DashboardCard = ({ children, className }: IDashboardCard) => {
  return (
    <div
      className={cn(
        'rounded-[16px] border border-[#F0F0F0] p-4 shadow-[0_1px_2px_0_rgba(127,137,146,0.10)]',
        className
      )}
    >
      {children}
    </div>
  )
}
