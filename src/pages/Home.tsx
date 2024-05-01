import { useState } from "react"
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Modal } from "../components/Modal"
import { products } from "../data/data"
import { FilterSearch } from "../components/FilterSearch"
import { ModalFilter } from "../components/ModalFilter"

export const Home = ({toast}:any) => {

  const [search, setSearch] = useState('')

  const [openModal, setOpenModal] = useState<Boolean>(false)
  const [openModalFilter, setOpenModalFilter] = useState(false)
  
  const [total, setTotal] = useState<Number>(0)
  const [quanty, setQuanty] = useState(0)

  const [selectOptionPrice, setSelectOptionPrice] = useState("Nenhum")
  const [selectOptionCategory, setSelectOptionCategory] = useState("Nenhuma")

  const [productsArray, setProductsArray] = useState([...products])

  let filteredProducts:any = productsArray.filter((product) => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })

  const [isCheckedArray, setIsCheckedArray] = useState(Array(cart.length).fill(false))

  const handleQuantyValue = (value: number, index: number) => {
    const updatedCart = [...cart]
    updatedCart[index].quantyValue = value 
    setCart(updatedCart)

    handleCheckboxChange(index, true)
  }
  
  const handleCheckboxChange = (index: number, isChecked?: boolean) => {
    const newCheckedArray = [...isCheckedArray]
    newCheckedArray[index] = isChecked
    setIsCheckedArray(newCheckedArray)
  
    let newTotal = 0
    let newQuanty = 0
  
    newCheckedArray.forEach((isChecked, index) => {
      if (isChecked) {
        const product = cart[index]
        newTotal += product.price * product.quantyValue 
        newQuanty += parseInt(product.quantyValue)
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
  
  const addToCart = (product: any) => {
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id)
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantyValue++
      localStorage.setItem("@product", JSON.stringify(updatedCart))
      setCart(updatedCart)
  
      addToCartNotify(product)
      return
    }
  
    const newProduct = { ...product, quantyValue: 1 }
    const newCart = [...cart, newProduct]
  
    localStorage.setItem("@product", JSON.stringify(newCart))
    setCart(newCart)
  
    const newQuanty = quanty + 1
    setQuanty(newQuanty)
  
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

  //FilterModal functions

  const handleSelectChangePrice = (event:any) => {
    setSelectOptionPrice(event.target.value)
  }

  const handleSelectChangeCategory = (event:any) => {
    setSelectOptionCategory(event.target.value)
  }

  //Quando a função for alterar 

  const handleFilterOptions = () => {
    
    let filteredProducts = [...products]// Inicialmente, use todos os produtos
  
    if (selectOptionCategory !== "Nenhuma") {
      
      filteredProducts = filteredProducts.filter((product) => product.category === selectOptionCategory)
    }
   
    if (selectOptionPrice === "Maior") {
      filteredProducts.sort((a, b) => b.price - a.price) // preço decrescente
    } else if (selectOptionPrice === "Menor") {
      filteredProducts.sort((a, b) => a.price - b.price) // preço crescente
    }
  
    // Atualizar o estado productsArray com os produtos filtrados e ordenados
    setProductsArray(filteredProducts)
  }
  

  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <Header search={search} setSearch={setSearch} setOpenModal={setOpenModal} totalProducts={cart}/>
        <FilterSearch filteredProducts={filteredProducts} setOpenModal={setOpenModalFilter} />
        <ModalFilter open={openModalFilter} close={() => {setOpenModalFilter(!openModalFilter)}} handleSelectChangePrice={handleSelectChangePrice} handleSelectChangeCategory={handleSelectChangeCategory} handleFilterOptions={handleFilterOptions}/>
        <ProductList filterProd={filteredProducts} addToCart={addToCart} />
        <Modal open={openModal} close={() => {setOpenModal(!openModal)}} removeProduct={removeProduct} cart={cart} removeAllProducts={removeAllProducts} total={total} quanty={quanty} isCheckedArray={isCheckedArray} handleCheckboxChange={handleCheckboxChange} optionUnavaliable={optionUnavaliable} handleQuantyValue={handleQuantyValue} />
      </div>
    </>
  )
}