
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"


export const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
      {/* <Modal open={openModal} close={() => {setOpenModal(!openModal)}} /> */}
    </>
  )
}