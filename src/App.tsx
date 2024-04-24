import { useState, useEffect } from "react"
import { products } from "./data/data"
import { Modal } from "./components/Modal"
import { ShoppingCart } from "lucide-react"


function App() {

  const [openModal, setOpenModal] = useState<boolean>(false)

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => { //Verifico se há mudança no localStorage
    const storedData = localStorage.getItem("@product")
    if (storedData) {
      setCart(JSON.parse(storedData))
    }
  }, []) 

  const addToCart = (product:any) => {
    const newProduct = [...cart, product]
    localStorage.setItem("@product", JSON.stringify(newProduct))
    setCart(newProduct)
  }

  return (
    <>
      <div className="flex flex-wrap w-[1216px] bg-zinc-300 m-auto items-center justify-center gap-8 p-5 ">
        <button onClick={() => {setOpenModal(true)}}>Abrir Modal </button>
        <Modal open={openModal} close={() => {setOpenModal(!openModal)}} />
        {products.map((product) => {
          return (
            <div key={product.id} className="w-[220px] h-[350px] p-5 bg-white flex flex-col rounded-[15px] justify-center items-center">
              <div className="w-[150px] h-[180px] bg-zinc-200 flex items-center justify-center rounded">
                <img src={product.picture} className="w-[123px]" />
              </div>
              <div className="w-[150px] items-start">
                <h2 className="font-semibold text-l text-black font">{product.title}</h2>
                <span className="font-normal text-base">{product.size}</span>
              </div>
              <div className="w-[180px] h-12 bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 rounded-[15px] flex items-center justify-between p-4">
                <span className="text-white font-bold">
                  {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}
                </span>
                <button className="w-[50px] h-[30px] bg-white rounded-2xl flex items-center justify-center" onClick={() => addToCart(product)}>
                 <ShoppingCart className="size-5"/>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
