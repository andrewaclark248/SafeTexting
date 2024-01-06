import axios from 'axios'
import env from "react-dotenv";

console.log("api url = ", env.SAFE_TEXTING_API)
axios.defaults.baseURL = env.SAFE_TEXTING_API
//axios.defaults.headers.common['Authorization'] = 


