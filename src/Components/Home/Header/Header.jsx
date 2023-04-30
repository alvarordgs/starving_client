import { HeaderCustomizado, 
        HeaderSubContainer, 
        ContainerForm, 
        InputBuscarCustomizado, 
        ContainerUsuario, 
        ContainerLogout } from "./headerStyle";
import { FaSearch } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { REACT_APP_LOGIN_API } from '../../../Utilities/constantes';
import UserService from '../../../Services/UserService'

const userService = new UserService(REACT_APP_LOGIN_API);
 
// eslint-disable-next-line react/prop-types
const Header = ({ nomeUser }) => {

    const navigate = useNavigate();

    const handleLogout =  () => {
        userService.logout();
        navigate('/');
    }

    return (
        <HeaderCustomizado>
            <HeaderSubContainer>
                <form>
                    <ContainerForm>
                        <span>
                            <FaSearch style={{color: "red"}}/>
                        </span>
                        <InputBuscarCustomizado
                            type="text"
                            name="inputSearch"
                        />
                    </ContainerForm>
                </form>
                <ContainerUsuario >
                    <div>
                        <p>Olá, <b style={{color: "red"}}>{nomeUser}</b></p>
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