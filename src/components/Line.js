const Line = ({ title, symbol }) => {
  return (
    <div className="line">
      <p>
        {symbol} {title}
      </p>
    </div>
  );
};
export default Line;
