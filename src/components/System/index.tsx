import theme from 'ipfs-css/theme.json'
import { HTMLAttributes } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import {
  alignItems,
  AlignItemsProps,
  alignSelf,
  AlignSelfProps,
  backgroundImage,
  BackgroundImageProps,
  backgroundPosition,
  BackgroundPositionProps,
  backgroundRepeat,
  BackgroundRepeatProps,
  backgroundSize,
  BackgroundSizeProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  borders,
  BordersProps,
  boxShadow,
  BoxShadowProps,
  buttonStyle,
  ButtonStyleProps,
  color,
  ColorProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  opacity,
  OpacityProps,
  order,
  OrderProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  width,
  WidthProps,
  BorderProps,
} from 'styled-system'
import { ColorProperty } from 'csstype'
import { format, parse } from 'date-fns'
import { Link as SLink } from '@components/Router'

// util
import merge from 'lodash/merge'

const campTheme = {
  colors: {
    primary1: '#FDC503',
    primary2: '#FF703E',
    primary3: '#FD5701',
    primary4: '#45D7F8',
    primary5: '#395FD7',
    primary6: '#9772DF',
    primary7: '#64A512',
    primary8: '#465F3D',
    primary9: '#E53E28',
    primary10: '#F7A54B',
    dark1: '#0A345E',
    dark2: '#042349',
    dark3: '#1B2033',
    neutral1: '#7184A8',
    neutral2: '#8E9DBC',
    neutral3: '#A3ADC4',
    neutral4: '#CFD4E2',
    neutral5: '#E9EBF2',
    neutral6: '#fffdfc',
  },
}

const themeColors = (theme: any = campTheme, c = '') => {
  for (var key in theme.colors) {
    if (theme.colors.hasOwnProperty(key)) {
      c += `.${key} { color: ${theme.colors[key]} }`
      c += `.bg-${key} { background-color: ${theme.colors[key]} }`
      c += `.b--${key} { border-color: ${theme.colors[key]} }`
    }
  }
  return c
}

export const GlobalStyle = createGlobalStyle`
  ${themeColors()}
`

const themed = (key: string) => (props: any) => props.theme[key]

// deep merge with ipfs-css theme defaults
const mergedTheme = merge({}, theme, campTheme)
export { mergedTheme as theme }

// manual types to avoid conflicts with HTMLAttributes in types/styled-components - IntrinsicElements
type BaseOverrides = {
  color?: ColorProperty
  as?: string
  border?: BorderProps['border']
}

interface BaseProps<T> extends HTMLAttributes<T> {}

type SystemBoxProps = AlignSelfProps &
  BackgroundImageProps &
  BackgroundPositionProps &
  BackgroundRepeatProps &
  BackgroundSizeProps &
  BoxShadowProps &
  ColorProps &
  FlexProps &
  FontSizeProps &
  HeightProps &
  MaxWidthProps &
  MinWidthProps &
  OpacityProps &
  OverflowProps &
  OrderProps &
  SpaceProps &
  WidthProps

type SystemBox = BaseProps<HTMLDivElement> & SystemBoxProps & BaseOverrides

export const Box = styled('div')<SystemBox>(
  {
    boxSizing: 'border-box',
  },
  alignSelf,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  boxShadow,
  color,
  flex,
  fontSize,
  height,
  maxWidth,
  minWidth,
  opacity,
  overflow,
  order,
  space,
  width,
  themed('Box'),
)

type SystemButtonProps = SystemBoxProps &
  BorderColorProps &
  BorderRadiusProps &
  BordersProps &
  ButtonStyleProps &
  FontWeightProps

type SystemButton = BaseProps<HTMLButtonElement> &
  SystemButtonProps &
  BaseOverrides

export const Button = styled(Box)<SystemButton>(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  borderColor,
  borderRadius,
  borders,
  buttonStyle,
  fontWeight,
  themed('Button'),
)

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'orange',
  border: 0,
  borderRadius: 4,
}

type SystemButtonLink = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  SystemButtonProps

export const ButtonLink = styled(Button)<SystemButtonLink>({})

ButtonLink.defaultProps = { as: 'a' }

type SystemFlexProps = SystemBoxProps &
  AlignItemsProps &
  FlexDirectionProps &
  FlexWrapProps &
  JustifyContentProps

type SystemFlex = BaseProps<HTMLDivElement> & SystemFlexProps & BaseOverrides

export const Flex = styled(Box)<SystemFlex>(
  {
    display: 'flex',
  },
  alignItems,
  flexDirection,
  flexWrap,
  justifyContent,
  themed('Flex'),
)

type SystemTextProps = SystemBoxProps &
  FontFamilyProps &
  FontWeightProps &
  LetterSpacingProps &
  LineHeightProps &
  TextAlignProps

type SystemText = BaseProps<HTMLDivElement> & SystemTextProps & BaseOverrides

export const Text = styled(Box)<SystemText>(
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  themed('Text'),
)

export const Heading = styled(Text)(themed('Heading'))

Heading.defaultProps = {
  as: 'h2',
  className: 'montserrat',
}

type SystemLink = BaseProps<HTMLAnchorElement> & BaseOverrides

export const Link = styled(SLink)<SystemLink>(themed('Link'))

Link.defaultProps = {
  color: 'blue',
  className: 'link',
}

export function formatDate(
  dateStr: string,
  formatStr = 'dddd MMMM Do',
): string {
  return format(parse(dateStr), formatStr)
}
