import { BoxRestaurante, BoxImgRestaurante, BoxRestauranteInfo } from "./restauranteStyle";
import { FaStar, FaRegClock } from 'react-icons/fa';
import { RiEBike2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { REACT_APP_LOGIN_API } from './../../../Utilities/constantes'

// eslint-disable-next-line react/prop-types
const Restaurante = ({ restaurante }) => {

    return (
        // eslint-disable-next-line react/prop-types
        <Link to={`/restaurantes/${restaurante.id}`}>
            <BoxRestaurante>
                <BoxImgRestaurante>
                    <img src="./assets/imgs/restaurante-teste.jpg" alt="" />
                </BoxImgRestaurante>
                <BoxRestauranteInfo>
                    <h4>{restaurante.nome}</h4>
                    <p>{restaurante.descricao}</p>
                    <ul>
                        <li>
                            <FaStar style={{ color: "red" }} />
                            <span>4,5</span>
                        </li>
                        <li>
                            <FaRegClock style={{ color: "red" }} />
                            <span>35-45 min</span>
                        </li>
                        <li>
                            <RiEBike2Line style={{ color: "red" }} />
                            <span>R$ 4,99</span>
                        </li>
                    </ul>
                </BoxRestauranteInfo>
            </BoxRestaurante>
        </Link>
    )
}

export default Restaurante;