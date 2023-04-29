import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%
        height: 100vh;
        background-color: #f0f2f5;
        font-family: Verdana, 'sans-serif';
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none
    }
`

export default GlobalStyle;