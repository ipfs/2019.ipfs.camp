import React from 'react'
import { withSiteData } from 'react-static'

import { Hero } from 'ipfs-system'
import RandomWord from 'react-random-word'
import { Stars } from '@components/Stars'
import { Box, ButtonLink, Heading, Text } from '@components/System'
import { Logo } from '@components/Logo'

export default withSiteData(() => (
  <>
    <Hero className="min-vh-95 relative overflow-hidden">
      <Stars className="bg-dark3 skew-l" style={{ top: '-10%' }} />
      <Box className="pa4 pa5-ns lh-copy mw9 center">
        <Box className="mw7 left">
          <Logo
            type="v"
            style={{ minWidth: '220px', width: '20%', height: '15rem' }}
          />
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
            <strong>IPFS Camp</strong> is a{' '}
            <strong>3 day hackers retreat</strong> designed for the{' '}
            <strong>builders</strong> of the <strong>Distributed Web</strong>.
            Join the core developers for a hands on experience packed with
            workshops, lectures and deep-dives.
          </Text>
          <Text className="pv4 pt-mono f4 f3-m f2-l">
            June 27-30, Barcelona
          </Text>
          <ButtonLink
            href="/register"
            px={4}
            py={3}
            fontSize={3}
            bg="primary3"
            className="grow pointer"
          >
            <span className="white">Registration Open</span>
          </ButtonLink>
        </Box>
      </Box>
    </Hero>
    <section className="bg-white lh-copy dark3 ">
      <div className="pa4 pa5-ns pt0 pt0-ns mw9 center f5 f4-l">
        <div className="flex items-center">
          <div className="w-50-ns">
            <Heading className="lh-title">What to expect</Heading>
            <p>
              The event will be packed with moments of knowledge transfer,
              collective brainstorming, pairing with core developers, and
              empowering users and contributors ✨
            </p>
          </div>
          <div className="w-50-ns">[ PROJECT LOGOS ]</div>
        </div>

        <section className="mv4">
          <Heading>Sponsors</Heading>
          <Heading>Want to Sponsor or get involved?</Heading>
        </section>
      </div>
    </section>
  </>
))
