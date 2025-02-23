export type Event = {
  date: number
  event: string
}

export type HistoricalDate = {
  title: string
  events: Event[]
}