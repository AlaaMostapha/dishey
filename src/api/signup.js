const axios = require('axios')
const url ='http://localhost:4005/users';

export function CreateUser(data){
    axios.post(url, data)
    return "sucess"
}