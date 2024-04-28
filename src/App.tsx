import { Home } from "./pages/Home"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        pauseOnHover={false}
        toastClassName="sm:w-[320px] w-[300px] m-auto mb-5 sm:m-[-10px] rounded"
      />
      <Home toast={toast} />
    </>
  )
}

export default App
