import React from 'react'
import { Gallery } from '@components/Gallery'

export const CFGallery = () => (
  <Gallery
    showThumbnails={true}
    heading=""
    images={[
      {
        src: require('./photos/Mola_1-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_1.jpg'),
      },
      {
        src: require('./photos/Mola_2-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_2.jpg'),
      },
      {
        src: require('./photos/Mola_3-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_3.jpg'),
      },
      {
        src: require('./photos/Mola_10-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_10.jpg'),
      },
      {
        src: require('./photos/Mola_11-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_11.jpg'),
      },
      {
        src: require('./photos/Mola_12-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_12.jpg'),
      },
      {
        src: require('./photos/Mola_13-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_13.jpg'),
      },
      {
        src: require('./photos/Mola_15-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_15.jpg'),
      },
      {
        src: require('./photos/Mola_16-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_16.jpg'),
      },
      {
        src: require('./photos/Mola_17-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_17.jpg'),
      },
      {
        src: require('./photos/Mola_18-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_18.jpg'),
      },
      {
        src: require('./photos/Mola_19-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_19.jpg'),
      },
      {
        src: require('./photos/Mola_20-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_20.jpg'),
      },
      {
        src: require('./photos/Mola_21-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_21.jpg'),
      },
      {
        src: require('./photos/Mola_23-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_23.jpg'),
      },
    ]}
  />
)

export const TicketGallery = () => (
  <Gallery
    heading=""
    images={[
      {
        src: require('./photos/Mola_17-1600x1000.jpg'),
        thumbnail: require('./photos/thumbs/Mola_17.jpg'),
        caption:
          'The shared twin room is the same size as the double but split into two single beds',
      },
    ]}
  />
)
