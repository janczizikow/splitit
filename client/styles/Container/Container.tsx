import styled from "@emotion/styled";

interface Props {
  fluid?: boolean;
}

const Container = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: ${(p: Props) => (p.fluid ? "100%" : "1172px")};
`;

Container.displayName = "Container";

export default Container;
