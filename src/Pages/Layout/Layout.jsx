import { ContainerLayout } from './layoutStyle'
import Header from '../../Components/Home/Header/Header';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Layout = () => {
    return (
        <ContainerLayout>
            <Header
                //nomeUser={nomeUser}
            />
            <Outlet/>
        </ContainerLayout>
    )
}

export default Layout;