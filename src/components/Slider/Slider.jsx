/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = ({ users, handleDetailsUser, setShowUserDetail }) => {
  useEffect(() => {
    const leftArrow = document.querySelector(".awssld__prev");
    const rightArrow = document.querySelector(".awssld__next");

    if (leftArrow && rightArrow) {
      leftArrow.setAttribute("type", "button");
      rightArrow.setAttribute("type", "button");
    }
  }, []);

  return (
    <AwesomeSlider
      bullets={false}
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      className="w-full mt-1"
    >
      {users?.map((user, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 rounded shadow-lg cursor-pointer"
          onClick={() => {
            handleDetailsUser(user);
            setShowUserDetail(true);
          }}
        >
          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">
            Address: {user.country}, {user.zipcode}
          </p>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Slider;
