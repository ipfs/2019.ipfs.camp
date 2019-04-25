import React from 'react'
import { Heading } from '@components/System'
import styled from 'styled-components'

const SponsorBlock = styled.div`
  background: linear-gradient(#ffffff, #e8eaff);
`

export const Sponsors = () => (
  <SponsorBlock>
    <section className="ph4 ph5-ns pv5 mw9 center tc dark3">
      <Heading>Thanks to our sponsors</Heading>
      <a href="https://protocol.ai">
        <img
          className="mw6 pv3 w-20-ns"
          src={require('./protocol-labs-logo-horizontal-alt-black.svg')}
        />
      </a>
      <p>
        Interested in supporting IPFS Camp 2019? Email{' '}
        <a href="mailto:camp@ipfs.io">camp@ipfs.io</a> to enquire about
        opportunities.
      </p>
    </section>
  </SponsorBlock>
)
