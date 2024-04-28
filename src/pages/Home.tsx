import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Modal } from "../components/Modal"
import { products } from "../data/data"
import { FilterSearch } from "../components/FilterSearch"
import { ModalFilter } from "../components/ModalFilter"



export const Home = ({toast}:any) => {

  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [openModalFilter, setOpenModalFilter] = useState(false)
  
  const [total, setTotal] = useState(0)
  const [quanty, setQuanty] = useState(0)

  const filteredProducts:any = products.filter((product) => product.title.toLocaleLowerCase().includes(search))

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })

  const [isCheckedArray, setIsCheckedArray] = useState(Array(cart.length).fill(false))

  const handleCheckboxChange = (index: number, isChecked?: boolean) => {

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

  //Notifications

  const addToCartNotify = (product:any) => {
    toast.success(`${product.title} adicionado(a) ao carrinho!`)
  }

  const removeProductNotify = () => {
    toast.success(`Produto removido do carrinho!`)
  }

  const removeAllProductsNotify = () => {
    toast.success(`Produtos removidos do carrinho!`)
  }

  const emptyCartNotify = () => {
    toast.info("Não há produtos no carrinho.")
  }

  const optionUnavaliable = () => {
    toast.info("Ops! Opção indisponível")
  }

  //Functions cart
  
  const addToCart = (product:any) => {
    const newProduct = [...cart, product]
    localStorage.setItem("@product", JSON.stringify(newProduct))
    setCart(newProduct)

    addToCartNotify(product)
  }

  const removeProduct = (index:number) => {
    const cartUpdated = [...cart] 
    cartUpdated.splice(index, 1)
    localStorage.setItem("@product", JSON.stringify(cartUpdated))
    setCart(cartUpdated)
    removeProductNotify()

    handleCheckboxChange(index)
  }

  const removeAllProducts = () => {
    localStorage.clear()
    setCart([])
    setTotal(0)
    setQuanty(0)

    if (cart.length === 0) {
      emptyCartNotify()
    } else {
      removeAllProductsNotify()
    }

  }

  //Checkbox/total configuration

  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <Header search={search} setSearch={setSearch} setOpenModal={setOpenModal} totalProducts={cart}/>
        <FilterSearch filteredProducts={filteredProducts} setOpenModal={setOpenModalFilter} />
        <ModalFilter open={openModalFilter} close={() => {setOpenModalFilter(!openModalFilter)}} />
        <ProductList filterProd={filteredProducts} addToCart={addToCart} />
        <Modal open={openModal} close={() => {setOpenModal(!openModal)}} removeProduct={removeProduct} cart={cart} removeAllProducts={removeAllProducts} total={total} quanty={quanty} isCheckedArray={isCheckedArray} handleCheckboxChange={handleCheckboxChange} optionUnavaliable={optionUnavaliable} />
      </div>
    </>
  )
}