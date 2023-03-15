import * as S from "./style";
import { HootListItemProps } from "./index";

interface DateProps {
  date: HootListItemProps["dateObj"];
}

export default function Date({ date }: DateProps) {
  return (
    <S.DateItem>
      <S.MonthText>
        {date.toLocaleString("en", {
          month: "short",
        })}
      </S.MonthText>
      <S.DayText>{date.getDate()}</S.DayText>
    </S.DateItem>
  );
}
