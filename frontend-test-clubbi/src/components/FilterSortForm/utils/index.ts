export const filmSortOptions = [
  { title: 'Title', value: 'title-asc', label: 'A-Z' },
  { title: 'Title', value: 'title-desc', label: 'Z-A' },
  { title: 'Release Date', value: 'release_date-desc', label: 'Most Recent' },
  { title: 'Release Date', value: 'release_date-asc', label: 'Least Recent' },
  { title: 'Running Time', value: 'running_time-desc', label: 'Longest' },
  { title: 'Running Time', value: 'running_time-asc', label: 'Shortest' },
  { title: 'Rating', value: 'rt_score-desc', label: 'Best Rated' },
  { title: 'Rating', value: 'rt_score-asc', label: 'Worst Rated' },
]

export const charSortOptions = [
  { title: 'Name', value: 'name-asc', label: 'A-Z' },
  { title: 'Name', value: 'name-desc', label: 'Z-A' },
  { title: 'Age', value: 'age-desc', label: 'Oldest' },
  { title: 'Age', value: 'age-asc', label: 'Youngest' },
]

export const locSortOptions = [
  { title: 'Name', value: 'name-asc', label: 'A-Z' },
  { title: 'Name', value: 'name-desc', label: 'Z-A' },
  { title: 'Surface Water', value: 'surface_water-desc', label: 'Most Surface Water' },
  { title: 'Surface Water', value: 'surface_water-asc', label: 'Least Surface Water' },
]

export type sortOptions = {
  title: string
  value: string
  label: string
}