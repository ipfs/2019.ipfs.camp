import * as React from 'react'

type HeroProps = {
  center?: boolean
  className?: string
  style?: React.CSSProperties
}

export const Hero: React.FC<HeroProps> = ({
  className = 'vh-100',
  children,
  ...rest
}) => (
  <div className={className} {...rest}>
    {children}
  </div>
)
