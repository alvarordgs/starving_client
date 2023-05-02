import { HeaderCustomizado, 
        HeaderSubContainer, 
        ContainerUsuario, 
        ContainerLogout } from "./headerStyle";
import { MdLogout } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { REACT_APP_LOGIN_API, CACHE_KEY_USER_NAME } from '../../../Utilities/constantes';
import UserService from '../../../Services/UserService'

const userService = new UserService(REACT_APP_LOGIN_API);
 
// eslint-disable-next-line react/prop-types
const Header = () => {

    const navigate = useNavigate();

    const handleLogout =  () => {
        userService.logout();
        navigate('/');
    }

    const nameUser = JSON.parse(localStorage.getItem(CACHE_KEY_USER_NAME))

    return (
        <HeaderCustomizado>
            <HeaderSubContainer>
                <img src="./../../../../assets/logos/logo-starving-red.svg" alt="" />  
                <ContainerUsuario >
                    <div>
                        <p>Olá, <b style={{color: "red"}}>{nameUser}</b></p>
                        <span>Seja bem-vindo!</span>
                    </div>
                    <ContainerLogout onClick={handleLogout}>
                        <MdLogout style={{color: "red", fontSize: "1.5rem"}}/>
                    </ContainerLogout>
                </ContainerUsuario>
            </HeaderSubContainer>
        </HeaderCustomizado>
    )
}

export default Header;