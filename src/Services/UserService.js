import axios from "axios";

export default class UserService {
    constructor(loginURL) {
        this.axios = axios.create({
            baseURL: loginURL
        })
    }

    async login(dados) {
        const { data } = await this.axios.post('/login', dados);
        console.log(data.token)
        if(data) {
            /*localStorage.setItem('email', data.user.email)
            localStorage.setItem('email', data.user.email)
            */
            localStorage.setItem('token', data.token)
            
            return true;
        }

        return;
    }

    usuarioAutenticado() {
        return localStorage.getItem('token') !== undefined ? true : false;
    }
}