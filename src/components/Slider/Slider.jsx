import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  useEffect(() => {
    const leftArrow = document.querySelector(".awssld__prev");
    const rightArrow = document.querySelector(".awssld__next");

    if (leftArrow && rightArrow) {
      leftArrow.setAttribute("type", "button");
      rightArrow.setAttribute("type", "button");
    }
  }, []);

  return (
    <AutoplaySlider
      bullets={false}
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      className="w-full mt-1"
    >
      <div data-src="https://i.ibb.co.com/mzTxNQX/vietnam.jpg" />
      <div data-src="https://i.ibb.co.com/FVgRdm0/slide4.jpg" />
      <div data-src="https://i.ibb.co.com/0hysRCV/slide2.jpg" />
    </AutoplaySlider>
  );
};

export default Slider;
