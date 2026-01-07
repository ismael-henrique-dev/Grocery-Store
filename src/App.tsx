import { Home } from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        pauseOnHover={false}
        toastClassName='sm:w-[320px] w-[300px] m-auto mb-5 sm:m-[-10px] rounded'
      />
      <Home />
    </CartProvider>
  )
}

export default App
