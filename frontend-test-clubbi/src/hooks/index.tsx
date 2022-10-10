import { useState } from 'react'

type UseElevation = {
  elevation: number
  handleMouseOver: () => void
  handleMouseOut: () => void
}

export default function useElevation (): UseElevation {
  const [elevation, setElevation] = useState(2)

  const handleMouseOver = (): void => {
    setElevation(6)
  }

  const handleMouseOut = (): void => {
    setElevation(2)
  }

  return {
    elevation,
    handleMouseOver,
    handleMouseOut
  }
}
