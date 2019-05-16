import React, { FunctionComponent } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  RouteComponentProps,
} from '@reach/router'

// default exports from @reach/router
export { Router, Match, navigate } from '@reach/router'

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

type ScrollToTopProps = RouteComponentProps & {
  children: React.ReactNode
  exclude?: RegExp
}

var _lastPath = ''

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  children,
  location,
  exclude,
}) => {
  React.useEffect(() => scroll(location), [location.href])

  const scrollToY = (offsetTop: number) => {
    // run in a timeout to fix ops in firefox
    setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, offsetTop)
      }
    }, 200)
  }

  const scroll = (location: RouteComponentProps['location']) => {
    if (
      exclude &&
      _lastPath.search(exclude) !== -1 &&
      location.href.search(exclude) !== -1
    ) {
      _lastPath = location.pathname
      return
    } else {
      _lastPath = location.pathname
    }
    const findEl = async (hash: string) => await document.querySelector(hash)

    if (location.hash) {
      findEl(location.hash).then(el => {
        return scrollToY((el as any).offsetTop)
      })
    } else {
      return scrollToY(0)
    }
  }
  return <>{children}</>
}
