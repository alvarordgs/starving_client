import { ContainerLayout } from './layoutStyle'
import Header from '../../Components/Home/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <ContainerLayout>
            <Header/>
            <Outlet/>
        </ContainerLayout>
    )
}

export default Layout;