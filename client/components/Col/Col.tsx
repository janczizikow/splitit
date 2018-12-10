import styled from "@emotion/styled";

const Col = styled.div`
  padding: ${p => `0 ${p.theme.gridGutters}px`};
  flex: 1 0 100%;
  max-width: 100%;
  min-height: 1px;
  /* ${p => `${p.theme.gridBreakpoints[1]}px`}
  @media only screen and min-width() {
    flex: 0 0 "x";
    max-width: "x";
  } */
`;

Col.displayName = "Col";

export default Col;
