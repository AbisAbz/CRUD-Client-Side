import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import './App.css'

function App() {
  

  return (
   <div>
    
    <BrowserRouter>
    <Routes>
      
    <Route path='/*' element={<UserRoutes/>} />
    <Route path='/admin/*' element={<AdminRoutes />} />

    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
