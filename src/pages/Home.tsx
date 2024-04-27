import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Modal } from "../components/Modal"
import { products } from "../data/data"

export const Home = () => {

  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)
  
  //Trabalhando aqui

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })
  
  const addToCart = (product:any) => {
    const newProduct = [...cart, product]
    localStorage.setItem("@product", JSON.stringify(newProduct))
    setCart(newProduct)
  }

  const filteredProducts:any = products.filter((product) => product.title.toLocaleLowerCase().includes(search))

  console.log(filteredProducts)

  return (
    <>
      <Header search={search} setSearch={setSearch} setOpenModal={setOpenModal} />
      <ProductList filterProd={filteredProducts} addToCart={addToCart} />
      <Modal open={openModal} close={() => {setOpenModal(!openModal)}} />
    </>
  )
}