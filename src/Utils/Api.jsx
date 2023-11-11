import axios from 'axios';


export const userApi = axios.create({
    baseURL : 'http://localhost:4000'
})

export const adminApi = axios.create({
    baseURL : 'http://localhost:4000/admin'
})

