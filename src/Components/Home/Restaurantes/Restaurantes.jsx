import { ContainerRestauntes, ListaRestaurantes, ContainerLoading } from './restaurantesStyle';
import { useEffect, useState } from 'react';
import { REACT_APP_LOGIN_API, CACHE_KEY_RESTAURANTE } from '../../../Utilities/constantes';
import Restaurante from '../Restaurante/Restaurante';
import RestauranteService from './../../../Services/RestauranteService'

const restauranteSerivce = new RestauranteService(REACT_APP_LOGIN_API);

const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchRestaurantes() {
            try {
                const cachedRestaurantes = JSON.parse(localStorage.getItem(CACHE_KEY_RESTAURANTE));

                if(cachedRestaurantes) {
                    setRestaurantes(cachedRestaurantes);
                    setCarregando(false);
                    return;
                }

                const response = await restauranteSerivce.getRestaurantes();
                setRestaurantes(response);
                localStorage.setItem(CACHE_KEY_RESTAURANTE, JSON.stringify(response));
                setCarregando(false);
            } catch (error) {
                console.error(error);
                throw new Error('Não foi possível buscar os restaurantes.');
            } 
        }
    
        fetchRestaurantes();

    }, []);

    return (
        <>
      {carregando ? (
        <ContainerLoading>
            <p>Carregando...</p>
        </ContainerLoading>
      ) : (
        <ContainerRestauntes>
            <h2>Restaurantes</h2>
            <ListaRestaurantes>
                {restaurantes.map( (restaurante) => (
                    <Restaurante key={restaurante.id}
                        restaurante={restaurante}
                    />
                ))}
            </ListaRestaurantes>
        </ContainerRestauntes>
      )}
    </>
        
    )
}

export default Restaurantes;