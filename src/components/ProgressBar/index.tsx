// init 1/3, fill bar when meet min characters

import * as S from "./style";

interface ProgressBarProps {
  current: number;
  finish: number;
  onClose?: () => void;
}

export default function ProgressBar({
  current,
  finish,
  onClose,
}: ProgressBarProps) {
  const getPercentage = () => {
    const total = 100;
    const init = total - finish;
    const progress = init + current;

    if (progress < total) {
      return progress;
    }
    return total;
  };

  return (
    <S.Row>
      <S.Button onClick={onClose}>
        <img src={`/images/mobile-close-button.svg`} alt="close" />
      </S.Button>
      <S.BaseBar>
        <S.Progress percent={getPercentage()} />
      </S.BaseBar>
    </S.Row>
  );
}
