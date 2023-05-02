import styled from 'styled-components';

export const HeaderCustomizado = styled.header`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px 1px;

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
        flex-direction: column;
        justify-content: center;
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

    @media (max-width: 600px) {
        gap: 0px 60px;
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