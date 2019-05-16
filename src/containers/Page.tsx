import React from 'react'
import { useRouteData } from 'react-static'
import { Page } from '../layouts'
import { convert } from '@components/System/hrmr'
import { Formats } from '@components/Schedule'
import { Link } from '@components/Router'

export default () => {
  const {
    back,
    formats,
    contents,
    title,
    meta,
  }: {
    back?: any
    formats?: any
    contents: string
    type: string
    title: string
    meta: any
  } = useRouteData()
  return (
    <Page meta={meta} title={title}>
      {back && <Link to={back.to}>{`< Back to ${back.title}`}</Link>}
      {convert(contents)}
      {formats && <Formats formats={formats} />}
    </Page>
  )
}
