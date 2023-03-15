import * as S from "./style";

interface CharacterImageProps {
  src: string;
  alt?: string;
}

export default function CharacterImage({ src, alt }: CharacterImageProps) {
  return (
    <S.ImageItem>
      <S.Filler />
      <S.CharacterImg src={src} alt={alt || "character"} />
    </S.ImageItem>
  );
}
