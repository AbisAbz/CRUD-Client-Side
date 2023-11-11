import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { UserLogin } from '../../../Api/UserApi' 
import { setUserDetails } from '../../../Redux/UserSlice';

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email,password );

  

  const handleSubmit = async(e) => {
   e.preventDefault()
  
   console.log("hello minhaj....");
   try {
    if(!email){
      console.log('Email is required');

    }else if(!password){
      console.log('Password is required');
    }else{
      const value = {email,password}
      const response = await UserLogin(value)
      console.log(response.data,'hii');
      if(response.data.status){
        console.log("hello abis.....");
        localStorage.setItem("token",response.data.token)
        dispatch(setUserDetails({
          id:response.data.user._id,
          name:response.data.user.name,
          email:response.data.user.email,
          mobile:response.data.user.mobile,
        }))
        navigate('/')
      }else{
        alert(response.data.alert)
      }
    }
   } catch (error) {
     console.log(error.message);
   }
  }

    return (
        <div className='container'>

      <Card color="transparent" shadow={false}>
        
        <Typography variant="h4" color="blue-gray"  >
         <strong> Sign Up</strong>
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <div className="mx-auto">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
          <div className="mb-4 flex flex-col gap-6">
            

            <Input size="lg" 
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
            label="Email" />
          
           

            <Input type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Strong Password'
            size="lg" 
            label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button onClick={handleSubmit} className="mt-6" fullWidth >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
        </div>
      </Card>
       </div>
    );
  }