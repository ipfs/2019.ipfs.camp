import React from 'react'
import { Box } from '@components/System'

type PageProps = {
  meta?: {
    className?: string
  }
}

export const Page: React.FC<PageProps> = ({ children, meta }) => (
  <Box className="pa5 center mw9 lh-copy" color="dark3">
    <Box className={meta.className}>{children}</Box>
  </Box>
)
