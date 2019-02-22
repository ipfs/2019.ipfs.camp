declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent
}

declare module '@mdx-js/tag'

declare module 'react-random-word'

declare module 'react-static' {
  export { Helmet as Head } from 'react-helmet'
}
