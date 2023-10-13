import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  width: 100%;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 16px auto;
    max-width: 500px;
  }
`;

export const DateItem = styled.div`
  color: #afafaf;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-right: 1.5rem;

  @media (max-width: 660px) {
    flex-direction: row;
    margin-bottom: 4px;
    padding: 0;
  }
`;

export const MonthText = styled.div`
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const DayText = styled.div`
  color: #202020;
  font-size: 44px;

  @media (max-width: 660px) {
    color: inherit;
    font-size: inherit;
    margin-left: 4px;
  }
`;

export const ListItemButton = styled(Link)<{
  bgcolor?: string;
  bordercolor?: string;
}>`
  cursor: pointer;
  background-color: ${({ bgcolor }) => `#${bgcolor}` || "rgb(16, 166, 107)"};
  border: 0;
  border-bottom: ${({ bordercolor }) =>
    `4px solid #${bordercolor}` || `4px solid rgb(10, 114, 73)`};
  border-radius: 16px;
  padding: 30px 24px;
  position: relative;
  width: 500px;
  max-width: 100%;
  min-height: 120px;
  overflow: hidden;
  color: #fff;

  :hover {
    opacity: 0.7;
  }
`;

export const MissedListItem = styled(ListItemButton)`
  background-color: none;
  border: 2px solid #e5e5e5;
  color: #afafaf;
  pointer-events: none;
`;

export const CompletedListItem = styled.div`
  background-color: #ffc800;
  border-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  padding: 30px 24px;
  position: relative;
  width: 500px;
  max-width: 100%;
  overflow: hidden;
  color: #cd7900;
  pointer-events: none;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 700;
  opacity: 0.6;

  @media (max-width: 660px) {
    font-size: 16px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 2rem;
  width: 65%;
  margin-right: 40px;

  @media (max-width: 660px) {
    font-size: 20px;
    line-height: 1.5rem;
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 1;
`;

export const ImageItem = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const Filler = styled.div`
  flex: auto;
`;

export const CharacterImg = styled.img`
  padding-top: 10px;
  width: 100px;
`;

export const ResponseItem = styled.div`
  border: 2px solid #e5e5e5;
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 24px;
  color: #4b4b4b;
  font-size: 17px;
  width: 500px;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StatusIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.6;
  margin-right: 10px;
`;
