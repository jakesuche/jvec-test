const WhyChooseUs = () => {
  return (
    <section className="why-choose-us__wrapper">
      <div className="why-choose-us">
        <div className="content-wrapper">
          <div className="left-column">
            <h2>WHY CHOOSE US</h2>
            <h3>YOUR PERSONALIZED MOVING SOLUTION</h3>
            <p>
              Our mission is to provide stress-free, efficient, and courteous
              moving and cleaning services, ensuring seamless transitions for
              both residential and commercial clients. Explore our services and
              see how we can make your next move effortless.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="right-column">
            <div className="feature">
              <div className="feature-icon exceptional-service">
                <img src="/images/svg/service.svg" alt="" />
              </div>
              <h4>EXCEPTIONAL CUSTOMER SERVICE</h4>
              <p>
                We prioritize customer satisfaction by offering friendly,
                professional service. Our team is dedicated to making your
                moving experience as stress-free as possible.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon comprehensive-services">
                <img src="/images/svg/comprehensive-service.svg" alt="" />
              </div>
              <h4>COMPETITIVE PRICING</h4>
              <p>
                In addition to moving, we provide cleaning services to ensure
                your new space is spotless and ready for you to move in.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon gps-tracking">
                <img src="/images/svg/tracking.svg" alt="" />
              </div>
              <h4>GPS TRACKING</h4>
              <p>
                We provide real-time tracking of your belongings, giving you
                peace of mind during the moving process.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon comprehensive-services">
                <img src="/images/svg/pricing.svg" alt="" />
              </div>
              <h4>COMPREHENSIVE SERVICES</h4>
              <p>
                In addition to moving, we provide cleaning services to ensure
                your new space is spotless and ready for you to move in.
              </p>
            </div>
          </div>
        </div>
        <div className="road-lines">
          <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path
              d="M0,100 Q250,0 500,100 T1000,100"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="2"
            />
            <path
              d="M0,100 Q250,200 500,100 T1000,100"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
