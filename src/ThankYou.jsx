import logo from "./assets/illustration-thank-you.svg";
export default function ThankYou({ rating, handleReset }) {
  return (
    <section role="region" aria-labelledby="thankyou-title" className="card-2">
      <img className="logo" src={logo} alt="" />
      <div className="rate-number">
        <p className="p1">You selected {rating} out of 5</p>
      </div>
      <h1 id="thankyou-title">Thank You!</h1>
      <p className="p2">
        We appreciate you taking time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
      <button onClick={handleReset} className="rate-again-btn">
        Rate Again
      </button>
    </section>
  );
  console.log(rating);
}
