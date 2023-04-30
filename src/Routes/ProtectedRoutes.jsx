import App from "../App";
import UserService from "../Services/UserService";

const userService = new UserService();

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.isUserAuthenticated();
    return usuarioAutenticado ? children : <App/>
}

export default ProtectedRoutes;