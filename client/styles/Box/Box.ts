import styled from "@emotion/styled";

interface Props {
  m?: string;
  mx?: number;
  my?: number;
  mb?: number;
}

const Box = styled.div`
  margin: ${({ m, mx, my }: Props) =>
    m ? `${m}px` : mx ? `0 ${mx}px` : my && `${my}px 0`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

export default Box;
