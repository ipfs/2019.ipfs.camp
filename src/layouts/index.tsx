import React from 'react'
import { Box } from '@components/System'
import { Hero } from 'ipfs-system'
import { Stars } from '@components/Stars'

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
      <Hero className="relative overflow-hidden">
        <Stars className="bg-dark3" />
        <Box className="lh-copy pa4 pa5-ns mw9 center">
          <h1 className="f1">{title}</h1>
        </Box>
      </Hero>
    )}
    <Box className="ph4 pv3 ph5-ns pv3-ns center mw9 lh-copy" color="dark3">
      <Box className={meta && meta.className}>{children}</Box>
    </Box>
  </>
)
