import React, { PropsWithChildren } from 'react'
import { Head as Helmet, useSiteData } from 'react-static'
import { SiteData } from 'src/types'
import { HelmetProps } from 'react-helmet'

type HeadProps = HelmetProps & PropsWithChildren<SiteData>

export const Head: React.FC<HelmetProps> = ({
  children,
  ...rest
}: HeadProps) => {
  const { title } = useSiteData<SiteData>()
  return (
    <Helmet
      htmlAttributes={{ lang: 'en-US' }}
      defaultTitle={title}
      titleTemplate={`%s | ${title}`}
      {...rest}
    >
      {children}
    </Helmet>
  )
}

type DefaultMetaProps = {}

export const DefaultMeta: React.FC<DefaultMetaProps> = ({ children }) => (
  <Head titleTemplate={`%s`}>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#395FD7" />
    <link
      rel="alternate feed"
      href="https://blog.ipfs.io/index.xml"
      type="application/rss+xml"
      title="IPFS Blog"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-chrome-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

    {children}
  </Head>
)

export const Card: React.FC = () => {
  const { meta, title } = useSiteData<SiteData>()
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${meta.twitter}`} />
      <meta name="twitter:title" content={meta.title || title} />
      <meta name="twitter:description" content={meta.desc} />
      <meta
        name="twitter:image:src"
        content={`${meta.url}/IPFSCamp_social.png`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title || title} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:image" content={`${meta.url}/IPFSCamp_social.png`} />
      <meta property="og:url" content={meta.url} />
    </Head>
  )
}
