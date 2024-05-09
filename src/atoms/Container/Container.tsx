import cn from 'classnames'

interface IContainer {
  children?: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: IContainer) => {
  const classcn = cn('mx-auto container px-4', className)
  return <div className={classcn}>{children}</div>
}
