import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ProtectedRoutes from "./ProtectedRoutes";

const Routering = () => {
  return (
    <Router>
        <Routes>
            <Route path="*" element={<Login/>}/>
            <Route path="/home" element={
                <ProtectedRoutes>
                  <Home/>
                </ProtectedRoutes>
            }/>
        </Routes>
    </Router>
  )
}

export default Routering
