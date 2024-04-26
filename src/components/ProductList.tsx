import { useState, useEffect } from "react"
// import { products } from "../data/data"
import { ShoppingCart } from "lucide-react"

export const ProductList = ({filterProd}:any) => {

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
      <div className="flex flex-wrap w-[80vw] justify-center gap-8 p-5 m-auto bg-zinc-500">
        {filterProd.map((product:any, index: number) => {
          return (
            <div key={index} className="w-[220px] h-[300px] p-5 bg-zinc-200 flex flex-col rounded-[25px] justify-center items-center hover:h-[320px] transition-all duration-300">
              <div className="w-[150px] h-[100px] bg-white flex justify-center rounded-3xl">
                <img src={product.picture} className="w-[123px] h-auto relative top-[-30px]" />
              </div>
              <div className="w-[150px] items-start mt-2">
                <h2 className="font-semibold text-l text-black font">{product.title}</h2>
                <span className="font-normal text-base">{product.size}</span>
              </div>
              <div className="w-[180px] h-12 bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 rounded-[15px] flex items-center transition-all justify-between p-4 hover:transition-all duration-500">
                <span className="text-white font-bold">
                  {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}
                </span>
                <button className="w-[50px] h-[30px] bg-white rounded-xl flex items-center justify-center" onClick={() => addToCart(product)}>
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