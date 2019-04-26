import React from 'react'
// import styled from 'styled-components'
import { formatDate } from '@components/System'

import schedule from './schedule.json'

type Session = {
  startTime: string
  endTime?: string
  title: string
  type?: string
}

type Day = {
  date: string
  title: string
  desc?: string
  sessions: Session[]
}

type DayProps = {
  day: Day
}

const Day: React.FC<DayProps> = ({ day }) => (
  <div className="mb4">
    <div className="dt">
      <div className="dt-row" style={{ position: 'sticky' }}>
        <h2>{formatDate(day.date)}</h2>
        {day.desc && <h4>{day.desc}</h4>}
      </div>
    </div>
    <div className="dt" style={{ borderSpacing: '0 10px' }}>
      <div className="dt-row">
        <div className="dtc pr4 b">Time</div>
        <div className="dtc b ph3">Session</div>
      </div>

      {day.sessions.map(session => (
        <div className="dt-row pt2 pb2">
          <div className="dtc nowrap bb primary9 pv3 b--neutral5">
            {session.startTime} {session.endTime && ` - ${session.endTime}`}
          </div>
          <div
            className={`dtc ph3 pv3 bb b--neutral4 f4-ns w-100 ${
              session.type && session.type === 'break' ? 'neutral3' : 'dark3'
            }`}
          >
            {session.title}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const Schedule = () => (
  <div>
    {schedule.map(day => (
      <Day day={day} />
    ))}
  </div>
)
