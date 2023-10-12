import * as S from "./style";

interface AudioButtonProps {
  onClick?: () => void;
  active?: boolean;
  size?: number;
}

export default function AudioButton({
  onClick,
  active,
  size,
}: AudioButtonProps) {
  return (
    <S.ControlButton onClick={onClick}>
      <S.PlayIcon src="images/speaker-icon.svg" size={size} active={active} />
    </S.ControlButton>
  );
}
