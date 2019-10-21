import React from 'react'
import styled from 'styled-components'
import { Button } from '@components/Buttons'
import { useSiteData } from 'react-static'
import { SiteData } from '../../types'

type TicketData = SiteData['tickets']

const StyledOptions = styled.ul`
  list-style: square inside url(${require('./checkmark.svg')});
`

const TicketCard = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  transform: translateY(0);
  overflow: hidden;
  position: relative;
  &:hover {
    transition-timing-function: ease-out;
    transition-duration: 0.2s;
    transform: translateY(-5px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }
`

TicketCard.defaultProps = {
  className: 'br3 shadow-4 pa4 ma3 tc',
}

const Benefits = () => (
  <StyledOptions className="tl pa0">
    <li>All talks, workshops and sessions</li>
    <li>All meals, snacks and drinks</li>
    <li>Airport or train station transfers</li>
    <li>Evening activities</li>
  </StyledOptions>
)

const Price: React.FC = ({ children }) => (
  <p>
    <span className="primary3 f3 tc db mv2 nowrap">{children}</span>
  </p>
)

const ApplicationBtn = ({
  href,
  ctaText,
}: {
  href: string
  ctaText: string
}) => (
  <Button block href={href}>
    <div className="tc">{ctaText}</div>
  </Button>
)

const Shared = ({ waitlistCta, waitlist, regCta, onSale }: TicketData) => (
  <TicketCard>
    <h2>Shared Twin Room</h2>
    <Price>795 €</Price>
    <Benefits />
    {onSale ? (
      <ApplicationBtn
        href="https://docs.google.com/forms/d/e/1FAIpQLSesrGYpB6JbvFyRtd_vmol-nMxiAljfylab-hRizzrzbEAZww/viewform?usp=pp_url&entry.552566347=Shared+Twin+Room+795+%E2%82%AC"
        ctaText={waitlist ? waitlistCta : regCta}
      />
    ) : (
      <h2>Sold Out</h2>
    )}
  </TicketCard>
)
const Private = ({ waitlistCta, waitlist, regCta, onSale }: TicketData) => (
  <TicketCard>
    <h2>Private Double Room</h2>
    <Price>995 €</Price>
    <Benefits />
    {onSale ? (
      <ApplicationBtn
        href="https://docs.google.com/forms/d/e/1FAIpQLSesrGYpB6JbvFyRtd_vmol-nMxiAljfylab-hRizzrzbEAZww/viewform?usp=pp_url&entry.552566347=Private+Double+Room+995+%E2%82%AC"
        ctaText={waitlist ? waitlistCta : regCta}
      />
    ) : (
      <h2>Sold Out</h2>
    )}
  </TicketCard>
)

export const Tickets = ({ waitListText }: { waitListText: string }) => {
  const { tickets } = useSiteData<SiteData>()
  return (
    <>
      {tickets.onSale && tickets.waitlist && (
        <p>
          <strong>{waitListText}</strong>
        </p>
      )}
      <div className="flex flex-column flex-row-ns space-between">
        <Private {...tickets} />
        <Shared {...tickets} />
      </div>
    </>
  )
}
