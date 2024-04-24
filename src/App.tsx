import { useState } from "react"
import { Modal } from "./components/Modal"
import { ProductList } from "./components/ProductList"

function App() {

  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
     
      <button onClick={() => {setOpenModal(true)}}>Abrir Modal </button>
      <Modal open={openModal} close={() => {setOpenModal(!openModal)}} />
      <ProductList />
      
    </>
  )
}

export default App
