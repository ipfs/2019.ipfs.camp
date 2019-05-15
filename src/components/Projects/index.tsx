import React from 'react'
import styled from 'styled-components'
import grid from './logos_grid.svg'
import ipfs from './ipfs-logo.svg'
import ipld from './ipld-logo.svg'
import libp2p from './libp2p-logo.svg'
import multiformats from './multiformats-logo.svg'
import protoschool from './protoschool-logo.svg'
import ipfsCluster from './ipfs-cluster-logo.svg'

const ProjectGrid = styled.div`
  background: url(${grid}) no-repeat top left;
  background-size: 800px;
  position: absolute;
  top: 900px;
  left: 50%;
  width: 50%;
  height: 800px;
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
  .x5 {
    left: 467px;
  }
  .x6 {
    left: 538px;
  }
`

type ProjectProps = {
  className?: string
}

export const Projects: React.FC<ProjectProps> = props => (
  <ProjectGrid {...props} className="dn db-ns">
    <a href="https://ipfs.io/">
      <img alt="IPFS" src={ipfs} className="ipfs-logo y1 x1 h4 grow" />
    </a>
    <a href="https://libp2p.io/">
      <img alt="libp2p" src={libp2p} className="libp2p-logo y2 x2 h4 grow" />
    </a>
    <a href="https://ipld.io">
      <img alt="ipld" src={ipld} className="ipld-logo y1 x3 h4 grow" />
    </a>
    <a href="https://cluster.ipfs.io/">
      <img
        alt="IPFS Cluster"
        src={ipfsCluster}
        className="ipfsCluster-logo y2 x4 h4 grow"
      />
    </a>
    <a href="https://proto.school/">
      <img
        alt="ProtoSchool"
        src={protoschool}
        className="protoschool-logo y1 x5 h4 grow"
      />
    </a>
    <a href="https://multiformats.io/">
      <img
        alt="multiformats"
        src={multiformats}
        className="multiformats-logo y2 x6 h4 grow"
      />
    </a>
  </ProjectGrid>
)
