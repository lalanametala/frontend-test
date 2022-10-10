import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterOrderForm from '../../components/FilterOrderForm'
import DisplayCard from '../../components/LocationCard'
import { ILocation } from '../../interfaces/ILocation'
import { fetchLocationsData } from '../../store/locations'
import { AppDispatch, RootState } from '../../store/store'

export default function Locations (): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch
  const initialLocations: ILocation[] = []
  const [locations, setLocations] = useState(initialLocations)
  const dispatch = useAppDispatch()
  const storedLocations = useSelector((state: RootState) => state.locations.data)
  const locationFilter = useSelector((state: RootState) => state.filters.locations)

  useEffect(() => {
    if (!storedLocations.length) dispatch(fetchLocationsData())
  }, [])

  useEffect(() => {
    setLocations(storedLocations)
  }, [storedLocations])

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
      <FilterOrderForm page="locations" filterBy="Search by location" />
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
        {locations
          .filter(({ name }) => name.toLowerCase().includes(locationFilter.toLowerCase()))
          .map((item) => (
            <Grid key={item.id} item>
              <DisplayCard {...item} />
            </Grid>
        ))}
      </Grid>
    </Container>
  )
}
