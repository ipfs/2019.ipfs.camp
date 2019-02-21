import React from 'react'
const logo = require('./white.svg')

type LogoProps = {
  style?: React.CSSProperties
}

export const Logo: React.FC<LogoProps> = props => (
  <img className="w-30 grow" src={logo} {...props} />
)
