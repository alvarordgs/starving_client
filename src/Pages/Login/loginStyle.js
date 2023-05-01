import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: #f7f7f7;
    background-image: url('./../../../assets/imgs/bakground-login.jpg');
`

export const Form = styled.form`
    display: flex;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d40000;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    gap: 20px 0px;
    margin: 20px;
    
    @media (max-width: 600px) {
        padding: 2rem;
    }

    h1 {
        color: #fff;
        font-size: 20px;
        font-weight: light;
    }

    p {
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }

    a {
        background: #fff;
        padding: 12px 24px;
        border-radius: 6px; 
        color: #d40000;
        font-size: 0.875rem;
        font-weight: bold;
    }

    a:hover {
        background: #cfcfcf;
    }

    
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 15px;
`

export const ErroMsg = styled.p`
    color: #fff;
    font-size: 0.75rem !important;
    text-align: center;
    font-weight: 400;
`