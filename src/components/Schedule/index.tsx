import React from 'react'
import { Router, Link, navigate } from '@components/Router'
import { RouteComponentProps } from '@reach/router'
import { convert } from '@components/System/hrmr'

import { Heading } from '@components/System'
import { Modal } from '@components/Modal'
import { Head } from '@components/Meta'

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
  meta: {
    title: string
  }
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
          <li key={format.type}>
            <Link
              to={`schedule/formats/${format.type}`}
              title={format.title}
              className="dib pv1"
            >
              {format.legend} {format.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
)

type ScheduleModal = ScheduleProps & RouteComponentProps

const ScheduleModal: React.FC<ScheduleModal> = props => {
  const current = props.location.pathname
    .split('/')
    .filter(el => el)
    .pop()
  const format = props.formats.find(format => format.type === current)
  const shouldOpenModal = (locationPath: string) => {
    return /formats|session/.test(locationPath)
  }
  const title = props.meta ? props.meta.title : ''
  return (
    <>
      <Head>{title && <title>{title}</title>}</Head>
      <Modal
        overlayClassName={{
          base:
            'overlay-base pa4 bl-ns b--light-silver flex items-center justify-center',
          afterOpen: 'overlay-base_after-open',
          beforeClose: 'overlay-base_before-close',
        }}
        className={{
          base: 'modal-base pa3 pa4-ns bg-white br3 ba b--neutral1 outline-0',
          afterOpen: 'modal-base_after-open',
          beforeClose: 'modal-base_before-close',
        }}
        isOpen={shouldOpenModal(props.location.pathname)}
        onRequestClose={() => navigate('/schedule')}
      >
        <div className="lh-copy mw7">{format && convert(format.contents)}</div>
      </Modal>
    </>
  )
}

export const Schedule: React.FC<ScheduleProps> = ({
  schedule,
  formats,
  meta,
}) => (
  <div>
    <Formats formats={formats} />
    {schedule.map(day => (
      <Day key={day.date} day={day} />
    ))}
    <Router primary={false}>
      <ScheduleModal
        path="schedule/*"
        schedule={schedule}
        formats={formats}
        meta={meta}
      />
    </Router>
  </div>
)
