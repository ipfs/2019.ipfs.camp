import React from 'react'
import { Heading } from '@components/System'

export const Sponsors = () => (
  <div className="bg-primary10">
    <section className="ph4 ph5-ns pv5 mw9 center tc">
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
  </div>
)
