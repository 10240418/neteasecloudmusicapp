import axios from  'axios';
let service = axios.create({
    baseURL:"http://localhost:11234/",
    timeout:30000
})
export default service