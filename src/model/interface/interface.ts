export interface IBlogData {
  img: string
  date: {
    day: string
    month: string
  }
  title: string
  text: string
  list: string[]
}

export interface IOurTeamData {
  name: string
  company: string
  img: string
  social: string[]
}

export interface IFakeData {
  img: string
  title: string
  text: string
}

export interface ICommentsData {
  img: string
  name: string
  company: string
  text: string
  rating: number
}
