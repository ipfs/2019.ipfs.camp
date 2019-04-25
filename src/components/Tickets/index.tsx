import React from 'react'
import styled from 'styled-components'
import { Button } from '@components/Buttons'

const StyledOptions = styled.ul`
  list-style: square inside url('./checkmark.svg');
`

const Benefits = () => (
  <StyledOptions className="tl pa0">
    <li>All talks, workshops and sessions</li>
    <li>Breakfast, lunch and dinner</li>
    <li>Airport or train station transfers</li>
    <li>Awesome group activities</li>
  </StyledOptions>
)

const Card: React.FC = ({ children }) => (
  <div className="br2 shadow-4 pa4 ma3 tc">{children}</div>
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
  <Card>
    <h2>Shared Twin Room</h2>
    <Price>795 €</Price>
    <Benefits />
    <ApplicationBtn />
  </Card>
)
const Private = () => (
  <Card>
    <h2>Private Double Room</h2>
    <Price>995 €</Price>
    <Benefits />
    <ApplicationBtn />
  </Card>
)

export const Tickets = () => (
  <div className="flex flex-column flex-row-ns space-between">
    <Private />
    <Shared />
  </div>
)
