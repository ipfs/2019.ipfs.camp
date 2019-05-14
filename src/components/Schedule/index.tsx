import React from 'react'
import { Router, NavLink, navigate } from '@components/Router'
import { RouteComponentProps } from '@reach/router'
import { convert } from '@components/System/hrmr'

import { Heading } from '@components/System'
import { Modal } from '@components/Modal'

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

type Format = {
  type: string
  title: string
  legend: string
  contents: string
  contentURL?: string
}

const Day: React.FC<DayProps> = ({ day }) => (
  <div className="mb4">
    <div className="dt">
      <div className="dt-row" style={{ position: 'sticky' }}>
        <h2>{day.title}</h2>
        {day.desc && <h4>{day.desc}</h4>}
      </div>
    </div>
    <div className="dt" style={{ borderSpacing: '0 10px' }}>
      <div className="dt-row">
        <div className="dtc pr4 b">Time</div>
        <div className="dtc b ph3">Session</div>
      </div>

      {day.sessions.map((session, i) => (
        <div key={i} className="dt-row pt2 pb2">
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

type ScheduleProps = {
  schedule: Day[]
  formats: Format[]
}

type FormatProps = {
  formats: Format[]
  title?: string
}

export const Formats: React.FC<FormatProps> = ({
  formats,
  title = 'Session Formats',
}) => (
  <>
    {title && <Heading>{title}</Heading>}
    <div className="nested-list-reset">
      <ul>
        {formats.map(format => (
          <li>
            <NavLink
              to={`schedule/formats/${format.type}`}
              title={format.title}
              className="dib pv1 mv1"
              activeClassName="bb b--primary1"
            >
              {format.legend}
              {format.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </>
)

const shouldOpenModal = (locationPath: string) => {
  return /formats|session/.test(locationPath)
}

type ScheduleModal = ScheduleProps & RouteComponentProps

const ScheduleModal: React.FC<ScheduleModal> = props => {
  const current = props.location.pathname.split('/').pop()
  const format = props.formats.find(format => format.type === current)
  return (
    <Modal
      overlayClassName="test"
      isOpen={shouldOpenModal(props.location.pathname)}
      onRequestClose={() => navigate('/schedule')}
    >
      {format && convert(format.contents)}
    </Modal>
  )
}

export const Schedule: React.FC<ScheduleProps> = ({ schedule, formats }) => (
  <div>
    <Formats formats={formats} />
    {schedule.map(day => (
      <Day key={day.date} day={day} />
    ))}
    <Router primary={false}>
      <ScheduleModal path="schedule/*" schedule={schedule} formats={formats} />
    </Router>
  </div>
)
