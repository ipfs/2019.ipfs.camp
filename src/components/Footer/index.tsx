import React from 'react'
import { Link } from '@components/Router'
import { Stars } from '@components/Stars'
import styled from 'styled-components'

type FooterProps = {}

const StyledFooter = styled.footer`
  line-height: 2em;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.neutral1};
    &:hover {
      color: ${props => props.theme.colors.primary1};
    }
  }
`

export const Footer: React.FC<FooterProps> = () => (
  <StyledFooter className="pa4 tc tl-ns pa5-ns sans-serif white relative overflow-hidden monospace">
    <Stars className="bg-dark3" />
    <div className="flex-ns mw8 mb5 center nested-list-reset f6 neutral2">
      <div className="w-third-ns pb3">
        <ul>
          <h3 className="monospace white">IPFS Camp</h3>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/code-of-conduct">Code of Conduct</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="w-third-ns pb3">
        <ul>
          <h3 className="white">Related Projects</h3>
          <li>
            <a href="https://ipfs.io/">IPFS</a>
          </li>
          <li>
            <a href="https://cluster.ipfs.io/">IPFS Cluster</a>
          </li>
          <li>
            <a href="https://libp2p.io/">libp2p</a>
          </li>
          <li>
            <a href="https://ipld.io">IPLD</a>
          </li>
          <li>
            <a href="https://multiformats.io/">Multiformats</a>
          </li>
        </ul>
      </div>
      <div className="w-third-ns">
        <ul>
          <h3 className="monospace white">Stay Updated</h3>
          <li>
            <a href="http://eepurl.com/giMQzj">Mailing List</a>
          </li>
          <li>
            <a href="https://twitter.com/ipfsbot">@ipfsbot</a>
          </li>
          <li>
            <a href="https://blog.ipfs.io/">IPFS Blog</a>
          </li>
          <li>Join chat on IRC #ipfs-camp</li>
        </ul>
      </div>
    </div>
    <div>
      <p className="tc f7 neutral1">
        © Protocol Labs | Except as noted, content licensed CC-BY 3.0.
      </p>
    </div>
  </StyledFooter>
)
