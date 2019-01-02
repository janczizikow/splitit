import styled from "@emotion/styled";

interface Props {
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: string;
}

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }: Props) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default Flex;
