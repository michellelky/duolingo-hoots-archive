import * as S from "./styles";
import AudioButton from "../AudioButton";

interface DialogBubbleProps {
  text: string;
  avatar: string;
  audioUrl: string;
  visible?: boolean;
  play?: () => void;
}

export default function DialogBubble({
  text,
  avatar,
  audioUrl,
  visible,
  play,
}: DialogBubbleProps) {
  return (
    <S.VisibleWrapper visible={visible}>
      <S.DialogContainer>
        <S.Avatar src={avatar} />

        <S.Bubble>
          {!!audioUrl && <AudioButton src={audioUrl} active onClick={play} />}
          <S.BubbleContent>{text}</S.BubbleContent>
        </S.Bubble>
      </S.DialogContainer>
    </S.VisibleWrapper>
  );
}
