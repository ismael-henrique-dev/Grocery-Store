import { ArrowLeft } from 'lucide-react'
import { useCart } from '../hooks/use-cart'
import { CartItemCard } from './CartItem'
import { toast } from 'react-toastify'

type CartModalProps = {
  open: boolean
  close: () => void
}

export function CartModal({ open, close }: CartModalProps) {
  const { getItems, deleteItems, totalPrice, totalQuantity } = useCart()

  const items = getItems()

  const handleDeleteAllItems = () => {
    deleteItems()
    toast.success(`Produtos removidos do carrinho!`)
  }

  const hadleToGoCheckout = () => {
    toast.info('Ops! Opção indisponível no momento')
  }

  if (open) {
    return (
      <div className='fixed top-0 left-0 bottom-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-wrap '>
        <div className='bg-zinc-200 rounded-lg sm:w-auto w-full md:h-[500px] h-[100%] fixed p-6 top-0 sm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center flex-col overflow-hidden '>
          <div className='inline-flex items-center justify-between h-[30px] mb-6 w-[100%] sm:w-[100%] gap-8'>
            <button
              onClick={close}
              className='md:w-20 flex items-center gap-1 w-15 text-[15px] '
            >
              <ArrowLeft className='size-4 md:size-5' />
              Voltar
            </button>
            <h2 className='font-bold text-black md:ml-5 mx-[5%]'>Carrinho</h2>
            <button
              className='text-red-600 text-nowrap mr-2'
              onClick={handleDeleteAllItems}
            >
              Remover todos
            </button>
          </div>
          <div className='h-auto max-h-[90%] w-[100%] m-auto py-5 overflow-y-scroll flex flex-col overflow-x-hidden'>
            {items.length === 0 ? (
              <div className='flex justify-center items-center sm:w-[400px] w-full'>
                {' '}
                {/* Arrumar responsividade */}
                <span className='font-bold m-auto'>
                  Seu carrinho está vazio
                </span>
              </div>
            ) : (
              <ul className='flex items-center justify-center flex-col'>
                {items.map((item, index) => (
                  <li key={index}>
                    <CartItemCard item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className='bg-gradient-to-l from-blue-800 to-indigo-950 md:rounded-[40px] h-[150px] flex items-center justify-center gap-4 md:py-10 py-5 w-[80%] md:w-[100%] rounded-[35px] flex-wrap md:mt-4 '>
            <div className='flex flex-col'>
              <span className='mt-2 text-xl text-white font-bold'>
                {totalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
              <span className='font-normal text-base text-zinc-500'>
                Quantidade: {totalQuantity} itens
              </span>
            </div>
            <button
              className='md:h-[58px] h-10 w-[209px] bg-white sm:rounded-[20px] rounded-[15px] font-semibold'
              onClick={hadleToGoCheckout}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    )
  }
}
