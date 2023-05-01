import styled from 'styled-components';

export const HeaderCustomizado = styled.header`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 1px;

    @media (max-width: 1000px) {
        padding: 20px;
    }
`

export const HeaderSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 1200px;
    padding: 20px;
    margin: 0px auto;

    @media (max-width: 1000px) {
        justify-content: space-around;
    }

    @media (max-width: 600px) {
        justify-content: center;
    }

`

export const ContainerForm = styled.div`
    position: relative;

    span {
        position: absolute;
        top: 12px;
        left: 15px;
    }
`

export const InputBuscarCustomizado = styled.input`
    min-width: 350px;
    padding: 12px 16px 12px 45px;
    font-size: .875rem;
    border: none;
    border-radius: 8px;
    background: #e6e6e6;
    &:focus {
        outline: none;
    }

    input::placeholder {
        color: #FFF;
        font-size: 12px;
        opacity 0.7;
    }

    @media (max-width: 1000px) {
        min-width: 250px;
    }

    @media (max-width: 600px) {
        min-width: 150px;
    }
`

export const ContainerUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 0px 40px;

    p, span {
        font-size: .875rem;
        color: #717171;
    }

    @media (max-width: 1000px) {
        gap: 0px 20px;
    }
`

export const ContainerLogout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: rgb(230 230 230);
    }
`