import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Modal } from "../components/Modal"
import { products } from "../data/data"

export const Home = () => {

  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const filteredProducts:any = products.filter((product) => product.title.toLocaleLowerCase().includes(search))

  console.log(filteredProducts)

  return (
    <>
      <Header search={search} setSearch={setSearch} setOpenModal={setOpenModal} />
      <ProductList filterProd={filteredProducts} />
      <Modal open={openModal} close={() => {setOpenModal(!openModal)}} />
    </>
  )
}