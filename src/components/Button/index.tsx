import * as S from "./style";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  onClick?: () => void;
}

function renderContent(loading: boolean, content: string) {
  if (loading) {
    return ". . .";
  }
  return content;
}

export default function Button({
  children,
  loading = false,
  disabled,
  variant,
  onClick,
}: ButtonProps) {
  if (variant && variant === "secondary") {
    return (
      <S.SecondaryButtonContainer onClick={onClick}>
        <S.SecondaryButtonLabel>
          {renderContent(loading, children)}
        </S.SecondaryButtonLabel>
      </S.SecondaryButtonContainer>
    );
  }
  return (
    <S.ButtonContainer disabled={disabled} onClick={onClick}>
      <S.ButtonLabel>{renderContent(loading, children)}</S.ButtonLabel>
    </S.ButtonContainer>
  );
}
