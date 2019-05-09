import React from 'react'
import { Box } from '@components/System'
import { Hero } from '@components/Hero'
import { Stars } from '@components/Stars'
import { Head } from '@components/Meta'

type PageProps = {
  meta?: {
    className?: string
    title?: string
  }
  title?: string
}

export const Page: React.FC<PageProps> = ({ children, meta, title }) => (
  <>
    {title && (
      <Head>
        <title>{title}</title>
      </Head>
    )}
    {title && (
      <Hero className="relative overflow-hidden">
        <Stars className="bg-dark3" />
        <Box className="lh-copy pa4 pa5-ns mw9 center">
          <h1 className="f3 f1-ns">{title}</h1>
        </Box>
      </Hero>
    )}
    <Box className="ph4 pv3 ph5-ns pv3-ns center mw9 lh-copy" color="dark3">
      <Box className={meta && meta.className}>{children}</Box>
    </Box>
  </>
)

type IncludeProps = {
  meta?: {
    className?: string
    id?: string
  }
}

export const Include: React.FC<IncludeProps> = ({ children, meta }) => (
  <>
    <Box id={meta && meta.id} className={meta && meta.className}>
      {children}
    </Box>
  </>
)

export const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  id,
}) => (
  <section id={id} className={`mb5 hash-link-offset ${className}`}>
    {children}
  </section>
)
