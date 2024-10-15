import React from "react";
import Slider from "react-slick";
import "./index.scss";

const SmoothMoveBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="smooth-move-blog">
      <div className="blog-header">
        <h2>The Smooth Move Blog</h2>
        <h3>Moving and Relocation Tips and Everything in Between</h3>
        <p>
          Check out our blog for helpful tips and guides on making your move as
          smooth as possible! Topics include packing tips, moving checklists,
          and more.
        </p>
      </div>

      <Slider {...settings}>
        {[1, 2, 3].map((_, index) => (
          <div className="blog-card" key={index}>
            <img src="/path/to/truck-image.jpg" alt="Moving truck" />
            <div className="blog-info">
              <span>July 10, 2024</span>
              <h4>
                Settling into a new home: Strategies for an effortless movement,
                hassle-free
              </h4>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SmoothMoveBlog;
