const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">MOVE </span>
          <span>WITH</span>
          <br />
          CONFIDENCE:
        </h1>
        <h2>Smooth Moves Start Here</h2>
        <p>Professional and affordable. Fully insured.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/images/man_with_flower.png" alt="Movers packing boxes" />
      </div>
    </section>
  );
};

export default Hero;
