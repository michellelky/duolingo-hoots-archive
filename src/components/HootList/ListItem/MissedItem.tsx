import * as S from "./style";
import { HootListItemProps } from "./index";
import CharacterImage from "./CharacterImage";
import Date from "./Date";

export default function MissedItem({
  dateObj,
  question,
  character,
  characterImg,
}: HootListItemProps) {
  return (
    <S.ListItem>
      <Date date={dateObj} />

      <S.MissedListItem to={`session/${dateObj.toLocaleDateString("en-CA")}`}>
        <S.ContentItem>
          <S.Row>
            <S.StatusIcon src={`images/missed_cross.svg`} alt="missed" />
            <S.Description>Missed</S.Description>
          </S.Row>
          <S.Title>{question}</S.Title>
        </S.ContentItem>

        <CharacterImage src={characterImg} alt={character.name} />
      </S.MissedListItem>
    </S.ListItem>
  );
}
