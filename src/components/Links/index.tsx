import React from 'react'
import { Link, LinkProps } from '@reach/router'

type NavLinkProps<T> = LinkProps<T> & {
  ref?: React.LegacyRef<Link<T>>
}

export const NavLink: React.SFC<NavLinkProps<HTMLAnchorElement>> = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? `${props.className} red` : props.className,
      }
    }}
  />
)

// export Link component from router
export { Link }
