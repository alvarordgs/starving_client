import Produto from "../../Components/Home/Produto/Produto";
import CardapioService from "../../Services/CardapioService";
import { ContainerProdutos, ListaProdutos, RestauranteHeader, ContainerLoading } from "./restaurantePageStyle";
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { CACHE_KEY_RESTAURANTE, REACT_APP_LOGIN_API } from '../../Utilities/constantes'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cardapioService = new CardapioService(REACT_APP_LOGIN_API);

const RestaurantePage = () => {
    const { id } = useParams();
    const [restaurante, setRestaurante] = useState({});
    const [cardapio, setCardapio] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const dataRestaurantesCached = JSON.parse(localStorage.getItem(CACHE_KEY_RESTAURANTE));
        if (dataRestaurantesCached) {
            setRestaurante(dataRestaurantesCached.find((restaurante) => (restaurante.id).toString() === id));
        }
    }, [id])

    useEffect(() => {
        async function fetchCardapio() {
            try {
                const response = await cardapioService.getCardapio(id);
                setCardapio(response);
                setCarregando(false);
            } catch (error) {
                console.error(error);
                throw new Error('Não foi possível buscar os restaurantes.');
            }
        }

        fetchCardapio();

    }, [id]);

    return (
        <>
            {carregando ? (
                <ContainerLoading>
                    <p>Carregando...</p>
                </ContainerLoading>
            ) : (
                <ContainerProdutos>
                    <RestauranteHeader>
                        <h1>{restaurante.nome}</h1>
                        <ul>
                            <li>
                                <MdLocalPhone style={{ fontSize: "1.25rem" }} />
                                <span>{restaurante.telefone}</span>
                            </li>
                            <li>
                                <MdLocationOn style={{ fontSize: "1.25rem" }} />
                                <span>{restaurante.rua}, {restaurante.numero} - {restaurante.bairro}</span>
                            </li>
                        </ul>
                    </RestauranteHeader>
                    <ListaProdutos>
                        {cardapio.map((produto) => (
                            <Produto key={produto.id} produto={produto} />
                        ))}
                    </ListaProdutos>
                </ContainerProdutos>
            )}
        </>
    )
}

export default RestaurantePage;