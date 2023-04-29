import Routering from "./Routes";
import UserService from "../Services/UserService";

const userService = new UserService();

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado();
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;