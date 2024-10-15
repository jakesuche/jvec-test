const MovingCompanyBanner = () => {
  return (
    <section className="what-we-represent__banner">
      <div className="moving-company-banner">
        <div className="banner-image">
          {/* Replace with your actual image */}
          <img src="/public/images/movement.png" alt="Movers carrying a box" />
        </div>
        <div className="banner-content">
          <h2>WHAT WE REPRESENT</h2>
          <h3>STRESS-FREE MOVES, PERFECT CLEAN</h3>
          <p>
            Our company is dedicated to providing top-notch moving and cleaning
            services. Based in [Your City], we cater to both local and
            long-distance relocations. We specialize in making your moving
            experience as smooth and stress-free as possible, from packing and
            transportation to cleaning your new home or office.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default MovingCompanyBanner;
