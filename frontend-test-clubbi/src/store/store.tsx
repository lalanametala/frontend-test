import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './characters'
import filmsReducer from './films'
import filtersReducer from './filters'
import locationsReducer from './locations'
import orderReducer from './order'
import themeReducer from './theme'

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    theme: themeReducer,
    films: filmsReducer,
    locations: locationsReducer,
    filters: filtersReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
