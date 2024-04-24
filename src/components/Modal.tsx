import { Trash, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react"

export function Modal({open, close}:any) {

  const [cart, setCart] = useState<any>(() => {
    const storedData = localStorage.getItem("@product")
    return storedData ? JSON.parse(storedData) : []
  })

  useEffect(() => {
    const storedData = localStorage.getItem("@product")
    if (storedData) {
      setCart(JSON.parse(storedData))
    }
  }, [])

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

  if (open) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-zinc-200 rounded-lg w-[468px] h-[350px] fixed p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col overflow-scroll">
          <div className="flex items-center justify-between h-[30px] mb-6 w-full">
            <button onClick={close} className="w-20 flex items-center gap-1">
            <ArrowLeft />
              Voltar
            </button>
            <h2 className="font-bold text-black ml-5">Carrinho</h2>
            <button className="text-red-600" onClick={removeAllProducts}>Remover todos</button>
          </div>
          <div>
            {cart.length === 0 ? (
              <span className="font-bold">Seu carrinho está vazio</span>
            ) : (
              <ul>
              {cart.map((product: any, index: number) => (
                <li key={index}>
                  <div className="mb-6 flex w-[400px] h-[113px] items-center justify-center">
                  <input type="checkbox"
                  checked={isCheckedArray[index]}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  className="peer relative size-10 shrink-0 appearance-none rounded-xl border border-black after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 hover:ring hover:ring-gray-300 focus:outline-none m-[30px]" />
                    <div className="rounded-[20px] bg-white h-[100px] w-[317px] flex items-center">
                      <button className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 size-10 rounded-[50%] relative bottom-[55px] left-[275px] flex items-center justify-center" onClick={() => removeProduct(cart.indexOf(product))} ><Trash className="text-white"/></button>
                      <img src={product.picture} className="w-16 h-[84px] " />
                      <div className="flex flex-col ">
                        <h2 className="font-semibold text-l text-black font">{product.title}</h2>
                        <span className="font-normal text-base">{product.size}</span>
                        <span className="mt-2 text-xl text-indigo-950 font-bold">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          </div>
          <div className="bg-gradient-to-l from-blue-800 to-indigo-950 rounded-[40px] h-[150px] w-[450px] flex items-center justify-center gap-4 py-10">
            <div className="flex flex-col">
              <span className="mt-2 text-xl text-white font-bold">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
              <span className="font-normal text-base text-zinc-500">Quantidade: {quanty} itens</span>
            </div>
            <button className="h-[58px] w-[209px] bg-white rounded-[20px] font-semibold">Finalizar compra</button>
          </div>
        </div>
      </div>
    )
  }
}