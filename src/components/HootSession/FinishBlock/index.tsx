import * as S from "./style";

interface FinishBlockProps {
  title: string;
  subtitle?: string;
  xp?: number;
}

export default function FinishBlock({ title, subtitle, xp }: FinishBlockProps) {
  return (
    <S.Fullscreen>
      <S.Img src={`${process.env.PUBLIC_URL}/images/chest-open.svg`} alt="chest" />
      <S.Title>{title}</S.Title>
      {xp && (
        <S.Row>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.Number>+{xp} XP</S.Number>
        </S.Row>
      )}
    </S.Fullscreen>
  );
}
