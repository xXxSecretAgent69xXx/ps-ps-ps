import axios from 'axios'


let Service = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000
})


export default Service