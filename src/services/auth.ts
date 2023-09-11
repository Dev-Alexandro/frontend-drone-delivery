import Cookies from 'js-cookie';
import { AuthApi } from '@/services/api';


export  const auth = async function () {

    try {

        const data = { username: process.env.NEXT_API_USERNAME, password: process.env.NEXT_API_PASSWORD };
        const response = await AuthApi.post('auth', data);

        if (response.status === 200) {
            const token = response.data?.token;

            if (token) {
                Cookies.remove("TOKEN_JWT");
                Cookies.set('TOKEN_JWT', token);
                return true;
            }
        }

        console.error('Erro ao autenticar:', response.status);
        return false;
    } catch (error) {


        return false;

    }


}





