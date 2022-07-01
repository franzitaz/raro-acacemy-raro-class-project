import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
