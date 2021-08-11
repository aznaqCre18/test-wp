import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins Medium';
    src: url('./../../assets/fonts/Poppins-Medium.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Poppins Regular';
    src: url('./../../assets/fonts/Poppins-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Poppins Light';
    src: url('./../../assets/fonts/Poppins-Light.ttf') format('ttf');
  }

  * {
    font-family: 'Poppins';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;