/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = ({ index, schools, setActiveSlideIndex }) => {
  useEffect(() => {
    const leftArrow = document.querySelector(".awssld__prev");
    const rightArrow = document.querySelector(".awssld__next");

    if (leftArrow && rightArrow) {
      leftArrow.setAttribute("type", "button");
      rightArrow.setAttribute("type", "button");
    }
  }, []);

  const handleTransitionEnd = (e) => {
    const currentSlideIndex = e?.currentIndex || index || 0;
    setActiveSlideIndex(currentSlideIndex);
  };

  return (
    <AwesomeSlider
      bullets={false}
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      className="w-full mt-1"
      selected={index || 0}
      onTransitionEnd={handleTransitionEnd}
    >
      {schools?.map((school, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded shadow-lg cursor-pointer"
        >
          <h2 className="text-center text-xl font-bold">
            {school?.schoolNumber}
          </h2>
          <h2 className="text-xl font-bold">
            School : <span className="text-lg">{school?.schoolName}</span>
          </h2>
          <p className="text-gray-700">
            Address: <small>{school?.address}</small>{" "}
          </p>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Slider;
