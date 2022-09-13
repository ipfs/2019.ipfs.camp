import React from 'react'
import { Root, Routes, useSiteData } from 'react-static'
import { NavLink, Match, Router, ScrollToTop } from '@components/Router'
import { DefaultMeta, Card } from '@components/Meta'
import './app.css'
import '@components/System/global.css'
import { theme, Box, GlobalStyle } from '@components/System'
import { Button } from '@components/Buttons'
import MDXProvider from '@components/System/MDXProvider'

// import system comps

import { ThemeProvider } from 'styled-components'
import { FadeIn } from '@components/Animations/FadeIn'
import { Analytics } from '@components/Analytics'
import { Footer } from '@components/Footer'
import { Logo } from '@components/Logo'
import { RouteComponentProps } from '@reach/router'
import { Hamburgler } from '@components/Hamburgler'
import { Sponsors } from '@components/Sponsors'

// types
import { SiteData } from './types'

const NavItems: React.FC = () => {
  const { tickets, archived } = useSiteData<SiteData>()
  return (
    <>
      <li className="dib">
        <NavLink className="dark3 pv3 mh3" to="/schedule">
          Schedule
        </NavLink>
      </li>
      <li className="dib">
        <NavLink className="dark3 pv3 mh3" to="/team">
          Team
        </NavLink>
      </li>
      <li className="dib">
        <NavLink className="dark3 pv3 mh3" to="/location">
          Location
        </NavLink>
      </li>
      <li className="dib">
        <NavLink className="dark3 pv3 mh3" to="/faq">
          FAQ
        </NavLink>
      </li>
      <li className="dib">
        <NavLink className="dark3 pv3 mh3" to="/code-of-conduct">
          Conduct
        </NavLink>
      </li>
      <li className="dib pv2 link ml3-ns">
        {!archived ? (
          <Button to="/register" outline={!tickets.onSale} primaryColor="dark3">
            {tickets.onSale
              ? tickets.waitlist
                ? tickets.waitlistCta
                : tickets.regLink
              : 'Sold Out'}
          </Button>
        ) : (
          <Button to="/schedule" outline={!tickets.onSale} primaryColor="dark3">
            Schedule
          </Button>
        )}
      </li>
    </>
  )
}

const Nav: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <nav className="monospace f5 fixed-ns left-0 right-0 top-0 z-999 bg-white bb b--neutral1">
        <div className="block pa3 tc bg-primary2 white f7 b">
          <a className="link white db" href="https://ipfs.camp">
            IPFS Camp is back,{' '}
            <span className="underline">join the latest event!</span>
          </a>
        </div>
        <div className="ph4 ph5-ns pv3 pv1-ns mw9 center flex items-center">
          <NavLink className="link white" activeClassName="" to="/">
            <Logo
              className="fl db mr2 mt1 contain grow"
              type="h"
              color="r"
              style={{
                minWidth: '155px',
                height: '55px',
              }}
            />
          </NavLink>

          <nav className="dn db-ns flex-grow-1">
            <ul className="list tr">
              <NavItems />
            </ul>
          </nav>

          <div className="db dn-ns">
            <Hamburgler>
              <div className="vh-100">
                <nav className="">
                  <ul className="flex flex-column justify-center items-center vh-100 pa0 ma0">
                    <div className="mb3 tc">
                      <NavLink to="/">
                        <Logo
                          type="h"
                          color="i"
                          style={{ height: '58px', width: '200px' }}
                        />
                      </NavLink>
                      <p className="neutral1 pa2">June 27-30, Barcelona</p>
                    </div>
                    <NavItems />
                  </ul>
                </nav>
              </div>
            </Hamburgler>
          </div>
        </div>
      </nav>
      <div className="nav-margin dn db-ns" style={{ height: '95px' }} />
    </>
  )
}

const App = () => {
  const { gtagId } = useSiteData<SiteData>()
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <React.Suspense fallback={<em />}>
          <GlobalStyle />

          <Router>
            <Analytics id={gtagId} path="*" />
          </Router>

          <DefaultMeta />
          <Card />
          <Match path="/*">
            {(props: any) => (props.match ? <Nav /> : null)}
          </Match>
          <Box className="sans-serif white transition-all">
            <FadeIn>
              <main>
                <MDXProvider>
                  <Router primary={false}>
                    <ScrollToTop path="*" exclude={/schedule/}>
                      <Routes path="*" />
                    </ScrollToTop>
                  </Router>
                </MDXProvider>
              </main>
              <Sponsors />
            </FadeIn>
          </Box>
          <Footer />
        </React.Suspense>
      </Root>
    </ThemeProvider>
  )
}

export default () => (
  <React.Suspense fallback={<em />}>
    <App />
  </React.Suspense>
)
