import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #282c34;
    color: #fff;
  }

  .playing {
    transform: translateY(-3px);
    background-color: #596a73c2;
    transition: all 0.1s ease;
  }
`;

export default GlobalStyle;
