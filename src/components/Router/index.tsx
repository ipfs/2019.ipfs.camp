import React, { FunctionComponent } from 'react'
import {
  Router,
  Match,
  Link,
  LinkProps,
  RouteComponentProps,
} from '@reach/router'

// default exports from @reach/router
export { Router, Match, Link }

type NavLinkProps<T> = LinkProps<T> & {
  ref?: React.LegacyRef<Link<T>>
  activeClassName?: string
}

export const NavLink: React.SFC<NavLinkProps<HTMLAnchorElement>> = ({
  activeClassName,
  ...props
}) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent
          ? `${props.className} ${activeClassName}`
          : props.className,
      }
    }}
  />
)

NavLink.defaultProps = {
  activeClassName: 'bb',
}

type Props = { component: FunctionComponent } & RouteComponentProps

export const Route: FunctionComponent<Props> = ({
  component: Component,
  ...rest
}) => <Component {...rest} />
