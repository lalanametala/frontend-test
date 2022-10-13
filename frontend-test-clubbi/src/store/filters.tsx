import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  films: '',
  characters: '',
  locations: ''
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    setFilmFilter (state, { payload }) {
      state.films = payload
    },
    setCharacterFilter (state, { payload }) {
      state.characters = payload
    },
    setLocationFilter (state, { payload }) {
      state.locations = payload
    },
    resetAllFilters (state) {
      state.films = INITIAL_STATE.films
      state.characters = INITIAL_STATE.characters
      state.locations = INITIAL_STATE.locations
    }
  }
})

export const {
  setFilmFilter, setCharacterFilter, setLocationFilter, resetAllFilters
} = filtersSlice.actions

export default filtersSlice.reducer
