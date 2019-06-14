import React from 'react'
import { useRouteData } from 'react-static'
import { Heading } from '@components/System'
import { Page } from '../layouts'
import { HumanGrid } from '@components/Humans'
import { Humans } from 'types/humans'

export default () => {
  const {
    speakers,
    title,
    meta,
  }: {
    speakers: Humans
    title: string
    meta: {}
  } = useRouteData()
  return (
    <Page meta={meta} title={title}>
      <Heading>Production Team</Heading>
      <div className="flex flex-wrap justify-center">
        <HumanGrid
          humans={speakers
            .filter(speaker => !!speaker.roles.includes('core'))
            .sort(() => Math.random() - 0.5)}
        />
      </div>
      <Heading>Speakers & Trainers</Heading>
      <div className="flex flex-wrap justify-center">
        <HumanGrid
          humans={speakers
            .filter(
              speaker =>
                (speaker.roles.includes('team') &&
                  !speaker.roles.includes('core')) ||
                speaker.roles.includes('contrib'),
            )
            .sort(() => Math.random() - 0.5)}
        />
      </div>
    </Page>
  )
}
