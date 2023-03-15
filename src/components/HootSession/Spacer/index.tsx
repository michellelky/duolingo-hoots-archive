import styled from "styled-components";

export const Spacer = styled.div<{ visible?: boolean }>`
  width: 100%;
  height: 200px;
  display: ${({ visible }) => (visible === false ? "none" : "block")};
`;
