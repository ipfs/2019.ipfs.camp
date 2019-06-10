import React from 'react'
import { Schedule } from '.'
import { useRouteData } from 'react-static'

export const ScheduleLoader = () => {
  const routeData = useRouteData()
  return <Schedule {...routeData} />
}
