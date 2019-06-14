import React from 'react'
import styled from 'styled-components'
import { Humans, Human } from 'types/humans'

const HumanImage = styled.img`
  min-width: 128px;
  min-height: 128px;
  transition: all 0.5s;
`

type HumanGridProps = {
  humans: Humans
}

export const HumanGrid: React.FC<HumanGridProps> = ({ humans }) => (
  <div className="flex flex-wrap justify-center">
    {humans.map(human => (
      <HumanTile key={human.title} {...human} />
    ))}
  </div>
)

export const HumanTile = (human: Human) => (
  <div className="mw4 ma2">
    <div className="tc lh-copy">
      <a href={`https://github.com/${human.github}`}>
        <HumanImage
          className="br3 bg-animate grow"
          src={`https://github.com/${human.github}.png?size=200`}
        />
      </a>
      <p className="f6">{human.title}</p>
    </div>
  </div>
)

type RolePillsProps = {
  roles: string[]
}

export const RolePills: React.FC<RolePillsProps> = ({ roles }) => (
  <>
    {roles.map((role: string) => (
      <span key={role} className="f7 pa2 ma1 br-pill bg-neutral5">
        {role}
      </span>
    ))}
  </>
)
