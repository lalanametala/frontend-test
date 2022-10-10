import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICharacter } from '../interfaces/ICharacter'
import fetchCharacters from '../services/fetchCharacters'

export const fetchCharactersData = createAsyncThunk(
  'characters/fetchData',
  async () => {
    const response = await fetchCharacters()
    return response
  }
)

const initialData: ICharacter[] = []

const characters = createSlice({
  name: 'characters',
  initialState: {
    data: initialData
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharactersData.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  }
})

export default characters.reducer
