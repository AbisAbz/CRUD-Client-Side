
import axios from 'axios';


const userApi = axios.create({
    baseURL : 'http://localhost:4000/'
})

export async function RegUser(credentials){
    try {
       
        const data = await userApi.post('/signup',credentials)
        return data
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function UserLogin(details){
    try {
      
        const data = await userApi.post('/login',details)
        return data
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function ProfileUpdation(id, photo) {
    try {
      const formData = new FormData();
      formData.append("image", photo);
      formData.append("userId", id);
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      };
  
      const response = await userApi.post("/uploadimg", formData, config);
      return response;
    } catch (error) {
      console.log("Error uploading image:", error.message);
      throw error; // Re-throw the error for proper error handling in handleSubmit
    }
  }