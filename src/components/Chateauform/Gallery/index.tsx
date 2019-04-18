import React from 'react'
import { Gallery } from '@components/Gallery'

type GalleryState = {
  isOpen: false
}

export class CFGallery extends React.Component<{}, GalleryState> {
  render() {
    return (
      <Gallery
        heading="Hello"
        images={[
          { src: require('./photos/Mola_1-1600x1000.jpg') },
          { src: require('./photos/Mola_2-1600x1000.jpg') },
        ]}
      />
    )
  }
}
