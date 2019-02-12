import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import 'ipfs-system/all.css'
import FancyDiv from '@components/FancyDiv'
import { theme } from 'ipfs-system'

console.log(theme)

// import system comps
import { Header } from 'ipfs-system'

function App() {
  return (
    <Root>
      <div className="w-100 sans-serif">
        <Header title="hello" />
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
