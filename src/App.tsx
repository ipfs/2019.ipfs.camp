import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { Link } from '@reach/router'
import RandomWord from 'react-random-word'
import 'ipfs-system/all.css'
import '@components/System/global.css'
import { theme, Box, ButtonLink, Heading, Text } from '@components/System'
import MDXProvider from '@components/System/MDXProvider'

import { Logo } from '@components/Logo'

console.log(theme)

// import system comps
import { Hero } from 'ipfs-system'
import { ThemeProvider } from 'styled-components'
import { FadeIn } from '@components/Animations/FadeIn'
import { Stars } from '@components/Stars'
import { Footer } from '@components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Head>
          <title>IPFS Camp 2019 🏕</title>
        </Head>
        <Box className="w-100 sans-serif white transition-all bt bw3 b--silver">
          {/* <Header title="" /> */}
          <FadeIn>
            <Box as="nav" p={3} bg="primary2">
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
            <Hero className="min-vh-95 pa4 pa5-ns tl flex items-center relative overflow-hidden">
              <div className="hero-bg absolute top-0 bottom-0 left-0 right-0 skew-l" />
              <Stars />
              <Box className="lh-copy z-1" maxWidth={'50em'}>
                <Logo style={{ minWidth: '220px', width: '40%' }} />
                <Heading
                  as="h1"
                  fontSize={[5, 7]}
                  className="lh-solid pt-mono"
                  style={{ wordWrap: 'break-word' }}
                  height="3em"
                >
                  <RandomWord
                    word="Discover an InterPlanetary Future"
                    speed={40}
                    rounds={30}
                    letters="QmcSKzW6SSS2ygfbXHJHtNnDtJd4pHvVHDQUwhiM5FuWkX"
                  />
                </Heading>
                <Text className="measure-wide f4-ns" color="neutral2">
                  IPFS Camp is an experience designed for the builders of the
                  Distributed Web and Decentralization enthusiasts. We will
                  bring together the Core Developers and Contributors to the
                  project, Community Leaders, Builders on top of IPFS and the
                  Distributed Web.
                </Text>
                <Text className="pt-mono f2" py={4}>
                  June 27-30, Barcelona
                </Text>
                <ButtonLink
                  href="//google.com"
                  px={4}
                  py={3}
                  fontSize={3}
                  bg="red"
                  color="white"
                  className="grow pointer"
                >
                  Apply to attend
                </ButtonLink>
              </Box>
            </Hero>
          </FadeIn>
          <Box className="pa5 bg-white charcoal lh-copy">
            <h1 className="lh-title montserrat">What to expect</h1>
            <p className="measure-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Timeline</h2>
            <ul>
              <li>Registration Opens</li>
              <li>First Attendees Selected</li>
              <li>Full Info Announced</li>
              <li>Registration Closes</li>
            </ul>
          </Box>
          <Box p={4} overflow="auto" bg="dark3">
            <code>{JSON.stringify(theme)}</code>
          </Box>
          <Box px={4} py={3} bg="white" color="charcoal" className=" lh-copy">
            <MDXProvider>
              <Routes />
            </MDXProvider>
          </Box>
        </Box>
        <Footer>
          <Box bg="dark3" className="pa5 bt-1 gray bt bw3 b--silver sans-serif">
            I AM A FOOTER
          </Box>
        </Footer>
      </Root>
    </ThemeProvider>
  )
}

export default App
