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

  /* Dropdown animation styles */
  .dropdown-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  .dropdown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ease, transform 300ms ease;
  }

  .dropdown-exit-active {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 300ms ease, transform 300ms ease;
  }
`;

export default globalStyles;
