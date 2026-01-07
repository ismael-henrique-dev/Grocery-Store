import { ChevronDown, Filter, X } from 'lucide-react'
import * as Popover from '@radix-ui/react-popover'
import { useFilters } from '../hooks/useFilters' // Importando seu novo hook

export const FilterPopover = () => {
  // Consumindo os estados e funções do contexto
  const { category, setCategory, priceOrder, setPriceOrder } = useFilters()

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='bg-gradient-to-l text-white p-2 rounded-lg from-blue-800 to-indigo-950 transition-colors shadow-md hover:brightness-110'>
          <Filter className='size-6' />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={10}
          align='end'
          className='z-50 w-[90vw] sm:w-[455px] bg-white rounded-lg p-6 shadow-[0_10px_38px_10px_rgba(22,_23,_24,_0.35)] outline-none animate-in fade-in zoom-in duration-200'
        >
          <section className='w-full flex flex-col'>
            <div className='flex items-center justify-between mb-2'>
              <h2 className='text-xl font-semibold text-zinc-900'>
                Filtrar por:
              </h2>
              <Popover.Close className='cursor-pointer p-1 hover:bg-zinc-100 rounded-full transition-colors'>
                <X className='size-5' />
              </Popover.Close>
            </div>

            <div className='mb-4'>
              <p className='text-zinc-600 text-sm'>
                Selecione uma opção para filtrar produtos
              </p>
              <hr className='border-zinc-300 h-px mt-3' />
            </div>

            <div className='flex flex-col gap-4'>
              {/* Categoria */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='categoria'
                  className='text-base font-semibold text-zinc-800'
                >
                  Categoria
                </label>
                <div className='relative'>
                  <select
                    id='categoria'
                    value={category} // Valor vindo do contexto
                    onChange={(e) => setCategory(e.target.value)} // Atualiza o contexto
                    className='appearance-none bg-zinc-200 w-full rounded-lg h-10 outline-none indent-3 pr-10 focus:ring-2 ring-indigo-500 transition-all cursor-pointer'
                  >
                    <option value='Nenhuma'>Nenhuma</option>
                    <option value='Bebidas'>Bebidas</option>
                    <option value='Vegetais'>Vegetais</option>
                    <option value='Laticínios'>Laticínios</option>
                    <option value='Carnes e Aves'>Carnes e Aves</option>
                    <option value='Pães e Massas'>Pães e Massas</option>
                    <option value='Snacks e Petiscos'>Snacks e Petiscos</option>
                    <option value='Grãos e Cereais'>Grãos e Cereais</option>
                    <option value='Enlatados e Conservas'>
                      Enlatados e Conservas
                    </option>
                    <option value='Frutas'>Frutas</option>
                    <option value='Peixes e Frutos do Mar'>
                      Peixes e Frutos do Mar
                    </option>
                    <option value='Molhos e Condimentos'>
                      Molhos e Condimentos
                    </option>
                  </select>
                  <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 size-5 pointer-events-none text-zinc-600' />
                </div>
              </div>

              {/* Preço */}
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='preco'
                  className='text-base font-semibold text-zinc-800'
                >
                  Preço
                </label>
                <div className='relative'>
                  <select
                    id='preco'
                    value={priceOrder} // Valor vindo do contexto
                    onChange={(e) => setPriceOrder(e.target.value)} // Atualiza o contexto
                    className='appearance-none bg-zinc-200 w-full rounded-lg h-10 outline-none indent-3 pr-10 focus:ring-2 ring-indigo-500 transition-all cursor-pointer'
                  >
                    <option value='Nenhum'>Nenhum</option>
                    <option value='Maior'>Maior Preço</option>
                    <option value='Menor'>Menor Preço</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 size-5 pointer-events-none text-zinc-600' />
                </div>
              </div>
            </div>

            <div className='w-full flex justify-end mt-6'>
              <Popover.Close asChild>
                {/* <button className='bg-gradient-to-l from-blue-800 to-indigo-950 text-white h-11 px-8 rounded-xl text-sm font-semibold hover:opacity-90 active:scale-95 transition-all'>
                  Aplicar
                </button> */}
              </Popover.Close>
            </div>
          </section>

          <Popover.Arrow className='fill-white' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
