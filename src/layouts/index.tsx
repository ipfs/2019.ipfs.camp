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
      <Hero className="pa4 pa5-ns relative overflow-hidden">
        <Stars className="bg-dark3" />
        <Box className="lh-copy mw9 center">
          <h1 className="f1">{title}</h1>
        </Box>
      </Hero>
    )}
    <Box className="pa5 center mw9 lh-copy" color="dark3">
      <Box className={meta.className}>{children}</Box>
    </Box>
  </>
)
