import styled from 'styled-components';

export const BoxRestaurante = styled.li`
    gap: 0px 20px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export const BoxImgRestaurante = styled.div`
    width: 100%;
    border-radius: 8px 8px 0px 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const BoxRestauranteInfo = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`