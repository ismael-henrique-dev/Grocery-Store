import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Modal } from "../components/Modal"
import { products } from "../data/data"

export const Home = () => {

  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const filteredProducts:any = products.filter((product) => product.title.toLocaleLowerCase().includes(search))

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

  const removeProduct = (index:number) => {
    const cartUpdated = [...cart] 
    cartUpdated.splice(index, 1)
    localStorage.setItem("@product", JSON.stringify(cartUpdated))
    setCart(cartUpdated)
  }

  const removeAllProducts = () => {
    localStorage.clear()
    setCart([])
  }

  const [total, setTotal] = useState(0)
  const [quanty, setQuanty] = useState(0)

  const [isCheckedArray, setIsCheckedArray] = useState(Array(cart.length).fill(false))

  const handleCheckboxChange = (index: number, isChecked: boolean) => {

    const newCheckedArray = [...isCheckedArray]
    newCheckedArray[index] = isChecked
    setIsCheckedArray(newCheckedArray)

    let newTotal = 0
    let newQuanty = 0
    newCheckedArray.forEach((isChecked, index) => {
      if (isChecked) {
        newTotal += cart[index].price
        newQuanty++
      }
    })
    setTotal(newTotal)
    setQuanty(newQuanty)
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} setOpenModal={setOpenModal} totalProducts={cart}/>
      <ProductList filterProd={filteredProducts} addToCart={addToCart} />
      <Modal open={openModal} close={() => {setOpenModal(!openModal)}} removeProduct={removeProduct} cart={cart} removeAllProducts={removeAllProducts} total={total} quanty={quanty} isCheckedArray={isCheckedArray} handleCheckboxChange={handleCheckboxChange} />
    </>
  )
}