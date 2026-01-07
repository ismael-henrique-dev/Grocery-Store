import { toast } from 'react-toastify'
import { useCart } from '../hooks/use-cart'
import { Check, Trash } from 'lucide-react'
import { priceFormatter } from '../lib/utils'

type CartItemCardProps = {
  item: CartItem
}

export function ItemCard({ item }: CartItemCardProps) {
  const { deleteItemFromCart, updateItemQuantity, toggleItemSelection } =
    useCart()

  const handleDeleteItem = () => {
    deleteItemFromCart(item.id)
    toast.success(`Produto removido do carrinho!`)
  }

  const handleUpdateItemQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)

    if (!isNaN(value)) {
      updateItemQuantity(item.id, value)
    }
  }

  const priceFormatted = priceFormatter(item.price)

  return (
    <div className='mb-6 flex w-[400px] h-[113px] items-center justify-center'>
      <div className='inline-flex items-center'>
        <label className='flex items-center cursor-pointer relative mr-5'>
          <input
            type='checkbox'
            checked={item.isSelected}
            onChange={() => toggleItemSelection(item.id)}
            className='peer h-10 w-10 cursor-pointer transition-all appearance-none rounded-xl hover:shadow-md border border-zinc-400 checked:bg-gradient-to-l from-blue-800 to-indigo-950 checked'
            id='check'
          />
          <span className='absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
            <Check />
          </span>
        </label>
      </div>
      <div className='rounded-[20px] bg-white h-[100px] w-[50%] sm:w-[70%] flex items-center'>
        <img src={item.picture} className='w-16 h-[84px] mx-2' />
        <div className='flex flex-col '>
          <h2 className='font-semibold text-l text-black font'>{item.title}</h2>
          <div className='flex items-center gap-2'>
            <span className='font-normal text-base'>{item.size}</span>
            <input
              type='number'
              min={1}
              className='h-7 w-8 indent-1 bg-zinc-200 outline-none rounded-md appearance-none'
              value={item.quantity}
              onChange={handleUpdateItemQuantity}
            />
          </div>
          <span className='mt-2 text-xl text-indigo-950 font-bold'>
            {priceFormatted}
          </span>
        </div>
      </div>
      <button
        className='bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 size-10 rounded-[50%] relative bottom-[55px] right-[5%] flex items-center justify-center z-4'
        onClick={handleDeleteItem}
      >
        <Trash className='text-white' />
      </button>
    </div>
  )
}
