import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import "./ImageCarousel.css"
import { SlideShowImage } from "../../types"

const ImageCarousel = ({ images }: { images: SlideShowImage[] }) => {
  return (
    <ImageGallery
      items={images}
      autoPlay={true}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  )
}
export default ImageCarousel
