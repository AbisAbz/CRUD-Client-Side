import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AdminLogin} from '../../../Api/AdminApi'


import {
  Card,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
 
export default function Login() {
const navigate = useNavigate()
const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email,password );

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hello minhaj....");
    try {
        if (!email) {
            console.log('Email is required');
        } else if (!password) {
            console.log('Password is required');
        } else {
            const value = { email, password };
            console.log(value);
            const response = await AdminLogin(value);
            console.log(response)

            if (response.status === 200 && response.data.status) { 
                localStorage.setItem('admintoken', response.data.token);
                navigate('/admin');
            } else {
                console.log('Login failed:', response.data.alert);
            }
        }
    } catch (error) {
        console.log('An error occurred:', error.message);
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