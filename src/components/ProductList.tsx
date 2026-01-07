import { toast } from 'react-toastify'
import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'

export const ProductList = () => {
  const { filteredProducts: products } = useFilters()
  const { addItemToCart } = useCart()

  return (
    <>
      <div className='flex flex-wrap w-[80vw] justify-center gap-8 p-5 m-auto bg-zinc-200'>
        {products.map((product: Product, index: number) => {
          const item: Item = {
            ...product,
            quantity: 1,
            isSelected: false,
          }

          const handleAddItemToCart = () => {
            addItemToCart(item)
            toast.success(`${product.title} adicionado(a) ao carrinho!`)
          }

          return (
            <div
              key={index}
              className='w-[220px] h-[300px] p-6 bg-transparent border-1 flex flex-col rounded-[25px] justify-center items-center transition-all duration-300 border hover:border-black hover:scale-110  hover:h-[350px] group/item'
            >
              <div className='w-[190px] h-[142px] mt-4 bg-white flex justify-center rounded-3xl'>
                <img
                  src={product.picture}
                  className='w-[133px] h-auto relative top-[-40px]'
                />
              </div>
              <div className='w-[180px] items-start mt-2 flex flex-col'>
                <h2 className='font-semibold text-l text-black font'>
                  {product.title}
                </h2>
                <span className='font-normal text-base'>{product.size}</span>
                <span className='text-indigo-950 font-bold text-[20px]'>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
              <button
                className='w-[180px] h-[45px] bg-white rounded-lg font-semibold text-sm flex items-center justify-center my-2 invisible  group-hover/item:visible transition-all duration-300 border hover:border-black'
                onClick={handleAddItemToCart}
              >
                Adicionar ao carrinho
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
