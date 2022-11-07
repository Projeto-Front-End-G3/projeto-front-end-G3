import Header from '../../components/HeaderHomeLogged';
import Filters from '../../components/Filters';
import { ContainerGeneral } from './styled';
import Cards from '../../components/Cards';

const DashboardLogged = () => {
    return (
        <ContainerGeneral>
            <Header />
            <Filters />
            <Cards />

            
        </ContainerGeneral>
    )
}

export default DashboardLogged;