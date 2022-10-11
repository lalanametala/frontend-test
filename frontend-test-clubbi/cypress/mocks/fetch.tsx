import { allCharacters } from "./characters";
import { allFilms } from "./films";
import { allLocations } from "./locations";

export const fetch = (url: string) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'https://ghibliapi.herokuapp.com/films')
      return Promise.resolve(allFilms);

    if (url === 'https://ghibliapi.herokuapp.com/people')
      return Promise.resolve(allCharacters);

    if (url === 'https://ghibliapi.herokuapp.com/locations')
      return Promise.resolve(allLocations);

    return Promise.reject(new Error('Invalid url'));
  },
});
