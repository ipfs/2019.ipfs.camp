import React from 'react'
import styled from 'styled-components'
import grid from './logos_grid.svg'
import ipfs from './ipfs-logo.svg'
import ipld from './ipld-logo.svg'
import libp2p from './libp2p-logo.svg'
import multiformats from './multiformats-logo.svg'

const ProjectGrid = styled.div`
  background: url(${grid}) no-repeat top left;
  background-size: 800px;
  position: absolute;
  top: 80%;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  img {
    width: 150px;
    height: 150px;
    position: absolute;
  }
  .y1 {
    top: 276px;
  }
  .y2 {
    top: 400px;
  }
  .x1 {
    left: 184px;
  }
  .x2 {
    left: 254px;
  }
  .x3 {
    left: 325px;
  }
  .x4 {
    left: 396px;
  }
  .ipfs-logo {
  }
  .libp2p-logo {
  }
  .ipld-logo {
  }
  .multiformats-logo {
  }
`

type ProjectProps = {
  className?: string
}

export const Projects: React.SFC<ProjectProps> = props => (
  <ProjectGrid {...props} className="dn db-ns">
    <img src={ipfs} className="ipfs-logo y1 x1 h4 grow" />
    <img src={libp2p} className="libp2p-logo y2 x2 h4 grow" />
    <img src={ipld} className="ipld-logo y1 x3 h4 grow" />
    <img src={multiformats} className="multiformats-logo y2 x4 h4 grow" />
  </ProjectGrid>
)
