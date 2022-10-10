import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayCard from '../../components/CharacterCard'
import FilterOrderForm from '../../components/FilterOrderForm'
import { ICharacter } from '../../interfaces/ICharacter'
import { IFilm } from '../../interfaces/IFilm'
import { fetchCharactersData } from '../../store/characters'
import { AppDispatch, RootState } from '../../store/store'

export default function Characters (): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch
  const initialCharacters: ICharacter[] = []
  const [characters, setCharacters] = useState(initialCharacters)
  const dispatch = useAppDispatch()
  const storedCharacters = useSelector((state: RootState) => state.characters.data)
  const characterFilter = useSelector((state: RootState) => state.filters.characters)

  useEffect(() => {
    if (!storedCharacters.length) dispatch(fetchCharactersData())
  }, [])

  useEffect(() => {
    setCharacters(storedCharacters)
    console.log(storedCharacters);
    
  }, [storedCharacters])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FilterOrderForm page="characters" filterBy="Search by characters" />
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
