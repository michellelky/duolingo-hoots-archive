import * as S from "./style";

interface HootHeaderProps {
  completed?: boolean;
}

export default function HootHeader({ completed }: HootHeaderProps) {
  return (
    <S.HeaderWrapper>
      <h1>Hoots Archive</h1>
      <S.Subtitle>
        Practice your writing with a daily prompt and earn XP!
      </S.Subtitle>
    </S.HeaderWrapper>
  );
}
