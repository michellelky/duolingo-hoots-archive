import styled from "styled-components";

export const BottomContainer = styled.div<{ isSuccess?: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 2px solid var(--border);
  border-color: ${({ isSuccess }) =>
    isSuccess ? `var(--success-bg)` : `var(--border)`};
  background-color: ${({ isSuccess }) =>
    isSuccess ? `var(--success-bg)` : `var(--bg-primary)`};
  z-index: 3;
  max-height: 140px;
`;

export const BottomGrid = styled.div<{ hasOneChild: boolean }>`
  display: grid;
  grid-gap: 12px;
  max-width: 1000px;
  padding: 14px;
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: ${({ hasOneChild }) =>
      hasOneChild ? "100%" : "1fr 1fr"};
    grid-template-rows: 1fr;
  }
`;

export const GridtItem = styled.div<{ isEnd: boolean }>`
  align-self: center;

  @media (min-width: 700px) {
    justify-self: ${({ isEnd }) => (isEnd ? "end" : "start")};
  }
`;
