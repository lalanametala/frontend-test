import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './characters'
import filmsReducer from './films'
import filtersReducer from './filters'
import locationsReducer from './locations'
import sortReducer from './sort'
import themeReducer from './theme'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    theme: themeReducer,
    films: filmsReducer,
    locations: locationsReducer,
    filters: filtersReducer,
    sort: sortReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
