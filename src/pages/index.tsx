import React from 'react'
import { withSiteData } from 'react-static'

import { Hero } from '@components/Hero'
import RandomWord from 'react-random-word'
import { Stars } from '@components/Stars'
import { Box, Heading, Text } from '@components/System'
import { Button } from '@components/Buttons'
import { Logo } from '@components/Logo'
import { Projects } from '@components/Projects'

export default withSiteData(() => (
  <>
    <Hero className="relative overflow-hidden tc tl-ns">
      <Stars className="bg-dark3 skew-l" style={{ top: '-10%' }} />
      <Box className="pa4 pa5-ns lh-copy mw9 center">
        <Box className="mw7 left">
          <Logo
            className="left-ns mb5 mr0-ns ml0-ns center"
            type="v"
            style={{ minWidth: '220px', width: '15rem', height: '16rem' }}
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
          <Text className="mv4 pt-mono f4 f3-m f2-l">
            June 27-30, Barcelona
          </Text>
          <p className="mv4">
            <Button to="register" size="large">
              Registration Open
            </Button>
          </p>
        </Box>
      </Box>
    </Hero>
    <section className="bg-white lh-copy dark3 tc tl-ns">
      <div className="pa4 pa5-ns pt0 mw9 center f5 f4-l">
        <div className="flex-ns items-center">
          <div className="w-50-ns">
            <Heading className="lh-title f2 f1-ns montserrat">
              What to expect
            </Heading>
            <p>
              This unique experience is designed to bring together pioneers in
              the Distributed Web space and is an opportunity to develop your
              ideas and learn from the IPFS core team and community.
            </p>
            <p>
              You’ll be welcomed to our amazing hacker retreat on the outskirts
              of Barcelona and after an opening address from mission control,
              we’ll have our first group dinner under the stars where you can
              meet your fellow campers and get ready for an action packed
              weekend of hacking, activities, workshops and more...
            </p>
          </div>
          <div className="w-50-ns">
            <Projects className="tc" />
          </div>
        </div>

        <section className="mv5">
          <Heading>Thanks to our sponsors</Heading>
          <a href="https://protocol.ai">
            <img
              className="mw6 pv3 w-20-ns"
              src={require('@components/Projects/protocol-labs-logo-horizontal-alt-black.svg')}
            />
          </a>
          <p>
            Interested in sponsoring IPFS Camp 2019? Email{' '}
            <a href="mailto:camp@ipfs.io">camp@ipfs.io</a> to enquire about
            opportunities.
          </p>
        </section>
      </div>
    </section>
  </>
))
