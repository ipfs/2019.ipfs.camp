import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { Link } from '@reach/router'
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <Head htmlAttributes={{ lang: 'en-US' }}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>IPFS Camp 2019 🏕</title>
        </Head>
        <Box className="w-100 sans-serif white transition-all bt bw3 b--silver">
          {/* <Header title="" /> */}
          <FadeIn>
            <nav className="nested-links bg-primary5">
              <div className="ph4 ph5-ns pv4 mw9 center flex items-center">
                <Link className="link white" to="/">
                  <Logo
                    className="fl db mr2 mt1 cover"
                    type="h"
                    style={{
                      minWidth: '200px',
                      height: '80px',
                    }}
                  />
                </Link>
                <ul className="list">
                  <li className="dib">
                    <Link className="link white" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="dib ph2 link">
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            </nav>
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
