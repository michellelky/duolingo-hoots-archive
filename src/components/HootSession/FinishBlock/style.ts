import styled from "styled-components";

export const Fullscreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Img = styled.img`
  width: 25%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 24px 0;
`;

export const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 18px;
`;

export const Number = styled.p`
  color: var(--text-highlight);
  font-size: 18px;
  font-weight: 700;
  margin-left: 18px;
`;
