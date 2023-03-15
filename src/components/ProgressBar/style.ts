import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  max-width: 1000px;
  background-color: #fff;
  padding: 2rem;
  margin: 0 auto;
`;

export const BaseBar = styled.div`
  background-color: #e5e5e5;
  border-radius: 16px;
  height: 16px;
  width: 100%;
  position: relative;
  margin-left: 18px;
`;

export const Progress = styled.div<{ percent: number }>`
  background-color: var(--accent);
  border-radius: 12px;
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  position: absolute;
  left: 0;
  top: 0;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
`;
