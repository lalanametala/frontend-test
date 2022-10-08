import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    data: 'light'
  },
  reducers: {
    setTheme (state, { payload }) {
      state.data = payload
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
