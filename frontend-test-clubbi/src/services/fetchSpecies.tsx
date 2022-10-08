import { ISpecies } from '../interfaces/ISpecies'

export default async (): Promise<ISpecies[]> => {
  const url = 'https://ghibliapi.herokuapp.com/species'

  const response = await fetch(url)
  const data = await response.json()
  return data
}
