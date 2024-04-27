import { Search, ShoppingCart } from "lucide-react"
import logo from "../assets/logo.png"
import { useState } from "react"
import { totalProducts } from "./Modal"

export const Header = ({setSearch, setOpenModal}:any) => {

  const [value, setValue] = useState('')

  setSearch(value)

  const handleVisible = () => {
    setOpenModal(true)
  }

  return (
    <>
      <header className="h-[104px] w-full flex items-center justify-between bg-zinc-200">
        <div className="flex items-center justify-center">
          <img src={logo} className="sm:w-[80px]  mt-3 " />
          <section className="sm:flex items-baseline hidden">
            <h1 className="text-indigo-950 font-bold text-2xl">Grocery</h1>
            <h3 className="font-semibold text-sm mt-1">Store</h3>
          </section>
        </div>
        <section className="flex">
          <div className="flex items-center justify-start bg-white sm:w-[30vw] w-[50vw] h-10 rounded-lg p-[10px]">
            <Search className="size-5 mx-[10px] text-zinc-400"/>
            <input type="value" placeholder="Buscar alimentos" className="w-full text-zinc-400 outline-none" value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>
          <div className="flex sm:mx-10 mx-5 cursor-pointer" onClick={handleVisible}>
            <ShoppingCart className="size-10"/>
            <span className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 size-5 flex items-center justify-center text-white rounded-lg relative bottom-4 right-4">{totalProducts}</span>
          </div>
        </section>
      </header>
    </>
  )
}