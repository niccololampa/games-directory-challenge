export interface GameInfo {
  live: boolean
  gameName: string
  description: string
  genre: string[]
  image: string
}

export interface GameFilter {
  search: string
  genre: string
  showLive: boolean
}
