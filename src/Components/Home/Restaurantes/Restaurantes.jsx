import { ContainerRestauntes, ListaRestaurantes } from './restaurantesStyle';
import Restaurante from '../Restaurante/Restaurante';
import { useEffect, useState } from 'react';   
import RestauranteService from './../../../Services/RestauranteService'

const restauranteSerivce = new RestauranteService('http://127.0.0.1:8000/api');

const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchRestaurantes() {
            try {
                const response = await restauranteSerivce.getRestaurantes();
                setRestaurantes(response);
                setCarregando(false);
            } catch (error) {
                console.error(error);
                throw new Error('Não foi possível buscar os restaurantes.');
            } 
        }
    
        fetchRestaurantes();
    }, []);

    console.log(restaurantes);

    return (
        <>
      {carregando ? (
        <p>Carregando...</p>
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