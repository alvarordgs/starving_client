import { ContainerRestauntes, ListaRestaurantes } from './restaurantesStyle';
import Restaurante from '../Restaurante/Restaurante';
import { Link } from 'react-router-dom';

const Restaurantes = () => {
    return (
        <ContainerRestauntes>
            <h2>Restaurantes</h2>
            <ListaRestaurantes>
                <Link to={`/restaurantes/${1}`}>
                    <Restaurante key={1}/>
                </Link>
            </ListaRestaurantes>
        </ContainerRestauntes>
    )
}

export default Restaurantes;