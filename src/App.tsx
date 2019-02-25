import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { NavLink, Match } from '@components/Router'
import 'ipfs-system/all.css'
import './app.css'
import '@components/System/global.css'
import { theme, Box, GlobalStyle } from '@components/System'
import MDXProvider from '@components/System/MDXProvider'

// import system comps

import { ThemeProvider } from 'styled-components'
import { FadeIn } from '@components/Animations/FadeIn'
import { Footer } from '@components/Footer'
import { Logo } from '@components/Logo'
import { RouteComponentProps } from '@reach/router'

const Nav: React.SFC<RouteComponentProps> = () => (
  <nav className="monospace ttu f5 bg-primary5">
    <div className="ph4 ph5-ns pv3 mw9 center flex items-center">
      <NavLink className="link white" activeClassName="" to="/">
        <Logo
          className="fl db mr2 mt1 cover"
          type="h"
          style={{
            minWidth: '200px',
            height: '80px',
          }}
        />
      </NavLink>
      <ul className="list flex-grow-1 tr">
        <li className="dib">
          <NavLink className="link neutral4 pa3 ttu" to="/faq">
            FAQ
          </NavLink>
        </li>
        <li className="dib ph2 link">
          <NavLink className="neutral4 pa3 ttu" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <Head htmlAttributes={{ lang: 'en-US' }}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>IPFS Camp 2019 🏕</title>
        </Head>
        <Box className="w-100 sans-serif white transition-all bt bw3 b--neutral4">
          <Match path="/:item">
            {(props: any) => (props.match ? <Nav /> : null)}
          </Match>

          <FadeIn>
            <main className="nested-links">
              <MDXProvider>
                <Routes />
              </MDXProvider>
            </main>
          </FadeIn>
        </Box>
        <Footer />
      </Root>
    </ThemeProvider>
  )
}

export default App
