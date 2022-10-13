import {
  Container,
  Grid, MenuItem,
  TextField
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCharacterFilter, setFilmFilter, setLocationFilter } from '../../store/filters'
import { setCharacterSort, setFilmSort, setLocationSort } from '../../store/sort'
import { sortOptionsType } from './utils'

type props = {
  page: string
  filterBy: string
  sortOptions: sortOptionsType[]
}

function FilterOrderForm ({ page, filterBy, sortOptions }: props): JSX.Element {
  const [filterForm, setFilterForm] = useState({
    filterInput: '',
    orderSelect: ''
  })

  const dispatch = useDispatch()

  const handleChange = ({ target }: ChangeEvent): void => {
    const { name, value } = target as HTMLTextAreaElement

    if (name === 'filterInput') {
      setFilterForm({ ...filterForm, filterInput: value })
      switch (page) {
        case 'films':
          dispatch(setFilmFilter(value))
          break
        case 'characters':
          dispatch(setCharacterFilter(value))
          break
        default:
          dispatch(setLocationFilter(value))
          break
      }
    } else {
      setFilterForm({ ...filterForm, orderSelect: value })

      const [parameter, sort] = value.split('-')

      switch (page) {
        case 'films':
          dispatch(setFilmSort({ parameter, sort }))
          break
        case 'characters':
          dispatch(setCharacterSort({ parameter, sort }))
          break
        default:
          dispatch(setLocationSort({ parameter, sort }))
          break
      }
    }
  }

  return (
    <Container
      component="section"
      sx={{
        marginTop: { xs: '100px', md: '140px' },
        marginBottom: { xs: '50px', sm: '50px', md: '50px' }
      }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
        <Grid item xs={4} sm={8} md={6} sx={{ paddingLeft: '0px' }}>
          <TextField
            fullWidth
            id="outlined-helperText"
            name="filterInput"
            value={filterForm.filterInput}
            onChange={handleChange}
            label={filterBy}
          />
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <TextField
            fullWidth
            id="orderSelect"
            name="orderSelect"
            value={filterForm.orderSelect}
            label="Sort by:"
            select
            onChange={handleChange}
          >
            {sortOptions.map(({ title, value, label }, index) => (
              <MenuItem data-testid={`select-${index}`} key={label} title={title} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FilterOrderForm
