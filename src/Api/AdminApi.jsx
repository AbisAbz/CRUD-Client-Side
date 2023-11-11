import { adminApi } from "../Utils/Api";

export async function AdminLogin(details){
    try {
        console.log("hello cris......");
        const data = await adminApi.post('/login', details)
        console.log("sui..." + data);
        return data
    } catch (error) {
        console.log(error.message);
    }
}



export async function UserList(){
    try {
        const data = await adminApi.get('/getuserlist')
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function addUser(Credentials){
    try {
        const data = await adminApi.post('/addUser',Credentials)
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function DeleteUser(userid){
    try {
        const data = await adminApi.post(`/deleteUser/${userid}`)
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function EditUserData(userId){
    try {
        const data = await adminApi.get(`/editUser/${userId}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function UpdateUser(id, updateUserData) {
    try {
        const { name, email, mobile } = updateUserData; 
        const data = await adminApi.post('/updateuser', { id, name, email, mobile }); 
        return data;
    } catch (err) {
        console.log(err);
    }
}
