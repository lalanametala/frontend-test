import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IFilm } from '../interfaces/IFilm'
import fetchFilms from '../services/fetchFilms'

export const fetchFilmsData = createAsyncThunk(
  'films/fetchData',
  async () => {
    const response = await fetchFilms()
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
