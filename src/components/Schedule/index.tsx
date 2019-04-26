import React from 'react'
// import styled from 'styled-components'
import { formatDate } from '@components/System'

import schedule from './schedule.json'

type Session = {
  time: string
  title: string
}

type Day = {
  date: string
  title: string
  sessions: Session[]
}

type DayProps = {
  day: Day
}

const Day: React.FC<DayProps> = ({ day }) => (
  <div className="dt">
    <div className="dt-row" style={{ position: 'sticky' }}>
      <h2>{formatDate(day.date)}</h2>
      <h4>{day.title}</h4>
    </div>
    {day.sessions.map(session => (
      <div className="dt-row">
        <div className="dtc">{session.time}</div>
        <div className="dtc">{session.title}</div>
      </div>
    ))}
  </div>
)

export const Schedule = () => (
  <div>
    {schedule.map(day => (
      <Day day={day} />
    ))}
  </div>
)
