import React from 'react'
import Lightbox from 'react-images'

import './gallery.css'

type GalleryState = {
  lightboxIsOpen: boolean
  currentImage: number
}

type Images = {
  srcset?: []
  src: string
  caption?: string
  thumbnail?: string
}

type GalleryProps = {
  images: Images[]
  heading?: string
  subheading?: string
  showThumbnails?: boolean
}

export class Gallery extends React.Component<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props)

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index: number, event: any) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage(index: number) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className="mr2 dib w5"
          key={i}
          style={{ flex: '0 0 auto' }}
          onClick={e => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail || obj.src} />
        </a>
      )
    })

    return (
      <div className="scroll-wrapper flex nowrap overflow-x-scroll">
        {gallery}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails || true}
        />
      </div>
    )
  }
}
