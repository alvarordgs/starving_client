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
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerForm = styled.div`
    position: relative;

    span {
        position: absolute;
        top: 16px;
        left: 15px;
    }
`

export const InputBuscarCustomizado = styled.input`
    min-width: 450px;
    padding: 16px 24px 16px 45px;
    font-size: .875rem;
    border: none;
    border-radius: 8px;
    background: #e6e6e6;
    margin-bottom: 40px;    
    &:focus {
        outline: none;
    }

    input::placeholder {
        color: #FFF;
        font-size: 12px;
        opacity 0.7;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`