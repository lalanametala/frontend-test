import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IFilm } from '../interfaces/IFilm'
// import { ICharacter } from '../interfaces/ICharacter'
// import { IFilmWithNames } from '../interfaces/IFilm'
// import { ILocation } from '../interfaces/ILocation'
// import { ISpecies } from '../interfaces/ISpecies'
// import { IVehicle } from '../interfaces/IVehicle'
// import fetchCharacters from '../services/fetchCharacters'
import fetchFilms from '../services/fetchFilms'
// import fetchLocations from '../services/fetchLocations'
// import fetchSpecies from '../services/fetchSpecies'
// import fetchVehicles from '../services/fetchVehicles'

// type arrays =
//   | ICharacter
//   | ILocation
//   | ISpecies
//   | ISpecies
//   | IVehicle

// function getNamesFromArray (
//   arr: arrays[],
//   patternUrl: string
// ): string {
//   const foundItem = arr.find((item) => item.url === patternUrl)
//   if (foundItem) return foundItem.name
//   return ''
// }

export const fetchFilmsData = createAsyncThunk(
  'films/fetchData',
  async () => {
    const response = await fetchFilms()
    // const characters = await fetchCharacters()
    // const species = await fetchSpecies()
    // const locations = await fetchLocations()
    // const vehicles = await fetchVehicles()

    // const namedFilms = response.map((film) => ({
    //   ...film,
    //   characters: film.people.map((patternUrl) => getNamesFromArray(characters, patternUrl)),
    //   speciesNames: film.species.map((patternUrl) => getNamesFromArray(species, patternUrl)),
    //   locationsNames: film.locations.map((patternUrl) => getNamesFromArray(locations, patternUrl)),
    //   vehiclesNames: film.vehicles.map((patternUrl) => getNamesFromArray(vehicles, patternUrl))
    // }))
    // return namedFilms
    return response
  }
)

const initialData: IFilm[] = []

const films = createSlice({
  name: 'films',
  initialState: {
    data: initialData
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsData.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  }
})

export default films.reducer
