import styled from 'styled-components';

export const ContainerProdutos = styled.div`
    width: 1200px;
    padding: 60px 0px;
    margin: 0px auto;

    h2 {
        margin-bottom: 40px;
        color: #3e3e3e;
    }
`

export const ListaProdutos = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
`

export const RestauranteHeader = styled.header`
    background: #d40000;
    padding: 40px;
    border-radius: 8px;
    color: white;
    margin-bottom: 40px;

    h1 {
        margin-bottom: 20px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #e3e3e3;
    }

    li {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const ContainerLoading = styled.div`
    width: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`