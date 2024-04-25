
import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { products } from "../data/data"

export const Home = () => {

  const [search, setSearch] = useState('')

  let filteredProducts:any = products.filter((product) => product.title.toLocaleLowerCase().includes(search))

  console.log(filteredProducts)

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <ProductList filterProd={filteredProducts} />
      {/* <Modal open={openModal} close={() => {setOpenModal(!openModal)}} /> */}
    </>
  )
}