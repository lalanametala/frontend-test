import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    films: '',
    characters: '',
    locations: ''
  },
  reducers: {
    setFilmOrder (state, { payload }) {
      state.films = payload
    },
    setCharacterOrder (state, { payload }) {
      state.characters = payload
    },
    setLocationOrder (state, { payload }) {
      state.locations = payload
    }
  }
})

export const { setFilmOrder, setCharacterOrder, setLocationOrder } = orderSlice.actions

export default orderSlice.reducer
