import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    /* src: url('/fonts/SF-Pro/SF-Pro-Display-Regular.woff2') format('woff2'); */
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro';
    /* src: url('/fonts/SF-Pro/SF-Pro-Display-Regular.woff2') format('woff2'); */
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro';
    /* src: url('/fonts/SF-Pro/SF-Pro-Display-Regular.woff2') format('woff2'); */
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'SF Pro', sans-serif;
  }
`;
