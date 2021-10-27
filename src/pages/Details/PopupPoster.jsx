import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

const PopupPoster = ({ posterImg }) => {
  const { setIsOpenPoster } = useContext(AppContext);

  const closePoster = () => {
    setIsOpenPoster(false);
  };

  return (
    <div className="popup-poster">
      <div className="popup-poster-images">
        <img src={posterImg} alt="poster images" />
        <p onClick={() => closePoster()}>&#x2715;</p>
      </div>
    </div>
  );
};
export default PopupPoster;
