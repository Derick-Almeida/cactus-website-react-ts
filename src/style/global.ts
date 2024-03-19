import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    :root{
        --white: #faf9fa;
        --black: #0b0a0b;
        --green: #83c94a;
        --gray: #b6acb9;
        --body-color: #151316;
        --container-color: #201d20;
        --shadow-img: 0 0 48px #83c94a66;
        --gradient-card: linear-gradient(180deg, #141613, #496b2e);
    }

    ul,ol,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        cursor: pointer;
    }

    body{
        background-color: var(--body-color);
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
