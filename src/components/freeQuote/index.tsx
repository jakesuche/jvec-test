import React from "react";


const FreeQuote = () => {
  return (
    <section className="free-quote-section">
      <div className="quote-container">
        <div className="quote-text">
          <h2>Ready for a Stressless Move? Get Your Free Quote</h2>
          <p>
            Fill out our online booking form to schedule your move with JVEC
            MOVERS. Provide details about your move, and we'll get back to you
            with a customized plan and quote.
          </p>
        </div>
        <div className="quote-btn">
          <span>Free Quote</span>
          <button>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="app-download">
        <p>Download the App</p>
        <div className="app-links">
          <img
            src="/path/to/app-store-logo.png"
            alt="Download on the App Store"
          />
          <img
            src="/path/to/google-play-logo.png"
            alt="Get it on Google Play"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
