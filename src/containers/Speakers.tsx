import React from 'react'
import { useRouteData } from 'react-static'
import { Page } from '../layouts'
import styled from 'styled-components'

export default () => {
  const {
    speakers,
    title,
    meta,
  }: {
    speakers: [
      {
        github: string
        title: string
        roles: string[]
      },
    ]
    title: string
    meta: {}
  } = useRouteData()
  return (
    <Page meta={meta} title={title}>
      <h2>Production Team</h2>
      <div className="flex flex-wrap justify-center">
        {speakers
          .filter(speaker => !!speaker.roles.includes('core'))
          .sort(() => Math.random() - 0.5)
          .map(speaker => (
            <Speaker key={speaker.title} {...speaker} />
          ))}
      </div>
      <h2>Speakers & Trainers</h2>
      <div className="flex flex-wrap justify-center">
        {speakers
          .filter(
            speaker =>
              (speaker.roles.includes('team') &&
                !speaker.roles.includes('core')) ||
              speaker.roles.includes('contrib'),
          )
          .sort(() => Math.random() - 0.5)
          .map(speaker => (
            <Speaker key={speaker.title} {...speaker} />
          ))}
      </div>
    </Page>
  )
}

const SpeakerImage = styled.img`
  min-width: 128px;
  min-height: 128px;
  transition: all 0.5s;
`

const Speaker = (speaker: any) => (
  <div className="mw4 ma2">
    <div className="tc lh-copy">
      <a href={`https://github.com/${speaker.github}`}>
        <SpeakerImage
          className="br3 bg-animate grow"
          src={`https://github.com/${speaker.github}.png?size=200`}
        />
      </a>
      <p className="f6">{speaker.title}</p>
      <RolePills roles={speaker.roles} />
    </div>
  </div>
)

const RolePills = ({ roles }: { roles: string[] }) => (
  <>
    {roles.map((role: string) => (
      <span key={role} className="f7 pa2 ma1 br-pill bg-neutral5">
        {role}
      </span>
    ))}
  </>
)
