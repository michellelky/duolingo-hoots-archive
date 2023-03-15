import styled from "styled-components";

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StatusText = styled.h2<{ isSuccess: boolean }>`
  color: ${({ isSuccess }) =>
    isSuccess ? `var(--success-text)` : `var(--error-text)`};
`;

export const StatusIcon = styled.img`
  margin-right: 18px;
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;
