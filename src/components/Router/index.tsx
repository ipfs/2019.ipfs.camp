import React, { FunctionComponent } from 'react'
import {
  Router,
  Match,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  RouteComponentProps,
} from '@reach/router'

// default exports from @reach/router
export { Router, Match }

export type LinkProps<T> = RouterLinkProps<T> & {
  ref?: React.LegacyRef<RouterLink<T>>
  href?: string
}

// router link that handles href and to props
export const Link: React.FC<LinkProps<HTMLAnchorElement>> = ({
  to,
  href,
  children,
  ...props
}) => {
  to = href ? href : to
  return to.search(/^(http|#)/) === 0 ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  )
}

type NavLinkProps<T> = RouterLinkProps<T> & {
  ref?: React.LegacyRef<RouterLink<T>>
  activeClassName?: string
}

export const NavLink: React.FC<NavLinkProps<HTMLAnchorElement>> = ({
  activeClassName,
  ...props
}) => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        className: isPartiallyCurrent
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
