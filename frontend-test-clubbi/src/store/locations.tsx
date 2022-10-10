import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILocation } from '../interfaces/ILocation'
import fetchLocations from '../services/fetchLocations'

export const fetchLocationsData = createAsyncThunk(
  'locations/fetchData',
  async () => {
    const response = await fetchLocations()
    return response
  }
)

const initialData: ILocation[] = []

const locations = createSlice({
  name: 'locations',
  initialState: {
    data: initialData
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocationsData.fulfilled, (state, { payload }) => {
      state.data = payload
    })
  }
})

export default locations.reducer
