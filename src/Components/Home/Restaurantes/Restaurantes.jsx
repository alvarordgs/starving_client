import { ContainerRestauntes, ListaRestaurantes } from './restaurantesStyle';
import Restaurante from '../Restaurante/Restaurante';

const Restaurantes = () => {
    return (
        <ContainerRestauntes>
            <h2>Restaurantes</h2>
            <ListaRestaurantes>
                <Restaurante/>
            </ListaRestaurantes>
        </ContainerRestauntes>
    )
}

export default Restaurantes;