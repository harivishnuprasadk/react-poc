import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images, title }) => {
  const [showButtons, setShowButtons] = useState({ prev: false, next: true });
  const imageContainerRef = useRef(null);
  const lastImageRef = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const isLastImageVisible = entries.some((entry) => entry.isIntersecting);
      setShowButtons((prev) => ({ ...prev, next: !isLastImageVisible }));
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (lastImageRef.current) {
      observer.observe(lastImageRef.current);
    }

    return () => {
      if (lastImageRef.current) {
        observer.unobserve(lastImageRef.current);
      }
    };
  }, [images]);

  useEffect(() => {
    const container = imageContainerRef.current;

    const handleScroll = () => {
      const isAtBeginning = container.scrollLeft === 0;
      setShowButtons((prev) => ({ ...prev, prev: !isAtBeginning }));
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial update
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [images]);

  const openVid = () => {
    navigate("/player");
  };

  const handleNextClick = () => {
    const container = imageContainerRef.current;
    if (container) {
      const newScrollPosition = container.scrollLeft + container.offsetWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = imageContainerRef.current;
    if (container) {
      const newScrollPosition = container.scrollLeft - container.offsetWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div style={{ display: 'inline-flex',alignItems: 'baseline'  }}  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
      <h3
        style={{
          color:  'white',
          marginBottom: '0px',
          marginTop: '5px',
          marginLeft: '20px',
        }}
      >
        {title}
      </h3>

      {isHovered && (
        <span className='explore-all'style={{ color: '#4d98b8', marginLeft: '10px',fontSize:'smaller' }}>
           Explore all &gt;
        </span>
      )}
    </div>
      <div className="carousel-container">
        {showButtons.prev && (
          <div
            onClick={handlePrevClick}
            className="button-container prev-btn-container"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "white", fontSize: "2em" }}
              className="prev-btn"
            />
          </div>
        )}
        <div
          className="image-container"
          ref={imageContainerRef}
          onClick={openVid}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "130px",
                marginRight: "10px",
              }}
              className="carousel-image"
              ref={index === images.length - 1 ? lastImageRef : null}
            >
              <img
                className={"test"}
                src={image.imageUrl}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        {showButtons.next && (
          <div
            onClick={handleNextClick}
            className="button-container next-btn-container"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "white", fontSize: "2em" }}
              className="next-btn"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
