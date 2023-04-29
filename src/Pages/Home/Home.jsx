import { ContainerHome } from './homeStyle'
import Header from '../../Components/Home/Header/Header';
import Restaurantes from '../../Components/Home/Restaurantes/Restaurantes';

const Home = () => {
    return (
        <ContainerHome>
            <Header/>
            <Restaurantes/>
        </ContainerHome>
    )
}

export default Home;