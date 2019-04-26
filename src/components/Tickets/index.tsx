import React from 'react'
import styled from 'styled-components'
import { Button } from '@components/Buttons'

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
    <li>Breakfast, lunch and dinner</li>
    <li>Airport or train station transfers</li>
    <li>Awesome group activities</li>
  </StyledOptions>
)

const Price: React.FC = ({ children }) => (
  <p>
    <span className="primary3 f3 tc db mv2 nowrap">{children}</span>
  </p>
)

const ApplicationBtn = () => (
  <Button block href="https://goo.gl/forms/GmzwgMzfR0RUpfs13">
    <div className="tc">Apply</div>
  </Button>
)

const Shared = () => (
  <TicketCard>
    <h2>Shared Twin Room</h2>
    <Price>795 €</Price>
    <Benefits />
    <ApplicationBtn />
  </TicketCard>
)
const Private = () => (
  <TicketCard>
    <h2>Private Double Room</h2>
    <Price>995 €</Price>
    <Benefits />
    <ApplicationBtn />
  </TicketCard>
)

export const Tickets = () => (
  <div className="flex flex-column flex-row-ns space-between">
    <Private />
    <Shared />
  </div>
)
