import React from 'react'
import { useRouteData } from 'react-static'
import { Page } from '../layouts'
// import { convert } from '@components/System/hrmr'
// import { Formats } from '@components/Schedule'
// import { Link } from '@components/Router'

export default () => {
  const {
    speakers,
    title,
    meta,
  }: {
    speakers: [any]
    title: string
    meta: {}
  } = useRouteData()
  return (
    <Page meta={meta} title={title}>
      <h2>Organising Team</h2>
      <div className="flex flex-wrap">
        {speakers
          .filter(speaker => !!speaker.roles.includes('core'))
          .map(speaker => (
            <Speaker {...speaker} />
          ))}
      </div>
      <h2>Speakers & Trainers</h2>
      <div className="flex flex-wrap">
        {speakers
          .filter(
            speaker =>
              (speaker.roles.includes('team') &&
                !speaker.roles.includes('core')) ||
              speaker.roles.includes('contrib'),
          )
          .map(speaker => (
            <Speaker {...speaker} />
          ))}
      </div>
    </Page>
  )
}

const Speaker = (speaker: any) => (
  <div className="mw4 ma2">
    <div className="tc">
      <img
        className="br3"
        style={{ minWidth: '128px', minHeight: '128px' }}
        src={`https://github.com/${speaker.github}.png?size=200`}
      />
      <p className="b pt-mono">{speaker.title}</p>
      {/* {speaker.roles.map((role: string) => (
        <span className="f7 pa2 ma1 br-pill bg-neutral5">{role}</span>
      ))} */}
    </div>
  </div>
)
