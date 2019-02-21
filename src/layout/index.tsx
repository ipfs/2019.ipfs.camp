import React from 'react'

type PageProps = {
  meta?: {}
}

export const Page: React.FC<PageProps> = ({ children }) => (
  <div className="center mw9 charcoal pa5 lh-copy">{children}</div>
)
