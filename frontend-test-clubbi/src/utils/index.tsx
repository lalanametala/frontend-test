import { ICharacter } from '../interfaces/ICharacter'
import { IFilm } from '../interfaces/IFilm'
import { ILocation } from '../interfaces/ILocation'
import { characterParams, filmParams, locationParams } from '../store/sort'

type mappedDataType = {
  value: string | number
  index: number
}

export const ascSorterString = (a: mappedDataType, b: mappedDataType): number => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
}

export const descSorterString = (a: mappedDataType, b: mappedDataType): number => {
  if (a.value < b.value) {
    return 1
  }
  if (a.value > b.value) {
    return -1
  }
  return 0
}

export const ascSorterNumber = (a: mappedDataType, b: mappedDataType): number => {
  if (+a.value > +b.value) {
    return 1
  }
  if (+a.value < +b.value) {
    return -1
  }
  return 0
}

export const descSorterNumber = (a: mappedDataType, b: mappedDataType): number => {
  if (+a.value < +b.value) {
    return 1
  }
  if (+a.value > +b.value) {
    return -1
  }
  return 0
}

const elseSorter = (
  mappedData: mappedDataType[],
  sort: string,
  parameter: string,
  data: any[]
): any[] => {
  const knownData = mappedData.filter((item) => !Number.isNaN(Number(item.value)))

  if (sort === 'asc') knownData.sort(ascSorterNumber)
  if (sort === 'desc') knownData.sort(descSorterNumber)
  const sortedData = knownData.map(({ index }) => data[index])
  const unknownData = data.filter((item) => Number.isNaN(Number(item[parameter])))
  return [...sortedData, ...unknownData]
}

export const sortFilms = (data: IFilm[], order: filmParams): IFilm[] => {
  const { parameter, sort } = order
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index
  }))

  if (parameter === 'title') {
    if (sort === 'asc') mappedData.sort(ascSorterString)
    if (sort === 'desc') mappedData.sort(descSorterString)
    const sortedData = mappedData.map(({ index }) => data[index])
    return sortedData
  }

  return elseSorter(mappedData, sort, parameter, data)
}

export const sortCharacters = (data: ICharacter[], order: characterParams): ICharacter[] => {
  const { parameter, sort } = order
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index
  }))

  if (parameter === 'name') {
    if (sort === 'asc') mappedData.sort(ascSorterString)
    if (sort === 'desc') mappedData.sort(descSorterString)
    const sortedData = mappedData.map(({ index }) => data[index])
    return sortedData
  }
  return elseSorter(mappedData, sort, parameter, data)
}

export const sortLocations = (data: ILocation[], order: locationParams): ILocation[] => {
  const { parameter, sort } = order
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index
  }))

  if (parameter === 'name') {
    if (sort === 'asc') mappedData.sort(ascSorterString)
    if (sort === 'desc') mappedData.sort(descSorterString)
    const sortedData = mappedData.map(({ index }) => data[index])
    return sortedData
  }
  return elseSorter(mappedData, sort, parameter, data)
}
