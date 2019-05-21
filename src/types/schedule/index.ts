interface SessionItem {
  id: string
  contents: string
  title: string
}

export type Speaker = SessionItem & {}
export type Location = SessionItem & {}
export type Venue = SessionItem & {}

export type Time = {
  startTime: string
  endTime: string
  session: Session
}

export type Format = SessionItem & {
  legend: string
  contentURL?: string
}

export type Session = SessionItem & {
  formatId: string
  startTime: string
  endTime?: string
  type?: string
  speakers: Speaker[]
}

export type Day = SessionItem & {
  date: string
  desc?: string
  sessions: Session[]
}

export type Schedule = Day[]
