import React from 'react'

import { Hero } from '@components/Hero'
import { RandomWord } from '@components/RandomWord'
import { Stars } from '@components/Stars'
import { Box, Heading, Text } from '@components/System'
import { Button } from '@components/Buttons'
import { Logo } from '@components/Logo'
import { Projects } from '@components/Projects'

import { useSiteData } from 'react-static'
import { SiteData } from '../types'

export default () => {
  const { tickets }: SiteData = useSiteData()
  return (
    <>
      <Hero className="relative overflow-hidden tc tl-ns">
        <Stars className="bg-dark3" />
        <Box className="pa4 pa5-ns lh-copy mw9 center">
          <Box className="mw7 left">
            <Box className="mv4 flex flex-column flex-row-ns items-center-ns">
              <Box>
                <Logo
                  className="mr0-ns ml0-ns center grow"
                  type="v"
                  color="r"
                  style={{ minWidth: '220px', width: '15rem', height: '16rem' }}
                />
              </Box>
              <Box className="mh4-ns mw6">
                <Heading
                  as="h1"
                  fontSize={[5, 6]}
                  className="lh-solid pt-mono"
                  style={{ wordWrap: 'break-word' }}
                >
                  <RandomWord
                    word="Discover an InterPlanetary Future"
                    speed={40}
                    rounds={30}
                    letters="Qmb77g5AXanuvRKNXH79hAMpLUm6iyfqJDn7aAkEukWnna"
                  />
                </Heading>
              </Box>
            </Box>
            <Text className="measure-wide f5 f4-m f3-l" color="neutral2">
              <strong>IPFS Camp</strong> is a{' '}
              <strong>3 day hacker retreat</strong> designed for the{' '}
              <strong>builders</strong> of the <strong>Distributed Web</strong>.
              Join the core developers for a hands on experience packed with
              workshops, lectures and deep-dives.
            </Text>
            <Text className="mv4 pt-mono f4 f3-ns">
              June 27-30 · Barcelona, Spain
            </Text>
            <p className="mv4">
              <Button to="register">
                {tickets.waitlist ? tickets.waitlistCta : tickets.regCta}
              </Button>
            </p>
          </Box>
        </Box>
      </Hero>
      <section className="bg-white lh-copy dark3 tc tl-ns">
        <div className="mt4 mb4 pa4 pa5-ns pt0 mw9 center f5 f4-l">
          <div className="flex-ns items-center">
            <div className="w-50-ns">
              <Heading className="lh-title f2 f1-ns montserrat">
                What to expect
              </Heading>
              <p>
                This unique experience is designed to bring together{' '}
                <strong>150 pioneers</strong> in the Distributed Web space and
                is an opportunity to develop your ideas and learn from the IPFS
                core team and community.
              </p>
              <p>
                You’ll be welcomed to our amazing campus on the outskirts of
                Barcelona and after an opening address from mission control,
                we’ll have our first group dinner under the stars where you can
                meet your fellow campers and get ready for an action packed
                weekend of hacking, activities, workshops and more...
              </p>
            </div>
            <div className="w-50-ns">
              <Projects className="tc" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
