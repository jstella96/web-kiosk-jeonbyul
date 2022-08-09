import './index.scss';

const FoodCount = ({ count = 0, setCount, idx = 0 }) => {
  const updateCount = (newCount) => () => {
    if (newCount < 1) return;
    setCount(newCount, idx);
  };

  return (
    <div className="food-option-count">
      <div className="count-control">
        <button onClick={updateCount(count - 1)}> - </button>
        <span>{count}</span>
        <button onClick={updateCount(count + 1)}> + </button>
      </div>
    </div>
  );
};

export default FoodCount;
