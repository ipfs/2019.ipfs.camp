import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Heading, Link } from '@components/System'

const components = {
  h1: Heading,
  h2: Heading,
  a: Link,
}

export default (props: any) => (
  <MDXProvider components={components}>
    <main {...props} />
  </MDXProvider>
)
