const OurTeam = () => {
  return (
    <section className="our-team">
      <h2>OUR TEAM</h2>
      <h3>HIGHLY TRAINED PROFESSIONALS IN</h3>
      <div className="team-skills">
        <div className="skill">
          <img src="/path-to-moving-techniques.png" alt="Moving Techniques" />
          <h4>Moving Techniques</h4>
        </div>
        <div className="skill">
          <img src="/path-to-safety-protocols.png" alt="Safety Protocols" />
          <h4>Safety Protocols</h4>
        </div>
        <div className="skill">
          <img
            src="/path-to-customer-service.png"
            alt="Customer Service Standards"
          />
          <h4>Customer Service Standards</h4>
        </div>
      </div>
      <p>
        Our team comprises highly trained professionals who can handle moves of
        all sizes, from small apartments to large commercial relocations. Led by
        our founder and CEO, <span className="highlight">Joshua</span>, we are
        committed to excellence in every move. Our staff undergoes rigorous
        training in moving techniques, safety protocols, and customer service
        standards to ensure your belongings are handled with the utmost care and
        professionalism.
      </p>
      <button className="btn btn-primary">Learn More</button>
    </section>
  );
};

export default OurTeam;
