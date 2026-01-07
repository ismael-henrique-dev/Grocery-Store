import { toast } from 'react-toastify'
import { useCart } from '../hooks/use-cart'
import { Trash } from 'lucide-react'

type CartItemCardProps = {
  item: CartItem
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { deleteItemFromCart, updateItemQuantity, toggleItemSelection } =
    useCart()

  const handleDeleteItem = () => {
    deleteItemFromCart(item.id)
    toast.success(`Produto removido do carrinho!`)
  }

  return (
    <div className='mb-6 flex w-[400px] h-[113px] items-center justify-center'>
      <input
        type='checkbox'
        checked={item.isSelected}
        onChange={() => toggleItemSelection(item.id)}
        className={`peer relative size-10 shrink-0 appearance-none rounded-xl border border-black after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 hover:ring hover:ring-gray-300 focus:outline-none m-[30px]`}
      />
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
              value={item.quantity} // Valor atual da quantidade
              onChange={(e) =>
                updateItemQuantity(item.id, Number(e.target.value))
              } // Passa o novo valor e o índice
            />
          </div>
          <span className='mt-2 text-xl text-indigo-950 font-bold'>
            {item.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
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
