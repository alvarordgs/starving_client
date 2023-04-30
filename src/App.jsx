import Login from "./Pages/Login/Login";
import Layout from './Pages/Layout/Layout';
import Restaurantes from "./Components/Home/Restaurantes/Restaurantes";
import RestaurantePage from "./Pages/RestaurantePage/RestaurantePage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import UserService from "./Services/UserService";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { validarEmail, validarSenha } from './Utilities/validadores';
import { REACT_APP_LOGIN_API } from './Utilities/constantes'

const userService = new UserService(REACT_APP_LOGIN_API);

const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState([]);
  const [nomeUser, setNomeUser] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await userService.login(form);
      setNomeUser(response.name);
      if (response) {
        alert('usuario logado com sucesso');
        navigate('/restaurantes');
      }
      setLoading(false)
    } catch (err) {
      alert('Usuário ou senha incorreto...' + err)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  }

  return (
    <Routes>
      <Route path="/" element={<Login
        handleSubmit={handleSubmit}
        loading={loading}
        handleChange={handleChange}
        validadorInput={validadorInput}
      />} />
      <Route path="/restaurantes" element={
        <Layout 
          nomeUser={nomeUser}
        />
      }>
        <Route index element={
          <ProtectedRoutes>
            <Restaurantes />
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