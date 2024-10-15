import React, { useState } from "react";


const SmoothMoveBlog = () => {
  // State for controlling the active slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the blog posts (this could be fetched or passed as props)
  const blogPosts = [
    {
      id: 1,
      date: "July 10, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle-free",
      image: "/path/to/truck-image-1.jpg",
    },
    {
      id: 2,
      date: "July 10, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle-free",
      image: "/path/to/truck-image-2.jpg",
    },
    {
      id: 3,
      date: "July 10, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle-free",
      image: "/path/to/truck-image-3.jpg",
    },
    {
      id: 4,
      date: "July 10, 2024",
      title:
        "Settling into a new home: Strategies for an effortless movement, hassle-free",
      image: "/path/to/truck-image-4.jpg",
    },
  ];

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === blogPosts.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? blogPosts.length - 1 : prevSlide - 1
    );
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

      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <div className="carousel-track">
          {blogPosts.map((post, index) => (
            <div
              className={`blog-card ${index === currentSlide ? "active" : ""}`}
              key={post.id}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <img src={post.image} alt={post.title} />
              <div className="blog-info">
                <span>{post.date}</span>
                <h4>{post.title}</h4>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};

export default SmoothMoveBlog;
