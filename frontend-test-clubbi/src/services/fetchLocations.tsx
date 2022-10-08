import { ILocation } from '../interfaces/ILocation'

export default async (): Promise<ILocation[]> => {
  const url = 'https://ghibliapi.herokuapp.com/locations'

  const response = await fetch(url)
  const data = await response.json()
  return data
}
