import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from '../../components/FilmCard'
import FilterOrderForm from '../../components/FilterSortForm'
import { filmSortOptions } from '../../components/FilterSortForm/utils'
import { IFilm } from '../../interfaces/IFilm'
import { fetchFilmsData } from '../../store/films'
import { AppDispatch, RootState } from '../../store/store'
import { sortFilms } from '../../utils'

export default function Films (): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch
  const initialFilms: IFilm[] = []
  const [films, setFilms] = useState(initialFilms)
  const dispatch = useAppDispatch()
  const storedFilms = useSelector((state: RootState) => state.films.data)
  const filmFilter = useSelector((state: RootState) => state.filters.films)
  const filmOrder = useSelector((state: RootState) => state.sort.films)

  useEffect(() => {
    if (!storedFilms.length) dispatch(fetchFilmsData())
  }, [])

  useEffect(() => {
    setFilms(storedFilms)
  }, [storedFilms])

  useEffect(() => {
    const orderedFilms = sortFilms([...storedFilms], filmOrder)

    setFilms(orderedFilms)
  }, [filmOrder])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FilterOrderForm page="films" filterBy="Search by films" sortOptions={filmSortOptions} />
      <Grid
        container
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignSelf: 'center',
          width: '90vw',
          marginBottom: { xs: '30px', sm: '50px', md: '50px' },
          justifyContent: 'center',
          alignItems: 'top',
          gap: '20px'
        }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        {films
          .filter(({ title }) => title.toLowerCase().includes(filmFilter.toLowerCase()))
          .map((item) => (
            <Grid key={item.id} item>
              <DisplayCard {...item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
