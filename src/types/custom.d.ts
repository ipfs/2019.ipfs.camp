declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/react'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
