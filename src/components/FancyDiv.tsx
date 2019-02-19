import React from 'react'

const FancyDiv: React.FC = ({ children }) => {
  return <div style={{ border: '10px solid red' }}>{children}</div>
}
export default FancyDiv
