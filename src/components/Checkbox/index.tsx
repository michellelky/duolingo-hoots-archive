import * as S from "./style";

interface CheckboxProps {
  label?: string;
  isChecked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

export default function Checkbox({
  label,
  isChecked = false,
  onChange,
  disabled,
}: CheckboxProps) {
  return (
    <S.Label disabled={disabled}>
      <S.Input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
      />
      {!!label && <S.Text>{label}</S.Text>}
    </S.Label>
  );
}
