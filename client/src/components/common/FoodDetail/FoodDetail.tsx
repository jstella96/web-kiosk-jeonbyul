import * as S from './FoodDetail.styled';
interface FoodDetailProps {
  food: {
    name: string;
    imgUrl: string;
    basePrice: number;
  };
}
const FoodDetail = ({ food }: FoodDetailProps) => {
  const { name, imgUrl, basePrice } = food;
  return (
    <S.FoodDetail>
      <S.Image alt={name} src={imgUrl} />
      <S.Title>{name}</S.Title>
      <S.Text>{basePrice.toLocaleString()}원</S.Text>
    </S.FoodDetail>
  );
};
export default FoodDetail;
