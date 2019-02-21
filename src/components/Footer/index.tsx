import React from 'react'
type FooterProps = {}

export const Footer: React.FC<FooterProps> = ({ children, ...rest }) => (
  <footer {...rest}>{children}</footer>
)
