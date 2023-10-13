import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { HootListItemProps } from "./index";
import CharacterImage from "./CharacterImage";
import Date from "./Date";

export default function CompletedItem({
  dateObj,
  question,
  answer,
  character,
  characterImg,
}: HootListItemProps) {
  const navigate = useNavigate();

  const viewPrompt = () => {
    const dateStr = dateObj.toLocaleDateString("en-CA");
    import(`../../../data/${dateStr}/prompt.json`)
      .then(() => {
        navigate(`session/${dateStr}`);
      })
      .catch((err) => {
        console.error("No prompt data", dateStr);
      });
  };

  return (
    <S.ListItem>
      <Date date={dateObj} />

      <div>
        <S.CompletedListItem onClick={viewPrompt}>
          <S.ContentItem>
            <S.Row>
              <S.StatusIcon
                src={`${process.env.PUBLIC_URL}/images/completed_check.svg`}
                alt="completed"
              />
              <S.Description>Completed</S.Description>
            </S.Row>
            <S.Title>{question}</S.Title>
          </S.ContentItem>

          <CharacterImage src={characterImg} alt={character.name} />
        </S.CompletedListItem>

        <S.ResponseItem>
          <p>{answer}</p>
        </S.ResponseItem>
      </div>
    </S.ListItem>
  );
}
