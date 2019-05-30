type SessionItem = {
  id: string
  contents: string
  title: string
}

export type SessionItemData = {
  venues?: Venue[]
  locations?: Location[]
  speakers?: Speaker[]
  format?: Format
  sessions?: Session[]
  events?: Event[]
}

export type Speaker = SessionItem & {}
export type Location = SessionItem & {
  venueId: Venue
}
export type Venue = SessionItem & {}

export type Format = SessionItem & {
  legend: string
  contentURL?: string
}

export type Session = SessionItem & {
  format: Format
  speakers?: Speaker[]
}

export type Event = SessionItem & {
  sessionId: string
  locationId: string
  startTime: string
  endTime?: string
  type?: string
}

export type Day = SessionItem & {
  date: string
  desc?: string
  events: Event[]
}

export type Schedule = Day[]

export type ScheduleData = {
  schedule: Schedule
  venues: Venue[]
  locations: Location[]
  speakers: Speaker[]
  formats: Format[]
}
