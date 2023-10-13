import * as S from "./styles";
import AudioButton from "../AudioButton";

interface DialogBubbleProps {
  text: string;
  avatar: string;
  audioUrl: string;
  visible?: boolean;
  active?: boolean;
  play?: () => void;
}

export default function DialogBubble({
  text,
  avatar,
  audioUrl,
  visible,
  active = false,
  play,
}: DialogBubbleProps) {
  return (
    <S.VisibleWrapper visible={visible}>
      <S.DialogContainer>
        <S.Avatar src={`${process.env.PUBLIC_URL}${avatar}`} />

        <S.Bubble>
          {!!audioUrl && <AudioButton active={active} onClick={play} />}
          <S.BubbleContent>{text}</S.BubbleContent>
        </S.Bubble>
      </S.DialogContainer>
    </S.VisibleWrapper>
  );
}
