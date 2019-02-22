import React from 'react'
import styled from 'styled-components'

const logoV = require('./ipfs_camp_v_nl.svg')
const logoH = require('./ipfs_camp_h_nl.svg')

type StyledProps = LogoProps & {
  background: typeof logoH
}

const StyledLogo = styled.div<StyledProps>`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
`

type LogoProps = {
  style?: React.CSSProperties
  type: 'h' | 'v'
  className?: string
}

export const Logo: React.FC<LogoProps> = props => {
  return props.type === 'v' ? (
    <StyledLogo className="w-30 grow" background={logoV} {...props} />
  ) : (
    <StyledLogo className="w-30 grow" background={logoH} {...props} />
  )
}
