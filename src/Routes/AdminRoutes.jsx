import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from '../Pages/Admin/AdminLogin/login'
import Home from '../Pages/Admin/AdminHome/home'
import AdminPublic from '../Routes/AdminPublic'
import AdminProtect from '../Routes/AdminProtect'
import  EditUser  from '../Pages/Admin/EditUser'
import AddUser from '../Pages/Admin/AddUser'

function AdminRoutes() {
  return (
    <div>
    <Routes>
    <Route exact path='/login' element={<AdminPublic> <Login /> </AdminPublic>} />
    <Route exact path='/' element={<AdminProtect> <Home /> </AdminProtect>} />
    <Route exact path='/addUser' element={<AdminProtect> <AddUser/></AdminProtect> } />
    <Route exact path='/edituser/:id' element={<AdminProtect> <EditUser /> </AdminProtect> } />

    </Routes>

    </div>
  )
}

export default AdminRoutes