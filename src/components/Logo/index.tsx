import React from 'react'
import styled from 'styled-components'

import logoV from './ipfs_camp_v_nl.svg'
import logoH from './ipfs_camp_h_nli.svg'
import logoHi from './ipfs_camp_h_nli_.svg'

type StyledProps = LogoProps & {
  background: typeof logoH
}

const StyledLogo = styled.div<StyledProps>`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
`

type LogoProps = {
  style?: React.CSSProperties
  type: 'h' | 'v'
  color: 'i' | 'r'
  className?: string
}

export const Logo: React.FC<LogoProps> = props => {
  return props.type === 'v' ? (
    <StyledLogo className="grow" background={logoV} {...props} />
  ) : (
    <StyledLogo
      className="grow"
      background={props.color === 'r' ? logoH : logoHi}
      {...props}
    />
  )
}
