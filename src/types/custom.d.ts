declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/tag'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
