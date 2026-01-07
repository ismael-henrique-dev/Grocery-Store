import { Header } from '../components/Header'
import { ProductList } from '../components/ProductList'
import { ProductListHeader } from '../components/ProductListHeader'

export function Home() {
  return (
    <div className='flex items-center flex-col justify-center'>
      <Header />
      <ProductListHeader />
      <ProductList />
    </div>
  )
}
