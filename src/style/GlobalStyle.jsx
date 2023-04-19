import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    input {
        border: none;

        &:focus {
            outline: none;
        }
    }

    #root {
        position: relative;
    }
`;

export default GlobalStyle;