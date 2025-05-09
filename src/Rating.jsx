import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ rating, setRating, handleSubmit, showError }) {
  const [hover, setHover] = useState(null);

  return (
    <section aria-labelledby="rating-title" role="form" className="card">
      <div className="star-div" aria-hidden="true">
        {[...Array(rating || 1)].map((_, index) => {
          const starValue = index + 1;
          return (
            <div className="star-wrapper" key={index}>
              <FaStar
                className="fa-star"
                size={24}
                color={starValue <= (hover || rating) ? "#ffc107" : "#FF8C00"}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                aria-label={`Rate ${starValue}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          );
        })}
      </div>
      {rating && (
        <p className="confirm-msg" role="status">
          You selected {rating} {rating === 1 ? "star" : "stars"}
        </p>
      )}

      <h1 id="rating-title">How did we do?</h1>
      <p className="first-p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div
        className="rating-options"
        role="radiogroup"
        aria-label="Rating options"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`rating-btn ${rating === num ? "selected" : ""}`}
            onClick={() => setRating(num)}
            aria-label={`Rate ${num}`}
          >
            {num}
          </button>
        ))}
      </div>

      {showError && !rating && (
        <p role="alert" className="error">
          Please select a rating before submitting.
        </p>
      )}

      <button className="submit-btn" onClick={handleSubmit}>
        SUBMIT
      </button>
    </section>
  );
}
