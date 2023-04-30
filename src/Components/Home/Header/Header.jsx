import { HeaderCustomizado, 
        HeaderSubContainer, 
        ContainerForm, 
        InputBuscarCustomizado, 
        ContainerUsuario, 
        ContainerLogout } from "./headerStyle";
import { FaSearch } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Header = ({ nomeUser }) => {
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
                    <ContainerLogout>
                        <MdLogout style={{color: "red", fontSize: "1.5rem"}}/>
                    </ContainerLogout>
                </ContainerUsuario>
            </HeaderSubContainer>
        </HeaderCustomizado>
    )
}

export default Header;