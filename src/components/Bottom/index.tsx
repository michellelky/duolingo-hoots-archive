import React from "react";
import * as S from "./style";

interface BottomProps {
  children: React.ReactNode;
  success?: boolean;
}

export default function Bottom({ children, success }: BottomProps) {
  // to ensure children is array
  const arrayChildren = React.Children.toArray(children);
  const hasOneChild = arrayChildren.length === 1;

  return (
    <S.BottomContainer isSuccess={success}>
      <S.BottomGrid hasOneChild={hasOneChild}>
        {React.Children.map(arrayChildren, (child, index) => (
          <S.GridtItem
            isEnd={
              (index === 0 && hasOneChild) || (index === 1 && !hasOneChild)
            }
          >
            {child}
          </S.GridtItem>
        ))}
      </S.BottomGrid>
    </S.BottomContainer>
  );
}
