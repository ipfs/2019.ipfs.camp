import React from 'react'
import { useRouteData } from 'react-static'
import { Heading } from '@components/System'
import { Page } from '../layouts'
import { HumanGrid } from '@components/Humans'
import { Humans } from 'types/humans'

export default () => {
  const {
    humans,
    title,
    meta,
  }: {
    humans: Humans
    title: string
    meta: {}
  } = useRouteData()
  return (
    <Page meta={meta} title={title}>
      <Heading>Production Team</Heading>
      <div className="flex flex-wrap justify-center">
        <HumanGrid
          humans={humans.filter(human => human.roles.includes('production'))}
        />
      </div>
      <Heading>Content Team</Heading>
      <div className="flex flex-wrap justify-center">
        <HumanGrid
          humans={humans.filter(human => human.roles.includes('content'))}
        />
      </div>
      <Heading>Speakers & Trainers</Heading>
      <div className="flex flex-wrap justify-center">
        <HumanGrid
          humans={humans.filter(human => human.roles.includes('contrib'))}
        />
      </div>
    </Page>
  )
}
