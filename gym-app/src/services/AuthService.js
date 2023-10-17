import { API_URL } from "../../../rental-web/src/services/API_URL";
import axios from 'axios';
import auth_header from "./AuthHeader";



class AuthService
{
    login(username,password)
    {
        return 
        axios.post(API_URL+"generate-token",{username,password})
        .then(response=>
            {
                if(response.data.token)
                {
                    localStorage.setItem("token",JSON.stringify(response.data))
                }
                return response.data
            });

    }
    logout()
    {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    getCurrentUser()
    {
        return JSON.parse(localStorage.getItem("token"));
    }

    getCurrentUser1()
    {
        return axios.get(API_URL+"current-user",{headers: auth_header()})
        .then(response=>
            {
                localStorage.setItem("user",JSON.stringify(response.data))
                return response.data
            })
    }
    isLoggedIn()
    {
        let tokenStr = localStorage.getItem("token");
        if(tokenStr == undefined || tokenStr ==null || tokenStr =='')
        {
            return false;
        }
        else{
            return true;
        }
    }



    getUserRole()
    {
        const user=localStorage.getItem("user");
        return JSON.parse(user);
    }


}export default new  AuthService();
