import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    :root{
        --white: #faf9fa;
        --black: #0b0a0b;
        --green: #83c94a;
        --light-green: #a3db76;
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

    img {
        user-select: none;
    }

    body{
        background-color: var(--body-color);
        overflow-x: hidden;
    }

    html{
        scroll-behavior: smooth;
     
        ::-webkit-scrollbar{
            width: 10px;
            background: var(--container-color);
            background: #272528;
        }
        ::-webkit-scrollbar-thumb{
            background: var(--body-color);
            background: #413d42;
        }
    }
`;

export default GlobalStyle;
