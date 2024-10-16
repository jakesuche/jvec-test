const MovingCompanyBanner = () => {
  return (
    <section className="what-we-represent__banner">
      <div className="container">
        <div className="moving-company-banner">
          <div className="left-content">
            <img src="/images/movement.png" alt="movement" />
          </div>
          <div className="right-content">
            <h2>WHAT WE REPRESENT</h2>
            <h3>STRESS-FREE MOVES, PERFECT CLEAN</h3>
            <p>
              JVEC MOVERS is dedicated to providing top-notch moving and
              cleaning services. Based in Johnson City, Tennessee, we cater to
              both local and long-distance relocations, including moves to
              Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and
              Washington DC. We specialize in making your moving experience as
              smooth and stress-free as possible, from packing and
              transportation to cleaning your new home or office.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingCompanyBanner;
