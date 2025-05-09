import { useState } from "react";
import Rating from "./Rating";
import ThankYou from "./ThankYou";

export default function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [ShowThankYou, setShowThankYou] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
      setShowError(false);
      setShowThankYou(true);
    } else {
      setShowError(true);
    }
  };

  const handleReset = () => {
    setRating(null);
    setSubmitted(false);
  };

  return (
    <main className="app">
      {!submitted ? (
        <Rating
          rating={rating}
          setRating={setRating}
          handleSubmit={handleSubmit}
          showError={showError}
          ShowThankYou={ShowThankYou}
        />
      ) : (
        <ThankYou rating={rating} handleReset={handleReset} />
      )}
    </main>
  );
}
