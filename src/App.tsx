import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { Link } from '@reach/router'
import 'ipfs-system/all.css'
import '@components/System/global.css'
import { theme, Box } from '@components/System'
import MDXProvider from '@components/System/MDXProvider'

// import system comps

import { ThemeProvider } from 'styled-components'
import { FadeIn } from '@components/Animations/FadeIn'
import { Footer } from '@components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Head htmlAttributes={{ lang: 'en-US' }}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>IPFS Camp 2019 🏕</title>
        </Head>
        <Box className="w-100 sans-serif white transition-all bt bw3 b--silver">
          {/* <Header title="" /> */}
          <FadeIn>
            <Box as="nav" className="pa2 mw9 center">
              <ul className="list">
                <li className="dib">
                  <Link className="link white" to="/">
                    Home
                  </Link>
                </li>
                <li className="dib ph2 link">
                  <Link to="/about">About</Link>
                </li>
                <li className="dib ph2">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </Box>
            <MDXProvider>
              <Routes />
            </MDXProvider>
          </FadeIn>
        </Box>
        <Footer>
          <Box p={4} overflow="auto" bg="dark3" color="white">
            <code>{JSON.stringify(theme)}</code>
          </Box>
          <Box bg="dark3" className="pa5 bt-1 gray bt bw3 b--silver sans-serif">
            I AM A FOOTER
          </Box>
        </Footer>
      </Root>
    </ThemeProvider>
  )
}

export default App
