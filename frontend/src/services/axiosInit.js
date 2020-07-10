import axios from 'axios'


let Service = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000
})

Service.interceptors.request.use((request) => {
    try{
        request.headers['Authorization'] = 'Bearer ' +localStorage.getItem('token');
    }
    catch(e){
        console.error(e);
    }
    return request;
 });


export default Service