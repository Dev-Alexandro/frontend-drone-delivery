import Cookies from 'js-cookie';
import { AuthApi } from '@/services/api';


export const calcDelivery = async function (start_point: string, pickup_point: string, deliver_point: string) {

    try {

        const TOKEN = Cookies.get("TOKEN_JWT");
        const response = await AuthApi.get(`/delivery/calcDelivery/${start_point}/${pickup_point}/${deliver_point}`, { headers: { Authorization: `Bearer ${TOKEN}` } });
        if (response.status === 200) {


            return response.data;
        }

        console.error('Erro ao autenticar:', response.status);
        return false;
    } catch (error) {


        return false;

    }


}





