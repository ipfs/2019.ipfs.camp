export interface Post {
  body: string
  id: number
  title: string
}

export type SiteData = {
  title: string
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
