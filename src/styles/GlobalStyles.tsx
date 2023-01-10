import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    &:focus-visible {
      outline: none;
    }
  }

  html,
  body,
  #root {
    min-height: calc(var(--vh, 1vh) * 100);
  }

  body,
  #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
