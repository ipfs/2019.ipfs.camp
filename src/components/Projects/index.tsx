import React from 'react'
import ipfs from './ipfs-logo.svg'
import ipld from './ipld-logo.svg'
import libp2p from './libp2p-logo.svg'
import multiformats from './multiformats-logo.svg'

type ProjectProps = {
  className?: string
}

export const Projects: React.SFC<ProjectProps> = props => (
  <div {...props}>
    <img src={ipfs} className="w-25 pa2" />
    <img src={ipld} className="w-25 pa2" />
    <img src={libp2p} className="w-25 pa2" />
    <img src={multiformats} className="w-25 pa2" />
  </div>
)
