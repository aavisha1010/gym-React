



export default function auth_header()\
{
    const user=JSON.parse(localStorage.getItem("token"));

    if(user && user.token)
    {
        return{
            "Authorization": 'Bearer '+user.token
        };
    }
    else{
        return{
            
        }
    }


}