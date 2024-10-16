const OurTeam = () => {

const skills = [
  "Moving Techniques",
  "Safety Protocols",
  "Customer Service Standards",
];

  return (
    <section className="our-team">
      <div className="container">
        <h2>OUR TEAM</h2>
        <h3>HIGHLY TRAINED PROFESSIONALS IN</h3>
        <div className="team-skills">
          {skills.map((item, i) => (
            <div className="skill">
              <div>
                <img src={`/images/team${i + 1}.png`} alt="Moving Techniques" />
              </div>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
        <p>
          Our team comprises highly trained professionals who can handle moves
          of all sizes, from small apartments to large commercial relocations.
          Led by our founder and CEO, <span className="highlight">Joshua</span>,
          we are committed to excellence in every move. Our staff undergoes
          rigorous training in moving techniques, safety protocols, and customer
          service standards to ensure your belongings are handled with the
          utmost care and professionalism.
        </p>
        <div className="learn-more">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
