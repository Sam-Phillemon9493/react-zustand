import React from "react";
import useImageName from "../store";
import "./style.css";

const ImageComponent = () => {
  const getName = useImageName((state) => state.imgName);
  const changeName = useImageName((state) => state.changeName);

  return (
    <div className="container">
      <h1>
        <span>{getName}</span> is the Most Sold Art.
      </h1>
      <button onClick={changeName}>This will change the name</button>
    </div>
  );
};

export default ImageComponent;
