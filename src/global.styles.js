import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 24px 24px 0px 24px;
    font-family: 'Titillium Web', sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    a {
    text-decoration: none;
    color: black;
    }

    * {
    box-sizing: border-box;
    }
`;
