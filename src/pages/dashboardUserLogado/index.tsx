import Header from '../../components/HeaderHomeLogged';
import Filters from '../../components/Filters';
import { ContainerGeneral } from './styled';
import Cards from '../../components/Cards';
import ModalCriarPost from '../../components/Modal/ModalCriarPost';
import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../contexts/AnnouncementContext';

const DashboardLogged = () => {
    const { openClose } = useContext(AnnouncementContext)

    return (
        <ContainerGeneral>
            <Header />
            <Filters />
            <Cards />

            {openClose && <ModalCriarPost />}
            
        </ContainerGeneral>
    )
}

export default DashboardLogged;