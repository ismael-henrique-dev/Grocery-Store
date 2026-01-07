import { Search as IconSearch } from 'lucide-react'
import { useFilters } from '../hooks/useFilters'

export function Search() {
  const { search, setSearch } = useFilters()

  return (
    <div className='group flex items-center justify-start bg-white sm:w-[30vw] w-[50vw] h-10 rounded-lg p-[10px] ring-1 ring-zinc-200 focus-within:ring-2 focus-within:ring-blue-600 transition-all shadow-sm'>
      <IconSearch className='size-5 text-zinc-400 group-focus-within:text-blue-600 transition-colors' />

      <input
        type='text'
        placeholder='O que você está procurando?'
        className='w-full h-10 pl-4 outline-none bg-transparent text-sm text-zinc-700'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
