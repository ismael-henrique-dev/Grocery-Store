import logo from '../assets/logo.png'
import { CartModal } from './CartModal'
import { Search } from './Search'

export const Header = () => {
  return (
    <>
      <header className='h-[104px] w-full flex items-center justify-between bg-zinc-200'>
        <div className='flex items-center justify-center'>
          <img src={logo} className='sm:w-[80px]  mt-3 ' />
          <section className='sm:flex items-baseline hidden'>
            <h1 className='text-indigo-950 font-bold text-2xl'>Grocery</h1>
            <h3 className='font-semibold text-sm mt-1'>Store</h3>
          </section>
        </div>
        <section className='flex'>
          <Search />
          <CartModal />
        </section>
      </header>
    </>
  )
}
