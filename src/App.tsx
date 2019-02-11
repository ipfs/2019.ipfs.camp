import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import './app.css'
import FancyDiv from '@components/FancyDiv'
// import { theme } from 'ipfs-system'

// import system comps
import { Header as IPFSHeader } from 'ipfs-system'

const Header = () => (
  <IPFSHeader>
    <a href="https://ipfs.io" title="home">
      <img
        src="https://ipfs.io/images/ipfs-logo.svg"
        style={{ height: '50px' }}
        className="v-top"
      />
    </a>
    <h1 className="flex-auto ma0 tr f3 fw2 montserrat aqua">CID inspector</h1>
  </IPFSHeader>
)

function App() {
  return (
    <Root>
      <div className="w-100 sans-serif">
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="content">
          <FancyDiv>
            <Routes />
          </FancyDiv>
        </div>
      </div>
    </Root>
  )
}

export default App
