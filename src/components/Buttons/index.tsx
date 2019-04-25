import React from 'react'
import { Link } from '@components/Router'
import { LinkProps } from '@reach/router'
import styled from 'styled-components'

type ButtonProps<T> = LinkProps<T> & {
  href?: string
  ref?: React.LegacyRef<Link<T>>
  type?: 'primary'
  size?: 'large'
  block?: boolean
}

const defaultClassName = 'white pv3 ph4 grow pointer br2 bg-primary3'

const Button: React.SFC<ButtonProps<HTMLAnchorElement>> = ({
  to,
  href,
  children,
  className,
  type,
  size,
  block,
  ...rest
}) => {
  const cx = `${className} ${size === 'large' ? 'f3' : 'f5'} ${
    block ? 'db' : 'dib'
  }`
  return href ? (
    <a href={href} className={cx} {...rest}>
      {children}
    </a>
  ) : (
    <Link to={to} className={cx} {...rest}>
      {children}
    </Link>
  )
}
const StyledButton = styled(Button)`
  color: white !important;
`

StyledButton.defaultProps = {
  className: defaultClassName,
}

export { StyledButton as Button }
