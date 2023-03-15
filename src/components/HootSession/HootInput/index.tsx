import * as S from "./style";

interface InputProps {
  value: string;
  onTextChange: (val: string) => void;
  wordCount: number;
  min: number;
  max: number;
  editable?: boolean;
}

export default function HootInput({
  value,
  onTextChange,
  wordCount,
  min,
  max,
  editable,
}: InputProps) {
  const onChange = (e: any) => {
    if (wordCount >= max) {
      return;
    }
    onTextChange(e.target.value);
  };

  return (
    <div>
      <S.InputWrapper>
        <S.TextArea
          value={value}
          onChange={onChange}
          placeholder="Type your response"
          draggable={false}
          readOnly={!editable}
        />
        <S.TextCount valid={wordCount >= min}>{wordCount}</S.TextCount>
      </S.InputWrapper>

      <S.TextHint>
        {min} - {max} characters
      </S.TextHint>
    </div>
  );
}
