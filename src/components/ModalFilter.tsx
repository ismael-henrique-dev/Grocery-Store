import { ChevronDown, X } from "lucide-react"


export const ModalFilter = ({open, close, handleSelectChangePrice, handleSelectChangeCategory, handleFilterOptions}:any) => {
  if (open) {
    return (
     
        <div className="bg-white rounded-lg sm:w-[455px] h-[350px] w-[90%] md:h-auto z-50 absolute p-6 sm:top-[47%] top-[12%] sm:right-[380px] right-[5%] transform sm:translate-x-3/4 sm:-translate-y-1/2 flex items-center justify-center flex-col overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
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
              <div className="relative mb-3" >
                <select name="categoria" id="categoria" className="appearance-none pr-8 bg-zinc-200 w-full rounded-lg h-8 outline-none indent-3" onChange={handleSelectChangeCategory}>
                  <option value="Nenhuma" className="appearance-none cursor-pointer">Nenhuma</option>
                  <option value="Bebidas">Bebidas</option>
                  <option value="Vegetais">Vegetais</option>
                  <option value="Laticínios">Laticínios</option>
                  <option value="Carnes e Aves">Carnes e Aves</option>
                  <option value="Pães e Massas">Pães e Massas</option>
                  <option value="Snacks e Petiscos">Snacks e Petiscos</option>
                  <option value="Grãos e Cereais">Grãos e Cereais</option>
                  <option value="Enlatados e Conservas">Enlatados e Conservas</option>
                  <option value="Frutas">Frutas</option>
                  <option value="Peixes e Frutos do Mar">Peixes e Frutos do Mar</option>
                  <option value="Molhos e Condimentos">Molhos e Condimentos</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-base font-semibold ">Preço</h2>
              <div className="relative  mb-3" >
                <select name="categoria" id="categoria" className="appearance-none pr-8 bg-zinc-200 w-full rounded-lg h-8 outline-none indent-3" onChange={handleSelectChangePrice}>
                  <option value="Nenhum">Nenhum</option>
                  <option value="Maior">Maior</option>
                  <option value="Menor">Menor</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button className="bg-gradient-to-l mt-4 from-blue-800 to-indigo-950 text-white h-10 w-28 rounded-xl text-sm font-semibold" onClick={handleFilterOptions}>Aplicar</button>
            </div>
          </section>
        </div>
      
    )
  }
}