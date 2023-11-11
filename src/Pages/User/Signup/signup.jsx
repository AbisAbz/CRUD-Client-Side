import './signup.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegUser } from '../../../Api/UserApi';
import { setUserDetails } from '../../../Redux/UserSlice';

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = value;

    try {
      if (!email) {
        console.log('Email is required');
      } else if (!password) {
        console.log('Password is required');
      } else {
        console.log("hello adhil.....");
        const response = await RegUser(value);
        if (response.data.status) {
          console.log("hello anas......");
          localStorage.setItem("token", response.data.token);
          dispatch(setUserDetails({
            id: response.data.user._id,
            name: response.data.user.name,
            email: response.data.user.email,
            mobile: response.data.user.mobile,
          }));
          navigate('/');
        }
      } 
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='container'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          <strong>Sign Up</strong>
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <div className="mx-auto">
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                type='name'
                onChange={(e) => { setValue({ ...value, name: e.target.value }) }}
                placeholder='Enter Your Name'
                label="Name"
              />

              <Input
                size="lg"
                type='email'
                onChange={(e) => { setValue({ ...value, email: e.target.value }) }}
                placeholder='Enter Your Email'
                label="Email"
              />

              <Input
                size="lg"
                type='mobile'
                onChange={(e) => { setValue({ ...value, mobile: e.target.value }) }}
                placeholder='Enter your Number'
                label="Contact"
                inputMode='numeric'
              />

              <Input
                type="password"
                onChange={(e) => { setValue({ ...value, password: e.target.value }) }}
                placeholder='Strong Password'
                size="lg"
                label="Password"
              />
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
            <Button className="mt-6" fullWidth type='submit'>
              Register
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

export default SignUp;
