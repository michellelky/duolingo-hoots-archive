import styled from "styled-components";

export const Layout = styled.div`
  max-width: 800px;
  padding: 2rem 6rem;
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 699px) {
    padding: 2rem 1rem;
    padding-top: 80px;
  }
`;

export const AbsView = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BaseView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div<{ visible?: boolean }>`
  width: 100%;
  margin: 2rem 0;
  display: ${({ visible }) => (visible === false ? "none" : "block")};
`;
