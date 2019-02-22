import React from 'react'
import { Link } from '@reach/router'
type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => (
  <footer className="pa4 pa5-ns bt bt-1 bw1 b--gray sans-serif bg-dark3 white overflow-auto nested-links">
    <div className="flex-ns mw7 mb5 center nested-list-reset lh-copy f6 neutral2">
      <div className="w-third-ns">
        <ul>
          <h3 className="monospace">Project Pages</h3>
          <li>
            <a href="https://ipfs.io/">ipfs.io</a>
          </li>
          <li>
            <a href="https://libp2p.io/">libp2p.io</a>
          </li>
          <li>
            <a href="https://ipld.io">ipld.io</a>
          </li>
          <li>
            <a href="https://multiformats.io/">multiformats.io</a>
          </li>
        </ul>
      </div>
      <div className="w-third-ns">
        <ul>
          <h3 className="monospace">IPFS Camp</h3>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="w-third-ns">
        <ul>
          <h3 className="monospace">Stay Updated</h3>
          <li>subscribe to mlist</li>
          <li>Follow on Twitter</li>
          <li>Subscribe to blog</li>
          <li>Join chat on IRC #ipfs-camp</li>
        </ul>
      </div>
    </div>
    <div>
      <p className="tc f7 neutral1">
        © Protocol Labs | Except as noted, content licensed CC-BY 3.0.
      </p>
    </div>
  </footer>
)
