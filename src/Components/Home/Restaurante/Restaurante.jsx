import { BoxRestaurante, BoxImgRestaurante, BoxRestauranteInfo } from "./restauranteStyle";
import { FaStar, FaRegClock } from 'react-icons/fa';
import { RiEBike2Line } from 'react-icons/ri';

const Restaurante = () => {
    return (
        <BoxRestaurante>
            <BoxImgRestaurante>
                <img src="./assets/imgs/restaurante-teste.jpg" alt="" />
            </BoxImgRestaurante>
            <BoxRestauranteInfo>
                <h4>Nome Restaurante</h4>
                <p>Descrição Restaurante</p>
                <ul>
                    <li>
                        <FaStar/>
                        <span>4,5</span>
                    </li>
                    <li>
                        <FaRegClock/>
                        <span>35-45 min</span>
                    </li>
                    <li>
                        <RiEBike2Line/>
                        <span>R$ 4,99</span>
                    </li>
                </ul>
            </BoxRestauranteInfo>
        </BoxRestaurante>
    )
}

export default Restaurante;