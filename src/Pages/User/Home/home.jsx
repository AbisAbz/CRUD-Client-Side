import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import './home.css'
import {LogoutDetails} from '../../../Redux/UserSlice'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

 
 function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {name} = useSelector(state => state.user)
  console.log(name);

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"  id="hme-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4" color="amber">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <strong>HOME</strong>
            
          </Typography>
          <div className="flex items-center gap-4">

          {localStorage.getItem('token') ? (
            <>
          <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              id="btn-pro"
              onClick={() => navigate('/profile')}>
             
              <span>{name} </span>
              
            </Button>

            


            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={handleLogout} 
            >
              <span>Logout</span>
            </Button>


            </>

          



              ) : (

                <>
            
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={() => navigate('/login')}
            >
              <span>Login</span>
            </Button>

             <Button
             variant="gradient"
             size="sm"
           className="hidden lg:inline-block"
             onClick={()=>navigate('/signup')}>
            <span>Signup</span>
             </Button>

</>


)}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
      <br />
     
    <div className="hme-card flex">
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://media.istockphoto.com/id/520840182/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?b=1&s=612x612&w=0&k=20&c=0x8ND8jNxz0hsPcDqF0t6r71AEET0QRf41KCU7alz7Y="
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Red Fort
        </Typography>
        <Typography>
        The Red Fort, also known as "Lal Qila" in Hindi, is a historic fort located
         in the city of Delhi, India. It is one of the most iconic landmarks in the 
         country and holds great historical and cultural significance.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <div className="mx-2"></div>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/9410840/pexels-photo-9410840.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Taj Mahal
        </Typography>
        <Typography>
        The Taj Mahal is one of the most famous and iconic landmarks
         in the world. Located in Agra, India, it is renowned for its 
         stunning architecture, historical significance, and romantic symbolism.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
     
    <div className="mx-2"></div>
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/2989625/pexels-photo-2989625.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Jama Masjid
        </Typography>
        <Typography>
        The Jama Masjid in Agra, also known as the "Jami Masjid" or "Friday Mosque,"
         is one of the most significant and historically important mosques in the city
          of Agra, Uttar Pradesh, India. 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
      </div>

      <br />

      <div className="hme-card flex">
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Qutub Minar
        </Typography>
        <Typography>
        The Qutub Minar is a historic monument located in Delhi, India. 
        It is one of the most iconic and well-preserved examples of early 
        Indo-Islamic architecture and is recognized as a UNESCO World Heritage Site.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    <div className="mx-2"></div>

    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/14687500/pexels-photo-14687500.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        India Gate
        </Typography>
        <Typography>
        The India Gate is a prominent war memorial and an iconic monument
         located in the heart of New Delhi, India. It holds great historical
          and cultural significance and is one of the most visited landmarks in the country.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
     
    <div className="mx-2"></div>
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Hawa Mahal
        </Typography>
        <Typography>
        Hawa Mahal, also known as the "Palace of the Winds," is a famous historical and 
        architectural landmark located in the city of Jaipur, 
        Rajasthan, India. It is an iconic symbol of Jaipur and is 
        renowned for its unique and intricate design.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
      </div>
      
    </div>
  
  );
}




export default Home