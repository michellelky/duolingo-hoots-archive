import styled from "styled-components";

export const VisibleWrapper = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible === false ? "none" : "block")};
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  margin-top: 24px;

  @media (max-width: 699px) {
    width: 100%;
  }
`;

export const Bubble = styled.div`
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  padding: 16px 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;

  :after {
    background-image: url("images/speech-bubble-arrow.svg");
    content: "";
    height: 19px;
    left: -18px;
    position: absolute;
    top: 10px;
    width: 24px;
  }
`;

export const BubbleContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #3c3c3c;
  text-align: left;
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 24px;
`;
