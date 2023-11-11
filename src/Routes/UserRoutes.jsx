import { Routes, Route } from 'react-router-dom';
import UserPublic from './UserPublic';
import UserProtect from './UserProtect';
import React from 'react';
import SignUp from '../Pages/User/Signup/signup';
import Home from '../Pages/User/Home/home';
import Login from '../Pages/User/Login/login'; // Import Login as named export (if it's not the default export)
import { ProfileCard } from '../Pages/User/Profile/profile'; // Import ProfileCard as named export

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path='/signup' element={<UserPublic> <SignUp /> </UserPublic>} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<UserPublic> <Login /> </UserPublic>} />
        <Route exact path='/profile' element={<UserProtect> <ProfileCard /> </UserProtect>} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
