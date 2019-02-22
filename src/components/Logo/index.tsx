import React from 'react'
const logo = require('./ipfs_camp_v_nl.svg')

type LogoProps = {
  style?: React.CSSProperties
}

export const Logo: React.FC<LogoProps> = props => (
  <img className="w-30 grow" src={logo} {...props} />
)
