import * as S from "./Heading.styled";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  color?: S.HeadingColor;
  level?: S.HeadingLevel;
}

const Heading = ({ level = 1, color = "default", children }: HeadingProps) => (
  <S.Heading as={`h${level}`} $level={level} $color={color}>
    {children}
  </S.Heading>
);

export default Heading;
