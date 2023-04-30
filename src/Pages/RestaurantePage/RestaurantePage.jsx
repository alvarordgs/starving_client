import Produto from "../../Components/Home/Produto/Produto";
import { ContainerProdutos, ListaProdutos, RestauranteHeader } from "./restaurantePageStyle";
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { CACHE_KEY_RESTAURANTE } from '../../Utilities/constantes'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RestaurantePage = () => {
    const { id } = useParams();
    const [restaurante, setRestaurante] = useState({});

    useEffect(() => {
        const dataRestaurantesCached = JSON.parse(localStorage.getItem(CACHE_KEY_RESTAURANTE));
        if(dataRestaurantesCached) {
            setRestaurante(dataRestaurantesCached.find( (restaurante) => (restaurante.id).toString() === id));
        }
    }, [id])

    return (
        <ContainerProdutos>
            <RestauranteHeader>
                <h1>{restaurante.nome}</h1>
                <ul>
                    <li>
                        <MdLocalPhone style={{fontSize: "1.25rem"}}/>
                        <span>{restaurante.telefone}</span>
                    </li>
                    <li>
                        <MdLocationOn style={{fontSize: "1.25rem"}}/>
                        <span>{restaurante.rua}, {restaurante.numero} - {restaurante.bairro}</span>
                    </li>
                </ul>
            </RestauranteHeader>
            <ListaProdutos>
                <Produto/>
            </ListaProdutos>
        </ContainerProdutos>
    )
}

export default RestaurantePage;