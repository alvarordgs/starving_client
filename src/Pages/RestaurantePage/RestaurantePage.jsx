import { ContainerProdutos, ListaProdutos, RestauranteHeader } from "./restaurantePageStyle";
import Produto from "../../Components/Home/Produto/Produto";
import { MdLocalPhone, MdLocationOn } from 'react-icons/md';

const RestaurantePage = () => {
    return (
        <ContainerProdutos>
            <RestauranteHeader>
                <h1>Nome restaurante</h1>
                <ul>
                    <li>
                        <MdLocalPhone style={{fontSize: "1.25rem"}}/>
                        <span>(34) 3333-2222</span>
                    </li>
                    <li>
                        <MdLocationOn style={{fontSize: "1.25rem"}}/>
                        <span>R. São João, 34 - Jd. Andaluzia</span>
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