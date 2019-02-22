import React from 'react'
import './stars.css'

type StarsProps = {
  className?: string
  style?: React.CSSProperties
}

export const Stars: React.FC<StarsProps> = ({ className, style }) => (
  <React.Fragment>
    <aside
      className={`absolute top-0 bottom-0 left-0 right-0 z-00 overflow-hidden h-100 ${className}`}
      style={style}
    >
      <div className="stars" />
      <div className="stars-cl" />
    </aside>
  </React.Fragment>
)
