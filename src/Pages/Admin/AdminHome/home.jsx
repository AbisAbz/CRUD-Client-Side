import "./adminHome.css"
import React, { useEffect, useState } from "react";
import {UserList} from '../../../Api/AdminApi'
import {LogoutDetails}  from '../../../Redux/UserSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {DeleteUser}  from '../../../Api/AdminApi'



import {
  Navbar,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
 
export default function StickyNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [searchInput,setSearchInput] = useState('')



    useEffect(()=>{
        UserList().then(response=>{
            const allUsers = response.data.data
            setUsers(allUsers)
        }).catch(error=>{
            console.error(error,"Error receiving users data");
        })

    },[])

    const handleDelete = async(userid)=>{
        DeleteUser(userid).then(()=>{
            setUsers(users.filter(user=>user._id != userid))
            console.log("Deleted successfully");

        }).catch(error=>console.error(error))
    }

    const handleLogout = async() => {
       localStorage.removeItem('admintoken')
        dispatch(LogoutDetails({
            id : "",
            name : "",
            email : "",
            mobile :"",
            image : "",
        }))
        navigate('/admin/login')
    }

    const handleSearchInputChange = (e)=>{
        setSearchInput(e.target.value)
    }
    

    const filteredUsers = users.filter(user=>
        user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.toLowerCase())
    )
    console.log(filteredUsers);

 
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="dashboard">
    <div className="-m-6 ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">

        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <strong>DASHBOARD</strong>
            
            
          </Typography>
          <div className="flex items-center gap-4">
           
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={handleLogout}
            >
              <span>Logout</span>
            </Button>
            <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="black"
            label="Type here..."
            className="pr-20"
            onChange={handleSearchInputChange}
            value={searchInput}
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="blue"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
          
          </div>
        </div>
       
      </Navbar>
       
      <br />

     <div>
     <button
  className="bg-gradient-to-r from-black via-black to-black hover:bg-black text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
  onClick={()=>navigate('/admin/addUser')}>
  ADD USER
</button>

     </div>


     
    </div>
    <br />

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
            </tr>
        </thead>
        <tbody>
                {filteredUsers.map((user,i) => (
                    <tr key={user._id}>
                        
                        <td>{i+1} </td>
                        <td>{user._id} </td>
                        <td>{user.name} </td>
                        <td>{user.email}</td>
                        <td >{user.mobile} </td>
                        <td><button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 ml-2" onClick={() => navigate(`/admin/edituser/${user._id}`)}> Edit </button> </td>
                        <td><button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 ml-2 "  onClick={()=>handleDelete(user._id)}> Delete </button> </td>

                        
                    </tr>
                     ))}
                </tbody>
    </table>

    </div>
  );
}