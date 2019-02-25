import React from 'react'
import { Link } from '@components/Links'
import { Stars } from '@components/Stars'
type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => (
  <footer className="pa4 pa5-ns sans-serif white nested-links relative overflow-hidden">
    <Stars className="bg-dark3" />
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
            <Link className="" to="/register">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/code-of-conduct">Code of Conduct</Link>
          </li>
        </ul>
      </div>
      <div className="w-third-ns">
        <ul>
          <h3 className="monospace">Stay Updated</h3>
          <li>Subscribe to mlist</li>
          <li>
            <a href="https://twitter.com/ipfsbot">@ipfsbot</a>
          </li>
          <li>
            <a href="https://blog.ipfs.io/index.xml">Subscribe to blog</a>
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
  </footer>
)
