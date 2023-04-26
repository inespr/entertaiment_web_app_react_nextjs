function StarRating({ average, maxStars = 5 }) {
  const [rating, setRating] = useState(average);

  const fillPercentage = (rating / maxStars) * 100;

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className={styles.starRating}>
      <div className={styles.emptyStars}>
        {[...Array(maxStars)].map((_, index) => (
          <Star
            key={index}
            filled={false}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
      <div className={styles.fullStars} style={{ width: `${fillPercentage}%` }}>
        {[...Array(maxStars)].map((_, index) => (
          <Star
            key={index}
            filled={index < rating}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
      <div className={styles.rating}>
        {rating} <span className={styles.outOfTen}>/10</span>
      </div>
    </div>
  );
}

StarRating.propTypes = {
  average: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
};

export default StarRating;
