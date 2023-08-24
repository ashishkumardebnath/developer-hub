
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './pages/Routes/Routes/routes'

function App() {

  return (
    <div className='container'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
