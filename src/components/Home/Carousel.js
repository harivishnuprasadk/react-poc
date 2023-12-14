import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const container = imageContainerRef.current;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on component unmount
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleNextClick = () => {
    const container = imageContainerRef.current;
    if (container) {
      const newScrollPosition = scrollPosition + container.offsetWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = imageContainerRef.current;
    if (container && scrollPosition > 0) {
      const newScrollPosition = scrollPosition - container.offsetWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h3 style={{ color: "white",marginBottom:'0px',marginTop:'5px', marginLeft:'20px' }}>{title}</h3>
      <div className="carousel-container">
        {scrollPosition > 0 && (
          <img
            className="prev-btn"
            src="https://p1.hiclipart.com/preview/546/139/750/arrows-icon-left-arrow-icon-back-icon-pointers-icon-white-black-text-logo-line-material-property-png-clipart.jpg"
            alt="img"
            onClick={handlePrevClick}
          />
        )}
        <div className="image-container" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img
              key={index}
              className={"test"}
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <img
          className="next-btn"
          src="https://p1.hiclipart.com/preview/334/468/1008/arrow-icon-forward-icon-navigation-icon-png-clipart.jpg"
          alt="img"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
