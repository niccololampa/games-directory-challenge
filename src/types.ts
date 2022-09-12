export interface GameInfo {
  live: boolean
  gameName: string
  description: string
  genres: string[]
  image: string
  videoThumb: string
  os: OS[]
  nfts: boolean
}

export interface GameFilter {
  search: string
  genre: string
  showLive: boolean
}

export type OS = "windows" | "mac" | "linux"
