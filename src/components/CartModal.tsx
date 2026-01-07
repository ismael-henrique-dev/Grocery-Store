import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { ItemCard } from './ItemCard'
import { toast } from 'react-toastify'
import { priceFormatter } from '../lib/utils'

export function CartModal() {
  const { getItems, deleteItems, totalPrice, totalQuantity, totalVolumes } =
    useCart()

  const items = getItems()

  const handleDeleteAllItems = () => {
    deleteItems()
    toast.success(`Produtos removidos do carrinho!`)
  }

  const handleToGoCheckout = () => {
    toast.info('Ops! Opção indisponível no momento.')
  }

  const hasItems = items.length > 0

  const totalPriceFormatted = priceFormatter(totalPrice)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className='flex sm:mx-10 mx-5 cursor-pointer'>
          <ShoppingCart className='size-10' />
          <span className='bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 size-5 flex items-center justify-center text-white rounded-lg relative bottom-4 right-4'>
            {totalVolumes}
          </span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm' />

        <Dialog.Content className='fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transform overflow-hidden bg-zinc-200 p-6 shadow-xl transition-all sm:top-1/2 sm:-translate-y-1/2 sm:rounded-lg sm:w-auto md:h-[500px] h-full flex flex-col items-center'>
          <div className='inline-flex items-center justify-between h-[30px] mb-6 w-full gap-8'>
            <Dialog.Close asChild>
              <button className='md:w-20 flex items-center gap-1 w-15 text-[15px] hover:opacity-70 transition-opacity'>
                <ArrowLeft className='size-4 md:size-5' />
                Voltar
              </button>
            </Dialog.Close>

            <Dialog.Title className='font-bold text-black md:ml-5 mx-[5%]'>
              Carrinho
            </Dialog.Title>

            <button
              className='text-red-600 text-nowrap mr-2 hover:underline'
              onClick={handleDeleteAllItems}
            >
              Remover todos
            </button>
          </div>

          <div className='h-auto max-h-[90%] w-full m-auto py-5 overflow-y-auto flex flex-col'>
            {hasItems ? (
              <ul className='flex items-center justify-center flex-col gap-4'>
                {items.map((item, index) => (
                  <li key={index} className='w-full'>
                    <ItemCard item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className='flex justify-center items-center sm:w-[400px] w-full py-10'>
                <span className='font-bold'>Seu carrinho está vazio.</span>
              </div>
            )}
          </div>

          <div className='bg-gradient-to-l from-blue-800 to-indigo-950 md:rounded-[40px] h-auto min-h-[120px] flex items-center justify-center gap-6 md:py-8 py-5 w-full rounded-[35px] flex-wrap md:mt-4 px-6'>
            <div className='flex flex-col'>
              <span className='text-xl text-white font-bold'>
                {totalPriceFormatted}
              </span>
              <span className='font-normal text-sm text-zinc-400'>
                Quantidade: {totalQuantity} itens
              </span>
            </div>
            <button
              className='md:h-[58px] h-10 px-6 bg-white sm:rounded-[20px] rounded-[15px] font-semibold hover:bg-zinc-100 transition-colors'
              onClick={handleToGoCheckout}
            >
              Finalizar compra
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
