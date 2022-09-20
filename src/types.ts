export interface GameInfo {
  id: string
  live: boolean
  gameName: string
  shortDesc: string
  longDesc: string
  genres: string[]
  image: string
  videoThumb: string
  os: OS[]
  nfts: boolean
  claimed: boolean
  publisher: string
  protocol: string
  userLikes: GameUser[]
  trailerLink: string
  updates: GameUpdate[]
  relatedPosts: GamePost[]
  slideShowImages: SlideShowImage[]
  coverPhoto: string
  gif?: string
}

export interface SlideShowImage {
  original: string
  originalHeight: number
  thumbnail: string
  thumbnailHeight: number
}

export interface GameUpdate {
  id: string
  image: string
  date: string
  title: string
  summary: string
}

export interface GamePost {
  id: string
  user: GameUser
  post: string
  date: string
  image: string
}

export interface GameFilter {
  search: string
  genre: string
  showLive: boolean
}

export interface GameUser {
  userName: string
  userImage: string
}

export type OS = "windows" | "mac" | "linux"
