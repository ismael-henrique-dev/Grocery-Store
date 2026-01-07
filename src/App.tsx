import { Home } from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './contexts/CartContext'
import { FiltersProvider } from './contexts/FiltersContext'

function App() {
  return (
    <FiltersProvider>
      <CartProvider>
        <ToastContainer
          position='bottom-center'
          autoClose={3000}
          pauseOnHover={false}
          toastClassName='sm:w-[320px] w-[300px] m-auto mb-5 sm:m-[-10px] rounded'
        />
        <Home />
      </CartProvider>
    </FiltersProvider>
  )
}

export default App
