import styled from "@emotion/styled";

interface Props {
  sm?: boolean;
}

const Avatar = styled.img`
  margin-right: 0.5rem;
  width: ${(p: Props) => (p.sm ? `36px` : `80px`)};
  height: ${(p: Props) => (p.sm ? `36px` : `80px`)};
  border-radius: 50%;
`;

Avatar.displayName = "Avatar";

export default Avatar;
