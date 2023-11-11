import React,{ useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UpdateUser ,EditUserData} from '../../Api/AdminApi'

import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

function EditUser() {
    const [value,setValue] = useState({
        name:'',
        email:'',
        mobile:''
    })
    const navigate=useNavigate()
    const{id} = useParams()
    const GenerateError=(err)=>{
        toast.error(err,{
            position:'top-center',
            theme:'colored',
            autoClose:2000
        })
    }

    useEffect(()=>{
        const userData = async()=>{
            try {
                const response = await EditUserData(id)
                
                setValue({
                    name:response.data.userData.name,
                    email:response.data.userData.email,
                    mobile:response.data.userData.mobile
                })
            } catch (error) {
                
            }
        }
        userData()
       },[id])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            if(!value.name){
                console.log("Name is required");
                GenerateError("Name is required")
            }else if(!value.email){
                console.log("Email is required");
                GenerateError("Email is required")
            }else if(!value.mobile){
                console.log("Number is required");
                GenerateError("Number is required")
            }else{
                const response = await UpdateUser(id,value)
                if(response.data.status){
                    toast.success(response.data.alert)
                    navigate('/admin/')
                }else{
                    toast.error(response.data.alert)                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className='container'>
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        <strong>USER EDIT</strong>
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to edit.
      </Typography>
      <div className="mx-auto">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
          <Input
  size="lg"
  type="text"
  value={value.name}
  onChange={(e) => {
    setValue({ ...value, name: e.target.value });
  }}
  placeholder="Enter your Name"
  label="Name"
  id="name"
  name="name"
/>

<Input
  size="lg"
  type="email"
  value={value.email}
  onChange={(e) => {
    setValue({ ...value, email: e.target.value });
  }}
  placeholder="Enter your Email"
  label="Email"
  id="email"
  name="email" // Use correct property name: "email"
/>

<Input
  size="lg"
  type="number"
  value={value.mobile}
  onChange={(e) => {
    setValue({ ...value, mobile: e.target.value });
  }}
  placeholder="Enter your Number"
  label="Contact"
  id="mobile"
  name="mobile" // Use correct property name: "mobile"
/>



           
          </div>
         
          <Button className="mt-6" fullWidth type='submit'>
            SAVE
          </Button>
         
        </form>
      </div>
    </Card>
  </div>
);
}

export default EditUser
