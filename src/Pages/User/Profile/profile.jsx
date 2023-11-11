import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import React, { useState } from "react";
import { setUserDetails } from "../../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProfileUpdation } from "../../../Api/UserApi";
import { LogoutDetails } from "../../../Redux/UserSlice";
import {useNavigate} from 'react-router-dom'

export function ProfileCard() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);

  const [photo, setPhoto] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await ProfileUpdation(user.id, photo);
  
      if (response.status === 200) {
        if (response.data.updated) {
          console.log(response);
          dispatch(
            setUserDetails({
              id: user.id,
              name: response.data.data.name,
              email: response.data.data.email,
              mobile: response.data.data.mobile,
              image: response.data.data.Image,
            })
          );
        } else {
          console.log("Update failed:", response.data);
        }
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };
  

  const handleLogout = async()=>{
    localStorage.removeItem('token')
    dispatch(LogoutDetails({ 
   id:'',
    name:'',
    email:'',
    mobile:''
  }))
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <Card className="w-96 bg-white shadow-lg rounded-lg">
      <CardHeader floated={false} className="h-80">
        <img
          src={user.image ? `/images/${user.image}` : "https://media.istockphoto.com/id/1371332055/photo/mysterious-man.jpg?s=612x612&w=0&k=20&c=bDaJeienEcshEL9ZF3CNz46ndRRUqQNDAQ2teyw86MY="}
          alt="profile-picture"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardBody className="text-center p-4">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-xl font-bold">
        <strong> {user.name}</strong>  
        </Typography>
        <Typography color="blue-gray" className="font-medium text-lg">
          Email: {user.email}
        </Typography>
        <Typography color="blue-gray" className="font-medium text-lg">
          Mobile: {user.mobile}
        </Typography>
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} className="mt-4" />
      </CardBody>
      <div className="flex justify-center p-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Update Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 ml-4 rounded-full transition duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    </Card>
  </div>
  
  );
}
