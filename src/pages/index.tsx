import React from 'react'
import { withSiteData } from 'react-static'

import { Hero } from 'ipfs-system'
import RandomWord from 'react-random-word'
import { Stars } from '@components/Stars'
import { Box, ButtonLink, Heading, Text } from '@components/System'
import { Logo } from '@components/Logo'

export default withSiteData(() => (
  <>
    <Hero className="min-vh-95 pa4 pa5-ns relative overflow-hidden">
      <Stars className="bg-dark3 skew-l" style={{ top: '-10%' }} />
      <Box className="lh-copy mw9 center">
        <Box className="mw7 left">
          <Logo style={{ minWidth: '220px', width: '20%' }} />
          <Heading
            as="h1"
            fontSize={[5, 7]}
            className="lh-solid pt-mono"
            height="3em"
            style={{ wordWrap: 'break-word' }}
          >
            <RandomWord
              word="Discover an InterPlanetary Future"
              speed={40}
              rounds={30}
              letters="QmcSKzW6SSS2ygfbXHJHtNnDtJd4pHvVHDQUwhiM5FuWkX"
            />
          </Heading>

          <Text className="measure-wide f5 f4-m f3-l" color="neutral2">
            <strong>IPFS Camp</strong> is <strong>3 day experience</strong>{' '}
            designed for the <strong>builders</strong> and{' '}
            <strong>enthusiasts</strong> of the <strong>Distributed Web</strong>
            .
          </Text>
          <Text className="measure-wide f5 f4-m f4-l mt4 monospace neutral1">
            The schedule will be packed with moments for knowledge transfer and
            learning, collective brainstorming, empowerment of the core
            developers, users and contributors ✨
          </Text>
          <Text className="pv4 pt-mono f4 f3-m f2-l">
            June 27-30, Barcelona
          </Text>
          <ButtonLink
            href="/registration"
            px={4}
            py={3}
            fontSize={3}
            bg="red"
            color="white"
            className="grow pointer"
          >
            Registration
          </ButtonLink>
        </Box>
      </Box>
    </Hero>
    <section className="pa4 pa5-ns pt0 pt0-ns bg-white lh-copy dark3 ">
      <div className="mw9 center f5 f4-l">
        <h2 className="lh-title montserrat">What to expect</h2>
        <p className="measure-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 className="montserrat">Timeline</h2>
        <ul>
          <li>Registration Opens</li>
          <li>First Attendees Selected</li>
          <li>Full Info Announced</li>
          <li>Registration Closes</li>
        </ul>
        <section className="mv4">
          <h2>Sponsors</h2>
          <div className="aspect-ratio aspect-ratio--1x1 bg-gray" />
        </section>
      </div>
    </section>
  </>
))
