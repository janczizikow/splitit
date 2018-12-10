import css from "@emotion/css";

const globalStyles = css`
  *::before,
  *::after,
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
    color: #2e3333;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    background-color: #fff !important;
    background-image: none;
  }
`;

export default globalStyles;
