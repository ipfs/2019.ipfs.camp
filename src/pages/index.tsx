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
      <aside className="hero-bg absolute top-0 bottom-0 left-0 right-0 skew-l z-00">
        <Stars />
      </aside>
      <Box className="lh-copy z-1 mw9 center z-999">
        <Box className="mw7 left">
          <Logo style={{ minWidth: '220px', width: '20%' }} />
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
          <Text className="measure-wide f5 f4-m f3-l" color="neutral1">
            <Text as="strong" color="primary7">
              IPFS Camp
            </Text>{' '}
            is{' '}
            <Text as="strong" color="primary1">
              3 day experience
            </Text>{' '}
            designed for the{' '}
            <Text as="strong" color="primary4">
              builders
            </Text>{' '}
            and{' '}
            <Text as="strong" color="primary4">
              enthusiasts
            </Text>{' '}
            of the{' '}
            <Text as="strong" color="primary9">
              Distributed Web
            </Text>
            .
          </Text>
          <Text className="measure-wide f5 f4-m f4-l" color="neutral1">
            The schedule will be packed with moments for knowledge transfer and
            learning, collective brainstorming, empowerment of the core
            developers, users and contributors.
          </Text>
          <Text className="pv4 pt-mono f4 f3-m f2-l">
            June 27-30, Barcelona
          </Text>
          <ButtonLink
            href="https://google.com"
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
      </Box>
    </Hero>
    <Box className="pa5 pt0 bg-white lh-copy" color="dark3">
      <Box className="mw9 center f5 f4-l">
        <h1 className="lh-title montserrat blue">What to expect</h1>
        <p className="measure-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Timeline</h2>
        <ul>
          <li>Registration Opens</li>
          <li>First Attendees Selected</li>
          <li>Full Info Announced</li>
          <li>Registration Closes</li>
        </ul>
      </Box>
    </Box>
  </>
))
