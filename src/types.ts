export interface GameInfo {
  live: boolean
  gameName: string
  description: string
  genres: string[]
  image: string
}

export interface GameFilter {
  search: string
  genre: string
  showLive: boolean
}
