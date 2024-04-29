import { Filter } from "lucide-react"

export const FilterSearch = ({filteredProducts, setOpenModal}:any) => {

  const handleVisible = () => {
    setOpenModal(true)
  }

  return (
   <section className="h-16 w-full flex items-baseline justify-between px-10">
    {filteredProducts.length === 50 ? (
      <h1 className="font-bold text-2xl text-black">Todos os produtos</h1>
    ): (
      <div className="flex items-baseline gap-1">
        <h1 className="font-bold text-2xl text-black">Resultado</h1>
        <span className="font-normal text-xs ">({filteredProducts.length}) produtos</span>
      </div>
    )}
    <button onClick={handleVisible} 
    className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 text-white size-10 flex items-center justify-center rounded-xl ">
      <Filter className="size-5"/>
    </button>
   </section>
  )
}