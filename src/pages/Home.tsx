import { useState } from 'react'
import { Header } from '../components/Header'
import { ProductList } from '../components/ProductList'
import { products } from '../data/data'
import { ProductListHeader } from '../components/FilterSearch'
import { ModalFilter } from '../components/ModalFilter'

export function Home() {
  const [search, setSearch] = useState('')
  const [openModalFilter, setOpenModalFilter] = useState(false)

  // const [selectOptionPrice, setSelectOptionPrice] = useState("Nenhum")
  // const [selectOptionCategory, setSelectOptionCategory] = useState("Nenhuma")

  const [productsArray] = useState([...products])

  const filteredProducts = productsArray.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className='flex items-center flex-col justify-center'>
      <Header setSearch={setSearch} />
      <ProductListHeader
        filteredProducts={filteredProducts}
        setOpenModal={setOpenModalFilter}
      />
      <ModalFilter
        open={openModalFilter}
        close={() => {
          setOpenModalFilter(!openModalFilter)
        }}
      />
      <ProductList products={filteredProducts} />
    </div>
  )
}
