import styled from 'styled-components';

export const ContainerRestauntes = styled.div`
    max-width: 1200px;
    padding: 60px 20px;
    margin: 0px auto;

    h2 {
        margin-bottom: 40px;
        color: #3e3e3e;
    }

    @media (max-width: 1000px) {
        padding: 40px 20px;
    }

`


export const ListaRestaurantes = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export const ContainerLoading = styled.div`
    min-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`