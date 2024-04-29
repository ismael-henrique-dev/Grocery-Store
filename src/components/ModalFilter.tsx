import { ChevronDown, X } from "lucide-react"


export const ModalFilter = ({open, close, selectFilterPrice, handleSelectChange}:any) => {
  if (open) {
    return (
     
        <div className="bg-white rounded-lg sm:w-[455px] w-full md:h-auto h-[100%] z-50 absolute p-6 top-0 sm:top-[47%] sm:right-[380px] transform translate-x-3/4 md:-translate-y-1/2 flex items-center justify-center flex-col overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <section className="w-full flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold ">Filtrar por:</h1>   
              <button onClick={close} className="cursor-pointer">
                <X />
              </button>
            </div>
            <div>
              <h3>Selecione uma opção para filtar produtos</h3>
              <hr className="bg-black h-[2px] my-3"/>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold ">Categoria</h2>
              {/* Colocar essa div */}
              <div className="relative mb-3" >
                <select name="categoria" id="categoria" className="appearance-none pr-8 bg-zinc-200 w-full rounded-lg h-8 outline-none indent-3">
                  <option value="" className="appearance-none cursor-pointer">Nenhum</option>
                  <option value="">Bebidas</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold ">Preço</h2>
              <div className="relative  mb-3" >
                <select name="categoria" id="categoria" className="appearance-none pr-8 bg-zinc-200 w-full rounded-lg h-8 outline-none indent-3" onChange={handleSelectChange}>
                  <option value="Nenhum" className="appearance-none cursor-pointer">Nenhum</option>
                  <option value="Maior">Maior</option>
                  <option value="Menor">Menor</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 text-white h-10 w-28 rounded-xl text-sm font-semibold" onClick={selectFilterPrice}>Aplicar</button>
            </div>
          </section>
        </div>
      
    )
  }
}