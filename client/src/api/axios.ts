import axios from 'axios'
import env from "react-dotenv";

axios.defaults.baseURL = env.SAFE_TEXTING_API
//axios.defaults.headers.common['Authorization'] = 

