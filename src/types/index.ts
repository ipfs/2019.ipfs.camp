export interface Post {
  body: string
  id: number
  title: string
}

export type SiteData = {
  title: string
  tickets: {
    waitlist: boolean
    waitlistCta: string
    waitlistLink: string
    regCta: string
    regLink: string
    onSale: boolean
    viewSchedule: boolean
  }
  meta: {
    url: string
    title?: string
    keywords: string
    twitter: string
    desc: string
    lastBuilt: number
  }
  gtagId?: string
}
