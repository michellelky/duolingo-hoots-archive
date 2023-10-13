import * as S from "./style";
import { HootListItemProps } from "./index";
import CharacterImage from "./CharacterImage";
import Date from "./Date";

export default function HootListItem({
  dateObj,
  question,
  translation,
  character,
  characterImg,
  isToday,
}: HootListItemProps) {
  return (
    <S.ListItem>
      <Date date={dateObj} />

      <S.ListItemButton
        bgcolor={character.backgroundColor}
        bordercolor={character.lipColor}
        to={`session/${dateObj.toLocaleDateString("en-CA")}`}
      >
        <S.ContentItem>
          {isToday ? (
            <S.Description>Today's Prompt</S.Description>
          ) : (
            <S.Row>
              <S.StatusIcon src={`${process.env.PUBLIC_URL}/images/missed_cross.svg`} alt="missed" />
              <S.Description>Missed</S.Description>
            </S.Row>
          )}
          <S.Title>{isToday ? translation : question}</S.Title>
        </S.ContentItem>

        <CharacterImage src={characterImg} alt={character.name} />
      </S.ListItemButton>
    </S.ListItem>
  );
}
