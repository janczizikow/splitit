import styled from "@emotion/styled";

const SuccessMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: ${p => p.theme.colors.success};
  text-align: center;
  background-color: ${p => p.theme.colors.successBg};
`;

SuccessMessage.displayName = "SuccessMessage";

export default SuccessMessage;
