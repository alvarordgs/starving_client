import Login from "./Pages/Login/Login";
import Layout from './Pages/Layout/Layout';
import Restaurantes from "./Components/Home/Restaurantes/Restaurantes";
import RestaurantePage from "./Pages/RestaurantePage/RestaurantePage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/restaurantes" element={
              <Layout/>
            }>
              <Route index element={
                <ProtectedRoutes>
                  <Restaurantes/>
                </ProtectedRoutes>}
              />
              <Route path=":id" element={
                <ProtectedRoutes>
                  <RestaurantePage/>
                </ProtectedRoutes>
              }/>
            </Route>
        </Routes>
    )
}

export default App;