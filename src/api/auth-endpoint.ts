import axios from 'axios';
import { AUTH_BASE_URL } from '../utils/api-utils';

export const registerEndpoint = (payload: any) => {
    return axios.post(`${AUTH_BASE_URL}/api/auth/register`,payload);
}