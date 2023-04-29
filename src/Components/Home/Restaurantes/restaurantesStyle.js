import styled from 'styled-components';

export const ContainerRestauntes = styled.div`
    width: 1200px;
    padding: 60px 0px;
    margin: 0px auto;

    h2 {
        margin-bottom: 40px;
        color: #3e3e3e;
    }
`


export const ListaRestaurantes = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`