// types/mdx.d.ts
declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/tag'
