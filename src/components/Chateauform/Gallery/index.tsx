import React from 'react'
import { Gallery } from '@components/Gallery'

type GalleryState = {
  isOpen: false
}

export class CFGallery extends React.Component<{}, GalleryState> {
  render() {
    return (
      <Gallery
        heading=""
        images={[
          { src: require('./photos/Mola_1-1600x1000.jpg') },
          { src: require('./photos/Mola_2-1600x1000.jpg') },
          { src: require('./photos/Mola_3-1600x1000.jpg') },
          { src: require('./photos/Mola_11-1600x1000.jpg') },
          { src: require('./photos/Mola_16-1600x1000.jpg') },
          { src: require('./photos/Mola_17-1600x1000.jpg') },
          { src: require('./photos/Mola_18-1600x1000.jpg') },
          { src: require('./photos/Mola_19-1600x1000.jpg') },
          { src: require('./photos/Mola_20-1600x1000.jpg') },
          { src: require('./photos/Mola_21-1600x1000.jpg') },
          { src: require('./photos/Mola_23-1600x1000.jpg') },
        ]}
      />
    )
  }
}
