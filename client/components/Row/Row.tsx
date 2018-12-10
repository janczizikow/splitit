import styled from "@emotion/styled";

interface Props {
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
}

const Row = styled.div`
  margin: ${p => `0 ${p.theme.gridGutters}px`};
  padding: 0;
  display: flex;
  flex-direction: ${(p: Props) => p.flexDirection && p.flexDirection};
  flex-wrap: wrap;
  list-style: none;
`;

Row.displayName = "Row";

export default Row;
