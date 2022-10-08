import { ICharacter } from '../interfaces/ICharacter'

export default async (): Promise<ICharacter[]> => {
  const url = 'https://ghibliapi.herokuapp.com/people'

  const response = await fetch(url)
  const data = await response.json()
  return data
}
