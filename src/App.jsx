import Login from "./Pages/Login/Login";
import Layout from './Pages/Layout/Layout';
import Restaurantes from "./Components/Home/Restaurantes/Restaurantes";
import RestaurantePage from "./Pages/RestaurantePage/RestaurantePage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import UserService from "./Services/UserService";
import CardapioService from "./Services/CardapioService";

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { validarEmail, validarSenha } from './Utilities/validadores';
import { REACT_APP_LOGIN_API, CACHE_KEY_USER_NAME, CACHE_KEY_RESTAURANTE } from './Utilities/constantes'

const userService = new UserService(REACT_APP_LOGIN_API);
const cardapioService = new CardapioService(REACT_APP_LOGIN_API);

const App = () => {

  /* Login */

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  //const [nomeUser, setNomeUser] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await userService.login(form);
      
      if (response) {
        localStorage.setItem(CACHE_KEY_USER_NAME, JSON.stringify(response.name))
        console.log('usuario logado com sucesso');
        navigate('/restaurantes');
      }
      setLoading(false)
    } catch (err) {
      setErro("Usuário ou senha incorretos. Tente novamente!");
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  }

  /*Buscar todos os cardápios */
  const [cardapiosDados, setCardapiosDados] = useState([]);

  useEffect(() => {
    async function fetchRestaurantesDados() {
      try {
        const response = await cardapioService.getCardapiosDados();
        setCardapiosDados(response);
      }catch(error) {
        console.log(error);
        throw new Error('Não foi possível buscar os cardapios.');
      }
    }

    fetchRestaurantesDados();
  }, [])

  /* Buscar resultados*/
  const [search , setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([]);

  const restaurantes = JSON.parse(localStorage.getItem(CACHE_KEY_RESTAURANTE));

  useEffect(() => {
    const filteredResults = cardapiosDados.filter((produto) => ((produto.nome_produto).toLowerCase()).includes(search.toLowerCase()) || ((produto.descricao_produto).toLowerCase()).includes(search.toLowerCase()) || ((produto.nome_restaurante).toLowerCase()).includes(search.toLowerCase()));
    const idRestaurantes = []
    filteredResults.forEach((result, i) => {
      idRestaurantes[i] = result.id_restaurante;
    })

    const filteredIdRestaurantes = [...new Set(idRestaurantes)];
    
    const restaurantesFiltrados = restaurantes.filter((restaurante) => filteredIdRestaurantes.includes(restaurante.id))

    setSearchResult(restaurantesFiltrados)

  }, [search], [restaurantes])

 

  return (
    <Routes>
      <Route path="/" element={<Login
        handleSubmit={handleSubmit}
        loading={loading}
        handleChange={handleChange}
        validadorInput={validadorInput}
        erro={erro}
      />} />
      <Route path="/restaurantes" element={
        <Layout />
      }>
        <Route index element={
          <ProtectedRoutes>
            <Restaurantes 
              setSearch={setSearch}
              searchResult={searchResult}
            />
          </ProtectedRoutes>}
        />
        <Route path=":id" element={
          <ProtectedRoutes>
            <RestaurantePage />
          </ProtectedRoutes>
        } />
      </Route>
    </Routes>
  )
}

export default App;

//TODO: filtrar os resultados e buscar as imagens de cada restaurante no servidor