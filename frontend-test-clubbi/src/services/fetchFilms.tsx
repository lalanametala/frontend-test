import { IFilm } from '../interfaces/IFilm'

export default async (): Promise<IFilm[]> => {
  const url = 'https://ghibliapi.herokuapp.com/films'

  const response = await fetch(url)
  const data = await response.json()
  return data
}
