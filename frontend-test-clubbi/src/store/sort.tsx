import { createSlice } from '@reduxjs/toolkit'

export type filmParams = {
  sort: 'asc' | 'desc' | ''
  parameter: 'title' | 'release_date' | 'running_time' | 'rt_score' | ''
}

export type characterParams = {
  sort: 'asc' | 'desc' | ''
  parameter: 'name' | 'age' | ''
}

export type locationParams = {
  sort: 'asc' | 'desc' | ''
  parameter: 'name' | 'surface_water' | ''
}

const INITIAL_FILM_SORT: filmParams = { sort: '', parameter: '' }
const INITIAL_CHAR_SORT: characterParams = { sort: '', parameter: '' }
const INITIAL_LOC_SORT: locationParams = { sort: '', parameter: '' }

const orderSlice = createSlice({
  name: 'sort',
  initialState: {
    films: INITIAL_FILM_SORT,
    characters: INITIAL_CHAR_SORT,
    locations: INITIAL_LOC_SORT
  },
  reducers: {
    setFilmSort (state, { payload }) {
      state.films = { ...payload }
    },
    setCharacterSort (state, { payload }) {
      state.characters = { ...payload }
    },
    setLocationSort (state, { payload }) {
      state.locations = { ...payload }
    },
    resetAllSorters (state) {
      state.films = INITIAL_FILM_SORT
      state.characters = INITIAL_CHAR_SORT
      state.locations = INITIAL_LOC_SORT
    }
  }
})

export const {
  setFilmSort, setCharacterSort, setLocationSort, resetAllSorters
} = orderSlice.actions

export default orderSlice.reducer
