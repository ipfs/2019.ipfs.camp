import htmrConvert from 'htmr'
import { components } from './mdTransforms'

export const convert = (md: string) =>
  htmrConvert(md, { transform: components })
