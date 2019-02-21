import React from 'react'
import { Box } from '@components/System'

type PageProps = {
  meta?: {}
}

export const Page: React.FC<PageProps> = ({ children }) => (
  <Box className="pa5 center mw9 lh-copy" color="dark3">
    {children}
  </Box>
)
