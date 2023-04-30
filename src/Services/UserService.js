import axios from "axios";
import TokenService from './TokenService';

const tokenService = new TokenService();
export default class UserService {
    constructor(loginURL) {
        this.axios = axios.create({
            baseURL: loginURL
        })
    }

    async login(dados) {
        try {
            const { data } = await this.axios.post('/login', dados);
            const { user, access_token, token_type } = data;

            tokenService.setToken(access_token)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.name)
            localStorage.setItem('token_type', token_type)
            
            return user;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    isUserAuthenticated() {
        return !!tokenService.getToken();
    }

    async logout() {
        tokenService.removeToken();
        localStorage.removeItem('token');
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        localStorage.removeItem('token_type')
    }
}