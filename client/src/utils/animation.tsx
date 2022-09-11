/*
    메인 화면에서 슬라이딩 애니메이션으로 카테고리를 이동할시 가장 처음에 표출되는 카테고리의
    index를 구하기 위한 함수.
*/
export const calculateNextStartIndex = (
  nextIndex: number,
  nowStartIndex: number,
  totalItemCount: number,
  numVisibleItem: number
): number => {
  let nextStartIndex = nowStartIndex;
  if (nextIndex - nowStartIndex === numVisibleItem) {
    if (nextIndex === totalItemCount - 1 && totalItemCount % 2 === 1) {
      nextStartIndex = nowStartIndex + 1;
    } else {
      nextStartIndex = nowStartIndex + 2;
    }
  } else if (nextIndex < nowStartIndex) {
    if (nextIndex === 0 && totalItemCount % 2 === 1) {
      nextStartIndex = nowStartIndex - 1;
    } else {
      nextStartIndex = nowStartIndex - 2;
    }
  }
  return nextStartIndex;
};
