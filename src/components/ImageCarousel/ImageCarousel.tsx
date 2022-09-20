import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import "./ImageCarousel.css"

const images = [
  {
    original: "images/slide-show-image-1.jpg",
    thumbnail: "images/slide-show-image-1.jpg",
    originalHeight: 250,
    thumbnailHeight: 50,
  },

  {
    original: "images/slide-show-image-2.jpg",
    thumbnail: "images/slide-show-image-2.jpg",
    originalHeight: 250,
    thumbnailHeight: 50,
  },

  {
    original: "images/slide-show-image-3.jpg",
    thumbnail: "images/slide-show-image-3.jpg",
    originalHeight: 250,
    thumbnailHeight: 50,
  },
]

const ImageCarousel = () => <ImageGallery items={images} autoPlay={true} showPlayButton={false} />

export default ImageCarousel
