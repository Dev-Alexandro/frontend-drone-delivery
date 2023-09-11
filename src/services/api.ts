import axios from 'axios';
import Cookies from 'js-cookie';


const TOKEN = { JWT: Cookies.get("TOKEN_JWT") };


export const AuthApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

