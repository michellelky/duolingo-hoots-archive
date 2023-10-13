import * as S from "./style";

interface StatusProps {
  success?: boolean;
  label: string;
}

export default function Status({ label, success = true }: StatusProps) {
  return (
    <S.StatusContainer>
      <S.StatusIcon src={`${process.env.PUBLIC_URL}/images/ribbon-check.svg`} alt="check" />
      <S.StatusText isSuccess={success}>{label}</S.StatusText>
    </S.StatusContainer>
  );
}
