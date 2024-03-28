import { FaStar } from '@react-icons/all-files/fa/FaStar';
import { FaStarHalf } from '@react-icons/all-files/fa/FaStarHalf';

interface StarRating {
  score: number;
  size: number;
  gap: number;
}

const StarRating = ({ score, size, gap }: StarRating) => {
  const integerPart = Math.floor(score);
  const decimalPart = score - integerPart;

  const filledStarCount = integerPart;
  const emptyStarCount = 5 - filledStarCount - (decimalPart > 0 ? 1 : 0);

  // 채워진 별 렌더링
  const filledStars = Array.from({ length: filledStarCount }, (_, idx) => (
    <FaStar key={idx} size={size} className="text-green60" />
  ));

  // 비워진 별 렌더링
  const emptyStars = Array.from({ length: emptyStarCount }, (_, idx) => (
    <FaStar key={idx} size={size} className="text-gray30" />
  ));

  // 부분적으로 채워진 별 렌더링
  let partialStar = null;
  if (decimalPart > 0) {
    if (decimalPart <= 0.24) {
      partialStar = <FaStar size={size} className="text-gray30" />; // 비워진 별
    } else if (decimalPart <= 0.74) {
      partialStar = (
        <div style={{ position: 'relative' }}>
          <FaStar size={size} className="text-gray30" />
          <FaStarHalf
            size={size}
            className="text-green60"
            style={{ position: 'absolute', top: '0', left: '0' }}
          />
        </div>
      ); // 반채워진 별
    } else {
      partialStar = <FaStar size={size} className="text-green60" />; // 채워진 별
    }
  }

  return (
    <div className="flex items-center" style={{ gap: `${gap}px` }}>
      {filledStars}
      {partialStar}
      {emptyStars}
    </div>
  );
};

export default StarRating;
