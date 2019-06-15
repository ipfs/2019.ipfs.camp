import React from 'react'
import styled from 'styled-components'
import { Humans, Human } from 'types/humans'

const HumanImage = styled.img`
  transition: all 0.5s;
`

type HumanGridProps = {
  humans: Humans
}

export const HumanGrid: React.FC<HumanGridProps> = ({ humans }) => (
  <div className="flex flex-wrap justify-center">
    {humans.map(human => (
      <HumanTile size={256} className="ma3" key={human.title} {...human} />
    ))}
  </div>
)

type HumanTileProps = Human & {
  className?: string
  size?: number
}

export const HumanTile: React.FC<HumanTileProps> = ({
  github,
  title,
  className,
  size = 256,
}) => (
  <div className={className} style={{ maxWidth: size / 2 }}>
    <div className="tc lh-copy">
      <a href={`https://github.com/${github}`}>
        <HumanImage
          className="img br3 bg-animate grow"
          alt={title}
          style={{ width: size / 2, height: size / 2 }}
          src={`https://github.com/${github}.png?size=${size}`}
        />
      </a>
      <p className="f6">{title}</p>
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
