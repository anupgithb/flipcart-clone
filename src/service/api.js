import axios from 'axios';
const url = 'https://flipcart-clone-exact-backend.onrender.com';

export const authenticateSignup = async(user) =>{
    try{
        return await axios.post(`${url}/signup`, user)
    }catch(error)
    {
        console.log("Error while calling api",error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}

export const payUsingPaytm = async (data)=>
{
    try{
       let response=await axios.post(`${url}/payment`,data);
       return response.data;
    }catch(error)
    {
        console.log("error while calling api");
    }
}