import styled from 'styled-components';

export const BoxProduto = styled.li`
    gap: 0px 20px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`

export const BoxImgProduto = styled.div`
    width: 100%;
    border-radius: 8px 8px 0px 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const BoxProdutoInfo = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #717171;

    h4 {
        font-size: 1.125rem;
        color: #3e3e3e;
    }

    span {
        color: red;
        font-weight: bold;
    }

`