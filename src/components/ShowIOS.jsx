import React from "react";
import FirstFloorIOS from "../map/FirstFloorIOS.jsx";
import SecondFloorIOS from "../map/SecondFloorIOS.jsx";
import ThirdFloor from "../map/ThirdFloor.jsx";

const Show = ({ selectedOption }) => {
  switch (selectedOption) {
    case "first":
      return <FirstFloorIOS />;
    case "second":
      return <SecondFloorIOS />;
    case "third":
      return <ThirdFloor />;
  }
};

export default Show;
