import React from "react";
import * as S from "./Text.styled";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: S.TextColor;
  level?: S.TextLevel;
}

const Text = ({ color = "default", level = 1, children }: TextProps) => {
  return (
    <S.Text $level={level} $color={color}>
      {children}
    </S.Text>
  );
};

export default Text;
