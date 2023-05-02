import { ContainerRestauntes, ListaRestaurantes, ContainerLoading, ContainerForm, InputBuscarCustomizado } from './restaurantesStyle';
import { useEffect, useState } from 'react';
import { REACT_APP_LOGIN_API, CACHE_KEY_RESTAURANTE } from '../../../Utilities/constantes';
import { FaSearch } from 'react-icons/fa';
import Restaurante from '../Restaurante/Restaurante';
import RestauranteService from './../../../Services/RestauranteService'

const restauranteSerivce = new RestauranteService(REACT_APP_LOGIN_API);

// eslint-disable-next-line react/prop-types
const Restaurantes = ({ setSearch, searchResult }) => {

    const [restaurantes, setRestaurantes] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function fetchRestaurantes() {
            try {
                const cachedRestaurantes = JSON.parse(localStorage.getItem(CACHE_KEY_RESTAURANTE));

                if (cachedRestaurantes) {
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
            <ContainerRestauntes>
                <form>
                    <ContainerForm>
                        <span>
                            <FaSearch style={{ color: "red" }} />
                        </span>
                        <InputBuscarCustomizado
                            type="text"
                            name="inputSearch"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </ContainerForm>
                </form>
                <h2>Restaurantes</h2>
                {carregando ? (
                    <ContainerLoading>
                        <p>Carregando...</p>
                    </ContainerLoading>
                ) : (
                    <ListaRestaurantes>
                        {searchResult.length === 0 ?
                            restaurantes.map((restaurante) => (
                                <Restaurante key={restaurante.id}
                                    restaurante={restaurante}
                                />
                            ))
                            :
                        searchResult.map((restaurante) => (
                            <Restaurante key={restaurante.id}
                                restaurante={restaurante}
                            />
                        ))}
                    </ListaRestaurantes>
                )}
            </ContainerRestauntes>
        </>
    )
}

export default Restaurantes;