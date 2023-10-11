import styled from "styled-components";

export const ControlButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  height: 100%;
`;

export const PlayIcon = styled.img<{ size?: number; active?: boolean }>`
  min-width: ${({ size }) => size || 24}px;
  min-height: ${({ size }) => size || 24}px;
  object-fit: contain;
  animation: pulse infinite 1.2s linear;
  animation-play-state: ${({ active }) => (active ? "running" : "paused")};

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
