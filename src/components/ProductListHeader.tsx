import { FilterPopover } from './FilterPopover'
import { useFilters } from '../hooks/useFilters' // Importando o hook do contexto

export function ProductListHeader() {
  const { filteredProducts, search, category, priceOrder } = useFilters()

  const isFiltering = search.length > 0 || category !== 'Nenhuma'
  const totalItems = filteredProducts.length

  return (
    <section className='h-16 w-full flex items-center justify-between px-6 sm:px-10 mt-4'>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:gap-2'>
        {!isFiltering ? (
          <h1 className='font-bold text-xl sm:text-2xl text-black'>
            Todos os produtos
          </h1>
        ) : (
          <div className='flex items-baseline gap-2'>
            <h1 className='font-bold text-xl sm:text-2xl text-black'>
              Resultado
            </h1>
            <span className='font-medium text-sm text-zinc-500'>
              ({totalItems} {totalItems === 1 ? 'produto' : 'produtos'})
            </span>
          </div>
        )}
      </div>

      <div className='flex items-center gap-4'>
        {/* Mostra um indicador visual se houver filtros ativos (opcional) */}
        {category !== 'Nenhuma' && (
          <span className='hidden md:inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600'>
            Categoria: {category}
          </span>
        )}
        {priceOrder !== 'Nenhum' && (
          <span className='hidden md:inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600'>
            Preço: {priceOrder}
          </span>
        )}
        <FilterPopover />
      </div>
    </section>
  )
}
