import { useContext } from 'react'
import { FiltersContext } from '../contexts/FiltersContext'

export const useFilters = () => {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  return context
}
