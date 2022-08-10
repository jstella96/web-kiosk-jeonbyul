import './index.scss';

const FoodCount = ({ count = 0, setCount, index = 0 }) => {
  const updateCount = (newCount) => () => {
    if (newCount < 1) return;
    setCount(newCount, index);
  };

  return (
    <div className="food-count">
      <div className="food-count-wrapper">
        <button onClick={updateCount(count - 1)}> - </button>
        <span>{count}</span>
        <button onClick={updateCount(count + 1)}> + </button>
      </div>
    </div>
  );
};

export default FoodCount;
