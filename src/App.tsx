import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import 'ipfs-system/all.css'
import { PTMono } from '@components/System/PTMono'

import { theme, Box, Button, Heading } from '@components/System'
import MDXProvider from '@components/System/MDXProvider'

console.log(theme)

// import system comps
import { Header, Hero } from 'ipfs-system'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <PTMono />
        <Box
          className="w-100 sans-serif white transition-all"
          bg={['red', 'blue']}
        >
          <Header title="" />
          <Hero className="vh-50 vh-75-ns bg-black-05 pa4 tl flex items-center">
            <Heading
              as="h1"
              fontSize={9}
              className="ma0 f-headline-ns lh-solid"
            >
              Hello
            </Heading>
            <Heading as="h2" className="ma0 f3-ns lh-title">
              Join the InterPlanetary Future
            </Heading>
            <Button bg="red">Hello</Button>
          </Hero>
          <Box overflow="auto">
            <pre>{JSON.stringify(theme)}</pre>
          </Box>
          <nav>
            <Link className="link white" to="/">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <Box p={3} bg="white" color="charcoal" className=" lh-copy">
            <MDXProvider>
              <Routes />
            </MDXProvider>
          </Box>
        </Box>
      </Root>
    </ThemeProvider>
  )
}

export default App
