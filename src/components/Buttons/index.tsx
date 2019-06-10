import React from 'react'
import { Link } from '@components/Router'
import { LinkProps } from '@components/Router'
import styled from 'styled-components'

type ButtonProps<T> = LinkProps<T> & {
  href?: string
  type?: 'primary'
  size?: 'large'
  block?: boolean
  outline?: boolean
  primaryColor?: string
}

const defaultClassName = 'pv3 ph4 grow pointer br2 monospace lh-solid'

const Button: React.FC<ButtonProps<HTMLAnchorElement>> = ({
  to,
  href,
  children,
  className,
  type,
  size,
  block,
  outline,
  primaryColor = 'primary3',
  ...rest
}) => {
  const cx = `${className} ${outline && 'ba b1'} ${primaryColor} ${
    size === 'large' ? 'f3' : 'f5'
  } ${block ? 'db' : 'dib'}`
  return (
    <Link href={href} to={to} className={cx} {...rest}>
      {children}
    </Link>
  )
}
const StyledButton = styled(Button)``

StyledButton.defaultProps = {
  className: defaultClassName,
}

export { StyledButton as Button }
