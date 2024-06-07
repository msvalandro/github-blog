import { PropsWithChildren } from 'react'

interface PanelProps extends PropsWithChildren {
  className?: string
}

export function Panel({ children, className = '' }: PanelProps) {
  return (
    <div
      className={`relative flex ${className} min-w-[864px] -translate-y-[88px] rounded-[10px] bg-base-profile px-10 py-8`}
    >
      {children}
    </div>
  )
}
