import { Trash, ArrowLeft } from "lucide-react";
import { useState } from "react"

export let totalProducts = 0

export function Modal({open, close, removeProduct}:any) {

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })

  // const removeProduct = (index:number) => {
  //   const cartUpdated = [...cart] 
  //   cartUpdated.splice(index, 1)
  //   localStorage.setItem("@product", JSON.stringify(cartUpdated))
  //   setCart(cartUpdated)
  // }

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

  
  if (open) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-wrap ">
        <div className="bg-zinc-200 rounded-lg sm:w-auto w-full md:h-[500px] h-[100%] fixed p-6 top-0 sm:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center flex-col overflow-hidden ">
          <div className="inline-flex items-center justify-between h-[30px] mb-6 w-[100%] sm:w-[100%] gap-8">
            <button onClick={close} className="md:w-20 flex items-center gap-1 w-15 text-[15px] ">
            <ArrowLeft className="size-4 md:size-5" />
              Voltar
            </button>
            <h2 className="font-bold text-black md:ml-5 mx-[5%]">Carrinho</h2>
            <button className="text-red-600 text-nowrap mr-2"  onClick={removeAllProducts}>Remover todos</button>
          </div>
          <div className="h-auto max-h-[90%] w-[100%] m-auto py-5 overflow-y-scroll flex flex-col overflow-x-hidden">
            {cart.length === 0 ? (
              <span className="font-bold m-auto">Seu carrinho está vazio</span>
            ) : (
              <ul className="flex items-center justify-center flex-col">
              {cart.map((product: any, index: number) => (
                <li key={index}>
                  <div className="mb-6 flex w-[400px] h-[113px] items-center justify-center">
                  <input type="checkbox"
                  checked={isCheckedArray[index]}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  className={`peer relative size-10 shrink-0 appearance-none rounded-xl border border-black after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 hover:ring hover:ring-gray-300 focus:outline-none m-[30px]`} />
                    <div className="rounded-[20px] bg-white h-[100px] w-[50%] sm:w-[70%] flex items-center">
                      
                      <img src={product.picture} className="w-16 h-[84px] mx-2" />
                      <div className="flex flex-col ">
                        <h2 className="font-semibold text-l text-black font">{product.title}</h2>
                        <span className="font-normal text-base">{product.size}</span>
                        <span className="mt-2 text-xl text-indigo-950 font-bold">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                      </div>
                      
                    </div>
                    <button className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 size-10 rounded-[50%] relative bottom-[55px] right-[5%] flex items-center justify-center z-4" onClick={() => removeProduct(cart.indexOf(product))} ><Trash className="text-white"/></button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          </div>
          <div className="bg-gradient-to-l from-blue-800 to-indigo-950 md:rounded-[40px] h-[150px] flex items-center justify-center gap-4 md:py-10 py-5 w-[80%] md:w-[100%] rounded-[35px] flex-wrap md:mt-4 ">
            <div className="flex flex-col">
              <span className="mt-2 text-xl text-white font-bold">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
              <span className="font-normal text-base text-zinc-500">Quantidade: {quanty} itens</span>
            </div>
            <button className="md:h-[58px] h-10 w-[209px] bg-white sm:rounded-[20px] rounded-[15px] font-semibold">Finalizar compra</button>  
          </div>
        </div>
      </div>
    )
  }
}