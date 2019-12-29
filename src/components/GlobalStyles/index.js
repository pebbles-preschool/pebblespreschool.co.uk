import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    *:focus {
      outline-width: 0;
    }
  };

  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
  };
`;

export default GlobalStyles;
