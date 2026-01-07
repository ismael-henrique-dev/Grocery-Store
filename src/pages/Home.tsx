import { useState } from 'react'
import { Header } from '../components/Header'
import { ProductList } from '../components/ProductList'
import { CartModal } from '../components/CartModal'
import { products } from '../data/data'
import { FilterSearch } from '../components/FilterSearch'
import { ModalFilter } from '../components/ModalFilter'

export function Home() {
  const [search, setSearch] = useState('')

  const [openModal, setOpenModal] = useState(false)
  const [openModalFilter, setOpenModalFilter] = useState(false)

  // const [selectOptionPrice, setSelectOptionPrice] = useState("Nenhum")
  // const [selectOptionCategory, setSelectOptionCategory] = useState("Nenhuma")

  const [productsArray] = useState([...products])

  const filteredProducts = productsArray.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  //Notifications

  // const addToCartNotify = (product:any) => {
  //   toast.success(`${product.title} adicionado(a) ao carrinho!`)
  // }

  // const removeProductNotify = () => {
  //   toast.success(`Produto removido do carrinho!`)
  // }CartModal

  // const removeAllProductsNotify = () => {
  //   toast.success(`Produtos removidos do carrinho!`)
  // }

  // const emptyCartNotify = () => {
  //   toast.info("Não há produtos no carrinho.")
  // }

  // const optionUnavaliable = () => {
  //   toast.info("Ops! Opção indisponível")
  // }

  // const handleFilterOptions = () => {
  //   let filteredProducts = [...products] // Inicialmente, use todos os produtos

  //   if (selectOptionCategory !== 'Nenhuma') {
  //     filteredProducts = filteredProducts.filter(
  //       (product) => product.category === selectOptionCategory
  //     )
  //   }

  //   if (selectOptionPrice === 'Maior') {
  //     filteredProducts.sort((a, b) => b.price - a.price) // preço decrescente
  //   } else if (selectOptionPrice === 'Menor') {
  //     filteredProducts.sort((a, b) => a.price - b.price) // preço crescente
  //   }

  //   // Atualizar o estado productsArray com os produtos filtrados e ordenados
  //   setProductsArray(filteredProducts)
  // }

  return (
    <>
      <div className='flex items-center flex-col justify-center'>
        <Header setSearch={setSearch} setOpenModal={setOpenModal} />
        <FilterSearch
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
        <CartModal
          open={openModal}
          close={() => {
            setOpenModal(!openModal)
          }}
        />
      </div>
    </>
  )
}
