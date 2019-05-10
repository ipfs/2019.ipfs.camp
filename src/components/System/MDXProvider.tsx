import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { components } from './mdTransforms'

export default (props: any) => (
  <MDXProvider components={components}>
    <main {...props} />
  </MDXProvider>
)
