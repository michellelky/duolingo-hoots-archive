// init 1/3, fill bar when meet min characters
import { Link } from "react-router-dom";

import * as S from "./style";

interface ProgressBarProps {
  current: number;
  finish: number;
}

export default function ProgressBar({ current, finish }: ProgressBarProps) {
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
      <Link to="/">
        <img src={`/images/mobile-close-button.svg`} alt="close"/>
      </Link>
      <S.BaseBar>
        <S.Progress percent={getPercentage()} />
      </S.BaseBar>
    </S.Row>
  );
}
