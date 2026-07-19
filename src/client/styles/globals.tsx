import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body,
      div,
      a,
      p,
      span,
      ul,
      li,
      small,
      h1,
      h2,
      h3,
      h4,
      button,
      section {
        font-family: var(--font-sans);
        color: var(--text-color);
      }
      body {
        min-height: 100vh;
      }
      html[data-embedded='true'] body {
        background-color: transparent;
      }
      html[data-embedded='true'] #fancy-background,
      html[data-embedded='true'] footer {
        display: none;
      }
      #fancy-background p span {
        color: transparent;
      }
    `}
  />
);

export default GlobalStyles;
