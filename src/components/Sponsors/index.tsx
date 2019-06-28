import React from 'react'
import { Heading } from '@components/System'
import styled from 'styled-components'

const SponsorBlock = styled.div`
  background: linear-gradient(#ffffff, #e8eaff);
`

export const Sponsors = () => (
  <SponsorBlock>
    <section className="ph4 ph5-ns pv5 mw9 center tc dark3">
      <Heading>Thanks to our sponsors &amp; community partners</Heading>
      <div className="flex flex-column flex-row-ns w-80 w-100-ns mw8 items-center center">
        <div className="mh4 mv3">
          <a className="db" href="https://protocol.ai">
            <img
              className="h4"
              src={require('./protocol-labs-logo-horizontal-alt-black.svg')}
            />
          </a>
        </div>
        <div className="mh4 mv3">
          <a className="db" href="https://pinata.cloud/">
            <img className="h4" src={require('./pinata-logo.svg')} />
          </a>
        </div>
        <div className="mh4 mv3">
          <a className="db" href="https://qri.io/">
            <img className="h4" src={require('./qri-logo.svg')} />
          </a>
        </div>
        <div className="mh3">
          <a className="db" href="https://www.textile.photos/">
            <img className="h4" src={require('./textile-logo.svg')} />
          </a>
        </div>
        <div className="mh4 mv3">
          <a className="db" href="https://www.mozilla.org/en-US/">
            <img className="h4" src={require('./moz-logo.svg')} />
          </a>
        </div>
      </div>
      <p>
        Interested in supporting IPFS Camp 2019? Email{' '}
        <a href="mailto:camp@ipfs.io">camp@ipfs.io</a> to enquire about
        opportunities.
      </p>
    </section>
  </SponsorBlock>
)
