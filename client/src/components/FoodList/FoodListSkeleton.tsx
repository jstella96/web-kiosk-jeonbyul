import styled from 'styled-components';
import SkeletonItem from 'styles/skeleton';
import { foodItemImageLayout, foodItemLayout, foodListLayout } from './FoodListLayout';

export const FoodListSkeleton = () => {
  return (
    <FoodListSkeletonContainer>
      {Array.apply('', Array(5)).map((_, i) => (
        <FoodItemSkeleton key={i}>
          <ImageSkeleton></ImageSkeleton>
          <TitleSkeleton></TitleSkeleton>
          <TextSkeleton></TextSkeleton>
        </FoodItemSkeleton>
      ))}
    </FoodListSkeletonContainer>
  );
};
const FoodListSkeletonContainer = styled.div`
  ${foodListLayout}
  align-content: start;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const FoodItemSkeleton = styled.div`
  ${foodItemLayout}
  @media (max-width: 767px) {
    padding: 5% 7%;
    height: 10rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 5% 10%;
    height: 14rem;
  }
  @media (min-width: 1024px) {
    padding: 5% 20%;
    height: 18rem;
  }
`;
const ImageSkeleton = styled.div`
  ${SkeletonItem};
  ${foodItemImageLayout}
  height: 82%;
  width: 100%;
`;
const TitleSkeleton = styled.div`
  ${SkeletonItem};
  width: 85%;
  height: 10%;
  margin: 0.2rem 0;
`;
const TextSkeleton = styled.div`
  ${SkeletonItem};
  width: 80%;
  height: 8%;
`;
