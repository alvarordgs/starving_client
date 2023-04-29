import styled from 'styled-components';

export const HeaderCustomizado = styled.header`
    padding: 20px 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 1px;
`

export const HeaderSubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0px auto;

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
`

export const ContainerUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 0px 40px;

    p, span {
        font-size: .875rem;
        color: #717171;
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