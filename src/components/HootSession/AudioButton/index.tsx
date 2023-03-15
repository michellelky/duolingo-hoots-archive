import * as S from "./style";

interface AudioButtonProps {
  src: string;
  onClick?: () => void;
  active?: boolean;
  size?: number;
}

export default function AudioButton({
  src,
  onClick,
  active,
}: AudioButtonProps) {
  return (
    <S.ControlButton>
      <S.PlayIcon src="/images/speaker-icon.svg" />
    </S.ControlButton>
  );
}
