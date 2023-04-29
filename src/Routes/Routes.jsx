import Login from "../Pages/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ProtectedRoutes from "./ProtectedRoutes";

const Routering = () => {
  return (
    <Router>
        <Routes>
            <Route path="*" element={<Login/>}/>
            <Route path="/home" element={
                <ProtectedRoutes>
                  <h1>Home</h1>
                </ProtectedRoutes>
            }/>
        </Routes>
    </Router>
  )
}

export default Routering
