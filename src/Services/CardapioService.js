import TokenService from "./TokenService";
import UserService from "./UserService";

const tokenService = new TokenService();

export default class CardapioService extends UserService {

    constructor(loginURL) {
        super(loginURL);
    }

    async getCardapio(id) {
        try {
            const response = await this.axios.get(`/restaurantes/cardapios/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenService.getToken()}`
                }
            });
            
            if(response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao buscar restaurantes');
        }

        return [];
    }
}