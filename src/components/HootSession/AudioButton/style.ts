import styled from "styled-components";

export const ControlButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  height: 100%;
`;

export const PlayIcon = styled.img<{ size?: number }>`
  min-width: ${({ size }) => size || 24}px;
  min-height: ${({ size }) => size || 24}px;
  object-fit: contain;
`;
