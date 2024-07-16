// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Arial', sans-serif;
  }

  @import url('https://fonts.cdnfonts.com/css/dragon-ball-z');

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
