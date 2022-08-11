import './index.scss';

const Loding = ({ isLoding }) => {
  return (
    <div className={isLoding ? 'loding' : 'none'}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loding;
