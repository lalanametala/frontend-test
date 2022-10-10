import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterOrderForm from '../../components/FilterSortForm'
import { locSortOptions } from '../../components/FilterSortForm/utils'
import DisplayCard from '../../components/LocationCard'
import { ILocation } from '../../interfaces/ILocation'
import { fetchLocationsData } from '../../store/locations'
import { AppDispatch, RootState } from '../../store/store'
import { sortLocations } from '../../utils'

export default function Locations (): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch
  const initialLocations: ILocation[] = []
  const [locations, setLocations] = useState(initialLocations)
  const dispatch = useAppDispatch()
  const storedLocations = useSelector((state: RootState) => state.locations.data)
  const locationFilter = useSelector((state: RootState) => state.filters.locations)
  const locationSort = useSelector((state: RootState) => state.sort.locations) 

  useEffect(() => {
    if (!storedLocations.length) dispatch(fetchLocationsData())
  }, [])

  useEffect(() => {
    setLocations(storedLocations)
  }, [storedLocations])

  useEffect(() => {
    const sortedLocations = sortLocations([...storedLocations], locationSort)

    setLocations(sortedLocations)
  }, [locationSort])

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
      <FilterOrderForm page="locations" filterBy="Search by location" sortOptions={locSortOptions} />
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
