export interface Tab {
  title: string
  emoji: string
  id: string
}
export interface Banner {
  title: string
  plot: string
  year: string
  id: string
  genre: string
  duration: string
  poster: string
}

export interface FlashNews {
  id: number
  rotate: number
  image: string
  text: string
  date: string
}
export interface MovieFeed {
  title: string
  poster: string
  year: string
  id: string
  rate: string
  link?: string
}
