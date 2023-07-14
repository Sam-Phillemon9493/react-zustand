import React from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useImageName from "../store";
import "./style.css";

const Carousel = () => {
  const { imageHeading, imageArray, imageIndex, prevImage, nextImage } =
    useImageName((state) => {
      return {
        imageHeading: state.heading,
        imageArray: state.imageArray,
        imageIndex: state.imageIndex,
        nextImage: state.nextImage,
        prevImage: state.prevImage,
      };
    });

  return (
    <div className="wrapper">
      <h1>{imageHeading}</h1>
      <div className="container">
        <div className="content_inner_slider">
          <div className="image-div" id={imageArray[imageIndex].id}>
            <img src={imageArray[imageIndex].url} alt="" className="img" />
          </div>
        </div>
        <button type="button" className="prev_button" onClick={prevImage}>
          <ArrowBack />
        </button>
        <button type="button" className="next_button" onClick={nextImage}>
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

/* <ul className="dots">
          <li className="dot" value="0" onClick={clickRadioBtn}></li>
          <li className="dot" value="1" onClick={clickRadioBtn}></li>
          <li className="dot" value="2" onClick={clickRadioBtn}></li>
          <li className="dot" value="3" onClick={clickRadioBtn}></li>
          <li className="dot" value="4" onClick={clickRadioBtn}></li>
        </ul> */

// const clickRadioBtn = (e) => {
//   document.querySelectorAll(".dot")[e.target.value].style.background = "#000";
//   setImageIndex(e.target.value);
//   document.querySelectorAll(".dot").forEach((ele, index) => {
//     if (e.target.value !== index) {
//       ele.style.background = "#fff";
//     }
//   });
// };

// useEffect(() => {
//   document.querySelectorAll(".dot")[0].style.background = "#000";
//   document.querySelectorAll(".dot").forEach((ele, index) => {
//     if (index !== 0) {
//       ele.style.background = "#fff";
//     }
//   });
// }, []);
