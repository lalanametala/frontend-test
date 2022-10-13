import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from '../../components/CharacterCard'
import FilterOrderForm from '../../components/FilterSortForm'
import { charSortOptions } from '../../components/FilterSortForm/utils'
import { ICharacter } from '../../interfaces/ICharacter'
import { fetchCharactersData } from '../../store/characters'
import { fetchFilmsData } from '../../store/films'
import { AppDispatch, RootState } from '../../store/store'
import { sortCharacters } from '../../utils'

export default function Characters (): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch
  const initialCharacters: ICharacter[] = []
  const [characters, setCharacters] = useState(initialCharacters)
  const dispatch = useAppDispatch()
  const storedCharacters = useSelector((state: RootState) => state.characters.data)
  const characterFilter = useSelector((state: RootState) => state.filters.characters)
  const characterSort = useSelector((state: RootState) => state.sort.characters)
  const storedFilms = useSelector((state: RootState) => state.films.data)

  useEffect(() => {
    if (!storedCharacters.length) dispatch(fetchCharactersData())
    if (!storedFilms.length) dispatch(fetchFilmsData())
  }, [])

  useEffect(() => {
    setCharacters(storedCharacters)
  }, [storedCharacters])

  useEffect(() => {
    const sortedCharacters = sortCharacters([...storedCharacters], characterSort)
    setCharacters(sortedCharacters)
  }, [characterSort])

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
      <FilterOrderForm page="characters" filterBy="Search by characters" sortOptions={charSortOptions} />
      <Grid
        container
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignSelf: 'center',
          width: '90vw',
          marginBottom: { xs: '50px', sm: '50px', md: '120px' },
          justifyContent: 'center',
          alignItems: 'top',
          gap: '20px'
        }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        {characters
          .filter(({ name }) => name.toLowerCase().includes(characterFilter.toLowerCase()))
          .map((item) => (
            <Grid key={item.id} item sx={{ minHeight: '' }}>
              <DisplayCard {...item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
