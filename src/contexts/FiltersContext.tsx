import { createContext, useState, ReactNode } from 'react'
import { products } from '../lib/data/data'

type FiltersContextData = {
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  priceOrder: string
  setPriceOrder: (value: string) => void
  filteredProducts: Product[]
}

export const FiltersContext = createContext<FiltersContextData>(
  {} as FiltersContextData
)

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Nenhuma')
  const [priceOrder, setPriceOrder] = useState('Nenhum')

  // A mágica acontece aqui: centralizamos toda a lógica de filtragem
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesCategory =
        category === 'Nenhuma' || product.category === category

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (priceOrder === 'Maior') return b.price - a.price
      if (priceOrder === 'Menor') return a.price - b.price
      return 0
    })

  return (
    <FiltersContext.Provider
      value={{
        search,
        setSearch,
        category,
        setCategory,
        priceOrder,
        setPriceOrder,
        filteredProducts,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
