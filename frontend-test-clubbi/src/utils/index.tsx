import { ICharacter } from "../interfaces/ICharacter";
import { IFilm } from "../interfaces/IFilm";
import { ILocation } from "../interfaces/ILocation";
import { characterParams, filmParams, locationParams } from "../store/sort";

type mappedData = {
  value: string | number
  index: number
}

export const ascSorterString = (a: mappedData, b: mappedData) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
};

export const descSorterString = (a: mappedData, b: mappedData) => {
  if (a.value < b.value) {
    return 1;
  }
  if (a.value > b.value) {
    return -1;
  }
  return 0;
};

export const ascSorterNumber = (a: mappedData, b: mappedData) => {
  if (+a.value > +b.value) {
    return 1;
  }
  if (+a.value < +b.value) {
    return -1;
  }
  return 0;
};

export const descSorterNumber = (a: mappedData, b: mappedData) => {
  if (+a.value < +b.value) {
    return 1;
  }
  if (+a.value > +b.value) {
    return -1;
  }
  return 0;
};

export const sortFilms = (data: IFilm[], order: filmParams ) => {
  const { parameter, sort } = order;
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index,
  }));

  if(parameter === 'title') {
    if (sort === 'asc') mappedData.sort(ascSorterString);
    if (sort === 'desc') mappedData.sort(descSorterString);
    const sortedData = mappedData.map(({ index }) => data[index]);
    return sortedData;
  } else {
    const knownData = mappedData.filter((item) => !isNaN(Number(item.value)));
    
    if (sort === 'asc') knownData.sort(ascSorterNumber);
    if (sort === 'desc') knownData.sort(descSorterNumber);
    const sortedData = knownData.map(({ index }) => data[index]);
    const unknownData = data.filter((item) => isNaN(Number(item[parameter])));
    return [...sortedData, ...unknownData];  
  }
};

export const sortCharacters = (data: ICharacter[], order: characterParams ) => {
  const { parameter, sort } = order;
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index,
  }));

  if(parameter === 'name') {
    if (sort === 'asc') mappedData.sort(ascSorterString);
    if (sort === 'desc') mappedData.sort(descSorterString);
    const sortedData = mappedData.map(({ index }) => data[index]);
    return sortedData;
  } else {
    const knownData = mappedData.filter((item) => !isNaN(Number(item.value)));
    
    if (sort === 'asc') knownData.sort(ascSorterNumber);
    if (sort === 'desc') knownData.sort(descSorterNumber);
    const sortedData = knownData.map(({ index }) => data[index]);
    const unknownData = data.filter((item) => isNaN(Number(item[parameter])));
    return [...sortedData, ...unknownData];  
  }
};

export const sortLocations = (data: ILocation[], order: locationParams ) => {
  const { parameter, sort } = order;
  const mappedData = data.map((item, index) => ({
    value: item[parameter],
    index,
  }));

  if(parameter === 'name') {
    if (sort === 'asc') mappedData.sort(ascSorterString);
    if (sort === 'desc') mappedData.sort(descSorterString);
    const sortedData = mappedData.map(({ index }) => data[index]);
    return sortedData;
  } else {
    const knownData = mappedData.filter((item) => !isNaN(Number(item.value)));
    
    if (sort === 'asc') knownData.sort(ascSorterNumber);
    if (sort === 'desc') knownData.sort(descSorterNumber);
    const sortedData = knownData.map(({ index }) => data[index]);
    const unknownData = data.filter((item) => isNaN(Number(item[parameter])));
    return [...sortedData, ...unknownData];  
  }
};
