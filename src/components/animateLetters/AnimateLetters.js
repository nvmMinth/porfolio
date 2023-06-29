import "./AnimateLetters.scss";

const AnimateLetters = ({ letterClass, stringArr, index }) => {
  return (
    <span>
      {stringArr.map((charater, i) => (
        <span key={charater + i} className={`${letterClass} _${i + index}`}>
          {charater}
        </span>
      ))}
    </span>
  );
};

export default AnimateLetters;
